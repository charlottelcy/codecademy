<?php

// method 1: using variable parsing
function generateStory1($singular_noun, $verb, $color, $distance_unit) {
  $story = "The ${singular_noun}s are lovely, $color, and deep.\nBut I have promises to keep,\nAnd ${distance_unit}s to go before I $verb,\nAnd ${distance_unit}s to go before I $verb.\n\n";
  return $story;
}

// method 2: using php in-built str_replace
function generateStory2($singular_noun, $verb, $color, $distance_unit) {
  $story = "The woods are lovely, dark, and deep.\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.\n\n";
  $search_array = array("woods", "dark", "miles", "sleep");
  $replace_array = array($singular_noun, $color, $distance_unit, $verb);
  return str_replace($search_array, $replace_array, $story);
}

// test method 1
echo "Testing Method 1:\n";
echo generateStory1("Apple", "abandon", "aqua", "centimeter");
echo generateStory1("Banana", "babble", "blue", "meter");
echo generateStory1("Calcium", "calcify", "charcoal", "kilometer");

// test method 2
echo "Testing Method 2:\n";
echo generateStory2("Apples", "abandon", "aqua", "centimeters");
echo generateStory2("Bananas", "babble", "blue", "meters");
echo generateStory2("Calciums", "calcify", "charcoal", "kilometers");
?>