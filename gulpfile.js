const env = require('yargs').argv.env;
var gulp =require('gulp');
var babel =require('gulp-babel');

gulp.task('build', async () => {
   gulp.src(['src/./*.js','src/**/*.js'])
      .pipe(babel())
      .pipe(gulp.dest(['dist']))
});

gulp.task('watch', async () => {
    if(env === 'dev') gulp.watch('./*.js', gulp.series('build'));
});

gulp.task('start', gulp.series('build', 'watch'));