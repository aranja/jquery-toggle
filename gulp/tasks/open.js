module.exports = function (gulp) {
  gulp.task('open', function() {
    gulp.src(gulp.config.target + 'index.html').pipe(gulp.$.open('', {
      url: 'http://localhost:' + gulp.config.port,
      app: gulp.config.browser
    }));
  });
};
