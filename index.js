var isEmptyLine, through;

const PluginError = require('plugin-error');

through = require("through2");

isEmptyLine = function (string) {
  return string === "" || string === "\r";
};

module.exports = function (options) {
  var indent;
  if (options == null) {
    options = {};
  }
  if (options.tabs == null) {
    options.tabs = false;
  }
  if (options.amount == null) {
    options.amount = 2;
  }
  indent = function (file, enc, done) {
    var character, i, indentation, line, lines, number, ref;
    if (file.isNull()) {
      this.push(file);
      return done();
    }
    if (file.isStream()) {
      this.emit("error", new PluginError("gulp-indent", "Stream content is not supported"));
      return done();
    }
    if (file.isBuffer()) {
      character = options.tabs ? "\t" : " ";
      indentation = "";
      for (number = i = 0, ref = options.amount; 0 <= ref ? i < ref : i > ref; number = 0 <= ref ? ++i : --i) {
        indentation += character;
      }
      lines = file.contents.toString().split("\n");
      lines = (function () {
        var j, len, results;
        results = [];
        for (j = 0, len = lines.length; j < len; j++) {
          line = lines[j];
          results.push(!isEmptyLine(line) ? indentation + line : line);
        }
        return results;
      })();
      file.contents = new Buffer(lines.join("\n"));
      this.push(file);
    }
    return done();
  };
  return through.obj(indent);
};
