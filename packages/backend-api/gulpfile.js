const shelljs = require('shelljs');
const gulp = require('gulp');
const typescript = require('gulp-typescript');
const developServer = require('gulp-develop-server');
const newer = require('gulp-newer');
const notifier = require('node-notifier');

const tsProject = typescript.createProject('tsconfig.json');

const notify = message => {
  notifier.notify({
    title: 'Notify!',
    message
  });
};
const distFolder = 'dist';

gulp.task('clean', done => {
  shelljs.rm('-rf', distFolder);
  done();
});

gulp.task('clean.routes', done => {
  shelljs.rm('-rf', `${distFolder}/routes`);
  done();
});

gulp.task('compile', () => {
  return gulp
    .src('src/**/*.ts')
    .pipe(tsProject())
    .js.pipe(gulp.dest(distFolder));
});

gulp.task('copy', () => {
  return gulp.src(['package.json']).pipe(gulp.dest(distFolder));
});

gulp.task('serve', done => {
  developServer.listen({ path: 'dist/index.js' }, err => {
    err && console.error(err);
    notify('Server started, begin watching...');
    done();
  });
});

gulp.task('restart', done => {
  developServer.restart(err => {
    err && console.error(err);
    notify('Restart successfully.');
    done();
  });
});

gulp.task('watch', done => {
  gulp.watch(['src/**/*.ts'], { delay: 1000 }, gulp.series('clean.routes', 'compile', 'restart'));
  done();
});

gulp.task('dev', gulp.series('clean', 'compile', gulp.parallel('serve', 'watch')));

gulp.task('installDeps', done => {
  shelljs.cd(distFolder);
  shelljs.exec('npm i --production');
  done();
});

gulp.task('build', gulp.series('clean', 'copy', 'compile', 'installDeps'));
