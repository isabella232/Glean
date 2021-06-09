module Glean.Query.Types
  ( SourceQuery_(..)
  , SourceStatement_(..)
  , Name
  , FieldName
  , SourcePat_(..)
  , Field(..)
  , IsWild(..)
  , IsSrcSpan
  , SrcSpan(..)
  , SrcLoc(..)
  ) where

import qualified Data.Aeson as Aeson
import Data.ByteString (ByteString)
import qualified Data.ByteString.Lazy.Char8 as BL
import Data.Text (Text)
import qualified Data.Text.Encoding as Text
import Data.Text.Prettyprint.Doc
import Data.Word

-- -----------------------------------------------------------------------------
-- Source Query Types

data SourceQuery_ head stmt = SourceQuery
  { srcQueryHead :: Maybe head
  , srcQueryStmts :: [stmt]
  }
  deriving (Eq, Show)

data SourceStatement_ pat = SourceStatement pat pat
  deriving (Eq, Show)

-- -----------------------------------------------------------------------------
-- Source Query Types

type Name = Text

type FieldName = Text

-- | A 'SrcSpan' delimits a portion of a text file.
-- The end position is the column /after/ the end of the span.
-- That is, a span of (1,1)-(1,2) is one character long, and a span of
-- (1,1)-(1,1) is zero characters long.
data SrcSpan = SrcSpan
  { spanStart :: {-# UNPACK #-} !SrcLoc
  , spanEnd   :: {-# UNPACK #-} !SrcLoc
  }
  deriving (Eq, Show)

-- | A point in a source text file.
data SrcLoc = SrcLoc
  { locLine :: {-# UNPACK #-} !Int
  , locCol  :: {-# UNPACK #-} !Int
  }
  deriving (Show, Eq)

data SourcePat_ s v t
  = Nat Word64
  | String Text
  | StringPrefix Text
  | ByteArray ByteString
    -- ^ There's no concrete syntax for this (yet), but it can be used
    -- via the DSL.
  | Array [SourcePat_ s v t]
  | Tuple [SourcePat_ s v t]
  | Struct [Field s v t]
  | App (SourcePat_ s v t) [SourcePat_ s v t]
  | KeyValue (SourcePat_ s v t) (SourcePat_ s v t)
  | Wildcard
  | Variable s v
  | ElementsOfArray (SourcePat_ s v t)
  | OrPattern (SourcePat_ s v t) (SourcePat_ s v t)
  | NestedQuery
      (SourceQuery_ (SourcePat_ s v t) (SourceStatement_ (SourcePat_ s v t)))
  | FactId (Maybe Text) Word64
  | TypeSignature (SourcePat_ s v t) t
 deriving (Eq, Show)

data Field s v t = Field FieldName (SourcePat_ s v t)
  deriving (Eq, Show)


-- ---------------------------------------------------------------------------
-- Pretty printing

class IsWild pat where
  isWild :: pat -> Bool

instance IsWild (SourcePat_ s v t) where
  isWild Wildcard = True
  isWild _ = False

-- | Types that represent the source location of a term in the AST
class (Pretty a) => IsSrcSpan a

instance IsSrcSpan SrcSpan

instance Pretty SrcSpan where
  pretty s =
    pretty (spanStart s)
    <> pretty (" - " :: String)
    <> pretty (spanEnd s)

instance Pretty SrcLoc where
  pretty (SrcLoc line col) =
    "line " <> pretty  line <> ", column " <> pretty col

instance (Pretty v, Pretty t) => Pretty (SourcePat_ s v t) where
  pretty (Nat w) = pretty w
  pretty (String str) =
    pretty (Text.decodeUtf8 (BL.toStrict (Aeson.encode (Aeson.String str))))
  pretty (StringPrefix str) = pretty (String str :: SourcePat_ s v t) <> ".."
  pretty (ByteArray b) = pretty (show b)
  pretty (Array pats) = brackets $ hsep (punctuate "," (map pretty pats))
  pretty (Tuple pats) = braces $ hsep (punctuate "," (map pretty pats))
  pretty (Struct fs) = cat [ nest 2 $ cat [ "{", fields fs], "}"]
    where
    fields = sep . punctuate "," . map field
    field (Field name pat) = pretty name <+> "=" <+> pretty pat
  pretty (App l pats) = pretty l <+> hsep (punctuate " " (map prettyArg pats))
  pretty (KeyValue k v) = prettyArg k <+> "->" <+> prettyArg v
  pretty Wildcard = "_"
  pretty (Variable _ name) = pretty name
  pretty (ElementsOfArray pat) = pretty pat <> "[..]"
  pretty (OrPattern lhs rhs) = sep [prettyArg lhs <+> "|", prettyArg rhs]
  pretty (NestedQuery q) = parens $ pretty q
  pretty (FactId Nothing n) = "$" <> pretty n
  pretty (FactId (Just p) n) = "$" <> pretty p <+> pretty n
  pretty (TypeSignature p t) = prettyArg p <+> ":" <+> pretty t

instance (Pretty pat, Pretty stmt) => Pretty (SourceQuery_ pat stmt) where
  pretty (SourceQuery maybeHead stmts) = case stmts of
    [] -> pretty maybeHead
    _ -> case maybeHead of
      Just head -> hang 2 (sep (pretty head <+> "where" : pstmts))
      Nothing -> sep pstmts
    where
    pstmts = punctuate ";" (map pretty stmts)

instance Pretty pat => Pretty (SourceStatement_ pat) where
  pretty (SourceStatement lhs rhs) =
    hang 2 $ sep [pretty lhs <+> "=", pretty rhs]

prettyArg :: (Pretty v, Pretty t) => SourcePat_ s v t -> Doc ann
prettyArg pat = case pat of
  App{} -> parens $ pretty pat
  KeyValue{} -> parens $ pretty pat
  OrPattern{} -> parens $ pretty pat
  TypeSignature{} -> parens $ pretty pat
  Nat{} -> pretty pat
  String{} -> pretty pat
  StringPrefix{} -> pretty pat
  ByteArray{} -> pretty pat
  Array{} -> pretty pat
  Tuple{} -> pretty pat
  Struct{} -> pretty pat
  ElementsOfArray{} -> pretty pat
  Wildcard{} -> pretty pat
  Variable{} -> pretty pat
  NestedQuery{} -> pretty pat
  FactId{} -> pretty pat
