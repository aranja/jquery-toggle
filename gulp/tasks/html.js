module.exports = function(gulp) {
  gulp.task('html', function() {
    return gulp.src(gulp.config.target + '**/*.html')
      .pipe(gulp.$.connect.reload());
  });
};
