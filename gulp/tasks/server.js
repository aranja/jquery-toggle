module.exports = function (gulp) {
  gulp.task('server', ['connect', 'watch'], function() {
    gulp.start('open');
  });
};
