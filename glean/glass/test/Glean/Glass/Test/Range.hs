{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

--
-- Check some things about line/col range conversoins
--
module Glean.Glass.Test.Range (main) where

import Test.HUnit ( Test(..), (@=?) )

import Data.Word ( Word64 )
import Data.Int ( Int64 )
import Data.ByteString ( ByteString )

import TestRunner ( testRunner )
import Facebook.Init ( withFacebookUnitTest )

import Glean.Glass.Range
    ( exclusiveRangeToFileByteSpan,
      fileByteSpanToExclusiveRange,
      inclusiveRangeToExclusiveRange )
import Glean (toNat)

import qualified Glean.Glass.Types as Glass
import qualified Glean.Schema.Src.Types as Src
import qualified Glean.Util.Range as Range

main :: IO ()
main = withFacebookUnitTest $ testRunner $ TestList
  [ TestList
      [ TestLabel name $
         testByteSpanToRange bs glass_range offs
      , TestLabel ("inverse-" <> name) $
         testRangeToByteSpan glass_range bs offs
      , TestLabel ("inc-exl-range" <> name) $
         testIncRangeToExcRange src_range glass_range
      ]
  | (name,bs,glass_range,offs) <- examples
  , let src_range = Range.byteRangeToRange dummyfile offs
          (Range.byteSpanToRange bs)
  ]

testByteSpanToRange :: Src.ByteSpan -> Glass.Range -> Range.LineOffsets -> Test
testByteSpanToRange bs expected offs = TestCase $ expected @=? actual
  where
    actual = fileByteSpanToExclusiveRange dummyfile (Just offs) bs

testRangeToByteSpan :: Glass.Range -> Src.ByteSpan -> Range.LineOffsets -> Test
testRangeToByteSpan grange expected offs = TestCase $ expected @=? actual
  where
    actual = exclusiveRangeToFileByteSpan dummyfile (Just offs) grange

testIncRangeToExcRange :: Src.Range -> Glass.Range -> Test
testIncRangeToExcRange src_range expected = TestCase $ expected @=? actual
  where
    actual = inclusiveRangeToExclusiveRange src_range

dummyfile :: Src.File
dummyfile = Src.File 0 Nothing

examples :: [(String, Src.ByteSpan, Glass.Range, Range.LineOffsets)]
examples =
  [ ("origin"
    , bytespan 0 2
    , range 1 1 1 3
    , filemap "ab     \n"
  )
  , ("origin-offset"
    , bytespan 1 2
    , range 1 2 1 4
    , filemap "ab     \n"
  )
  , ("origin-unit"
    , bytespan 0 1
    , range 1 1 1 2
    , filemap "ab     \n"
  )
  , ("origin-multiline"
    , bytespan 0 4
    , range 1 1 2 2
    , filemap "12\n34\n56\n78\n"
  )
  , ("flow-off-by-one T92482625"
    , bytespan 174 31
    , range 12 3 12 34
    , filemap "/**\n * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.\n *\n * @emails oncall+codehub\n * @flow strict-local\n * @format\n */\n\n'use strict';\n\nimport type {\n  CodeHubSearchAtoms"
    )
  ]

filemap :: ByteString -> Range.LineOffsets
filemap = Range.getLineOffsets

bytespan :: Word64 -> Word64 -> Src.ByteSpan
bytespan a b = Src.ByteSpan (toNat a) (toNat b)

range :: Int64 -> Int64 -> Int64 -> Int64 -> Glass.Range
range = Glass.Range