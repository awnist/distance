## What's Distance?

Distance is a Coffeescript and Javascript module for calculating distances between strings.

    var distance = require "distance"
    console.log(distance.sift3("banana", "fanana"))
    console.log(distance.levenshtein("banana", "fanana"))

The distance string metrics currently supported are:

# [Levenshtein](http://en.wikipedia.org/wiki/Levenshtein_distance) - For accuracy 
# [Sift3](http://siderite.blogspot.com/2007/04/super-fast-and-accurate-string-distance.html) - For speed 

To our knowledge, the implementations are the fastest variations available. 

## Installation

The recommended way is through the excellent [npm](http://www.npmjs.org/):

    $ npm install distance

Otherwise, you can check it in your repository and then expose it:

    $ git clone git://github.com/awnist/distance.git node_modules/distance/

Distance is [UNLICENSED](http://unlicense.org/).
