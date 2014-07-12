module.exports = function(gulp) {
  gulp.task('watch', function() {
    gulp.watch(gulp.config.target + '**/*.html', ['html']);
    gulp.watch(gulp.config.entry, ['browserify']);
  });
};
