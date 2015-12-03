var gulp = require('gulp');
var ts = require('gulp-typescript');

function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}

gulp.task('copy_js_lib', function () {
    return gulp.src([
		'jspm_packages/github/jmcriffey/bower-traceur-runtime@0.0.92/traceur-runtime.min.js',
		'jspm_packages/system.js',
		'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery/dist/jquery.min.js',
    ])
	.pipe(gulp.dest('src/assets/libs/'));
});

gulp.task('copy_css_files', function () {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
    ])
	.pipe(gulp.dest('src/assets/css/'));
});

gulp.task('typescript-compile', function () {
    return gulp.src('src/**/*.ts')
	.pipe(ts({
	    module: 'commonjs',
	    target: 'ES5',
	    emitDecoratorMetadata: true,
	    declarationFiles: false,
	    noExternalResolve: true
	}))
	.js.pipe(gulp.dest('src'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['typescript-compile']);
});

gulp.task('default', ['typescript-compile', 'copy_js_lib','copy_css_files']);