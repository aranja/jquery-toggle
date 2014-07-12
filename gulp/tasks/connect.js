module.exports = function(gulp) {
  gulp.task('connect', function() {
    gulp.$.connect.server({
      root: gulp.config.target,
      port: gulp.config.port,
      livereload: true
    });
  });
};
