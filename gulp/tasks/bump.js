module.exports = function(gulp) {
  gulp.task('bump', function(){
    return gulp.src('./*.json')
      .pipe(gulp.$.bump())
      .pipe(gulp.dest('./'));
  });
};
