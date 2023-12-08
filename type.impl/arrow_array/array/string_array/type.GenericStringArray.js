(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#25-66\">source</a><a href=\"#impl-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_data_type\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#28-30\">source</a><h4 class=\"code-header\">pub const fn <a href=\"arrow_array/array/string_array/type.GenericStringArray.html#tymethod.get_data_type\" class=\"fn\">get_data_type</a>() -&gt; <a class=\"enum\" href=\"arrow_schema/datatype/enum.DataType.html\" title=\"enum arrow_schema::datatype::DataType\">DataType</a></h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: please use <code>Self::DATA_TYPE</code> instead</span></div></span></summary><div class=\"docblock\"><p>Get the data type of the array.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.num_chars\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#37-39\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/string_array/type.GenericStringArray.html#tymethod.num_chars\" class=\"fn\">num_chars</a>(&amp;self, i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of <code>Unicode Scalar Value</code> in the string at index <code>i</code>.</p>\n<h5 id=\"performance\"><a href=\"#performance\">Performance</a></h5>\n<p>This function has <code>O(n)</code> time complexity where <code>n</code> is the string length.\nIf you can make sure that all chars in the string are in the range <code>U+0x0000</code> ~ <code>U+0x007F</code>,\nplease use the function <a href=\"#method.value_length\"><code>value_length</code></a> which has O(1) time complexity.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.take_iter\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#42-47\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/string_array/type.GenericStringArray.html#tymethod.take_iter\" class=\"fn\">take_iter</a>&lt;'a&gt;(\n    &amp;'a self,\n    indexes: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt; + 'a\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; + 'a</h4></section></summary><div class=\"docblock\"><p>Returns an iterator that returns the values of <code>array.value(i)</code> for an iterator with each element <code>i</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.take_iter_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#53-58\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"arrow_array/array/string_array/type.GenericStringArray.html#tymethod.take_iter_unchecked\" class=\"fn\">take_iter_unchecked</a>&lt;'a&gt;(\n    &amp;'a self,\n    indexes: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt; + 'a\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; + 'a</h4></section></summary><div class=\"docblock\"><p>Returns an iterator that returns the values of <code>array.value(i)</code> for an iterator with each element <code>i</code></p>\n<h5 id=\"safety\"><a href=\"#safety\">Safety</a></h5>\n<p>caller must ensure that the indexes in the iterator are less than the <code>array.len()</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from_binary\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#62-65\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/string_array/type.GenericStringArray.html#tymethod.try_from_binary\" class=\"fn\">try_from_binary</a>(\n    v: <a class=\"type\" href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a>&lt;OffsetSize&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"arrow_schema/error/enum.ArrowError.html\" title=\"enum arrow_schema::error::ArrowError\">ArrowError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Fallibly creates a <a href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\"><code>GenericStringArray</code></a> from a <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\"><code>GenericBinaryArray</code></a> returning\nan error if <a href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\"><code>GenericBinaryArray</code></a> contains invalid UTF-8 data</p>\n</div></details></div></details>",0,"arrow_array::array::string_array::StringArray","arrow_array::array::string_array::LargeStringArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3C%26str%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#90-94\">source</a><a href=\"#impl-From%3CVec%3C%26str%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#91-93\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<&str>>","arrow_array::array::string_array::StringArray","arrow_array::array::string_array::LargeStringArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CGenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#76-82\">source</a><a href=\"#impl-From%3CGenericByteArray%3CGenericBinaryType%3COffsetSize%3E%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow_array/array/byte_array/struct.GenericByteArray.html\" title=\"struct arrow_array::array::byte_array::GenericByteArray\">GenericByteArray</a>&lt;<a class=\"struct\" href=\"arrow_array/types/struct.GenericBinaryType.html\" title=\"struct arrow_array::types::GenericBinaryType\">GenericBinaryType</a>&lt;OffsetSize&gt;&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#79-81\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"type\" href=\"arrow_array/array/binary_array/type.GenericBinaryArray.html\" title=\"type arrow_array::array::binary_array::GenericBinaryArray\">GenericBinaryArray</a>&lt;OffsetSize&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<GenericByteArray<GenericBinaryType<OffsetSize>>>","arrow_array::array::string_array::StringArray","arrow_array::array::string_array::LargeStringArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3COption%3CString%3E%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#96-100\">source</a><a href=\"#impl-From%3CVec%3COption%3CString%3E%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#97-99\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<Option<String>>>","arrow_array::array::string_array::StringArray","arrow_array::array::string_array::LargeStringArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3CString%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#102-106\">source</a><a href=\"#impl-From%3CVec%3CString%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#103-105\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<String>>","arrow_array::array::string_array::StringArray","arrow_array::array::string_array::LargeStringArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3COption%3C%26str%3E%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#84-88\">source</a><a href=\"#impl-From%3CVec%3COption%3C%26str%3E%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#85-87\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<Option<&str>>>","arrow_array::array::string_array::StringArray","arrow_array::array::string_array::LargeStringArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#479-483\">source</a><a href=\"#impl-PartialEq-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#480-482\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","arrow_array::array::string_array::StringArray","arrow_array::array::string_array::LargeStringArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CGenericListArray%3COffsetSize%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#68-74\">source</a><a href=\"#impl-From%3CGenericListArray%3COffsetSize%3E%3E-for-GenericByteArray%3CGenericStringType%3COffsetSize%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\">GenericListArray</a>&lt;OffsetSize&gt;&gt; for <a class=\"type\" href=\"arrow_array/array/string_array/type.GenericStringArray.html\" title=\"type arrow_array::array::string_array::GenericStringArray\">GenericStringArray</a>&lt;OffsetSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/string_array.rs.html#71-73\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\">GenericListArray</a>&lt;OffsetSize&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<GenericListArray<OffsetSize>>","arrow_array::array::string_array::StringArray","arrow_array::array::string_array::LargeStringArray"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()