var gulp = require('gulp');
var glob = require('glob');
var tasks = glob.sync('*.js', { cwd: './gulp/tasks/' });

gulp.config = require('./config.json');
gulp.$ = require('gulp-load-plugins')();

tasks.forEach(function(task) {
  require('./tasks/' + task)(gulp);
});
