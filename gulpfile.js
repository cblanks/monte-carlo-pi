var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlreplace = require('gulp-html-replace');
var bs = require('browser-sync').create();

gulp.task('default', function() {
  gulp
    .src('index.html')
    .pipe(
      htmlreplace({
        css: {
          src: gulp.src('style.scss').pipe(sass()),
          tpl: '<style>%s</style>'
        },
        'js': {
          src: gulp.src('node_modules/d3/build/d3.min.js'),
          tpl: '<script>%s</script>'
        }
      })
    )
    .pipe(
      gulp.dest('build/')
    )
  }
);

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(bs.reload({ stream: true }));
});

gulp.task('sass:watch', function () {
  gulp.watch('style.scss', ['sass']);
});

gulp.task('watch', ['browser-sync', 'sass:watch']);
