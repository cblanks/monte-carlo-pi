var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
 
gulp.task('default', function() {
  gulp.src('index.html')
    .pipe( htmlreplace({
      'js': 'https://d3js.org/d3.v4.min.js'
    }) )
    .pipe(gulp.dest('build/'));
});