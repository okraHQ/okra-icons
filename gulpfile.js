const env = require('yargs').argv.env;
var gulp =require('gulp');
var babel =require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('build', async () => {
   gulp.src(['src/./*.js','src/icons/*.js'])
      .pipe(babel())
      .pipe(gulp.dest(['dist']))
});

gulp.task('watch', async () => {
    if(env === 'dev') gulp.watch('./*.js', gulp.series('build'));
});

gulp.task('lint', function () {
    return gulp.src(['src/**'])
      .pipe(eslint({
        useEslintrc: true,
        envs: ['node']
        }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });

gulp.task('start', gulp.series('lint','build', 'watch'));