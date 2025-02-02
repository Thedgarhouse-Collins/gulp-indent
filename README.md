## Usage

First, install `gulp-indent` as a development dependency:

```shell
npm install --save-dev gulp-indent
```

Then, add it to your `gulpfile.js`:

```javascript
var indent = require("gulp-indent");

gulp.src("./src/*.ext")
	.pipe(indent({
		tabs:true,
    amount:1
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### indent(options)

#### options.tabs
Type: `Boolean`  
Default: `false`
  
  True to use tabs, false to use spaces

#### options.amount
Type: `Number`  
Default: `2`
  
  Amount of tabs or spaces to indent


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-indent
[npm-image]: https://badge.fury.io/js/gulp-indent.png

[travis-url]: http://travis-ci.org/JohnyDays/gulp-indent
[travis-image]: https://secure.travis-ci.org/JohnyDays/gulp-indent.png?branch=master

[depstat-url]: https://david-dm.org/JohnyDays/gulp-indent
[depstat-image]: https://david-dm.org/JohnyDays/gulp-indent.png
