module.exports = function(gulp) {
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');

  function handleErrors() {
    gulp.$.notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, arguments);

    this.emit('end');
  }

  gulp.task('browserify', function() {
    return browserify({
      entries: [gulp.config.entry]
    })
    .bundle({debug: true})
    .on('error', handleErrors)
    .pipe(source(gulp.config.entry))
    .pipe(gulp.dest(gulp.config.target + 'js/'))
    .pipe(gulp.$.connect.reload());
  });
};
