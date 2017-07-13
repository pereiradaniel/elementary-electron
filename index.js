var picture = require('cat-picture')
var image = require('lighting-image-poly')
var remote = require('electron').remote
var fs = require('fs')

var src = picture.src
picture.remove()

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
