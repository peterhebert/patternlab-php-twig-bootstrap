"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var exec = require("child_process").exec;


gulp.task("sass", function() {
  return gulp
    .src("./source/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./source/css"));
});

gulp.task("watch", function() {
  gulp.watch("./source/scss/**/*.scss", ["sass", "pl:generate"]);
});

gulp.task("pl:serve", function(cb) {
  exec("php core/console --server --with-watch", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task("pl:generate", function(cb) {
  exec("php core/console --generate", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


// Default Task
gulp.task("default", ["sass", "pl:serve", "watch"]);