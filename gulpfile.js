var gulp        = require('gulp'),
    sass        = require('gulp-sass')
    minifycss   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    notify      = require('gulp-notify'),
    concat      = require('gulp-concat'),
    cache       = require('gulp-cache'),
    cssmin      = require('gulp-cssmin'),
    livereload  = require('gulp-livereload');
    plumber     = require('gulp-plumber');


var config = {

    // If you do not have the live reload extension installed,
    // set this to true. We will include the script for you,
    // just to aid with development.
    // We recommend to use the Chrome extension for LiveReload
    appendLiveReload: false,
    // Should CSS & JS be compressed?
    minifyCss: true,
    uglifyJS: true

};

var vendorName = 'Ecommerce121';
var themeName = 'exercise4';
var webPath = 'web/';
var rootPath = '../../../../../pub/static/frontend/' + vendorName + '/' + themeName + '/en_US/';


// Sass
gulp.task('css', function() {
    var stream = gulp.src(webPath + 'scss/styles.scss')
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .on('error', function (err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(cssmin())
        .pipe(gulp.dest(webPath + 'css'))
        .pipe(gulp.dest(rootPath + 'css'));

    if (config.minifyCss === true) {
        stream.pipe(minifycss({keepSpecialComments: '0'}));
    }

    stream.pipe(livereload());

    return stream.pipe(notify({ message: 'Sass compiled succesfully!' }));
});

// JS
gulp.task('js', function() {
    /* Here you need to append your custom codes placed on js/custom folder */
    var scripts = [
        webPath + 'js/custom/_my_custom_scripts.js',
    ];

    if (config.appendLiveReload === true) {
        scripts.push(webPath + 'js/livereload.js');
    }

    var stream = gulp
        .src(scripts)
        .pipe(concat('script.js'));

    if (config.uglifyJS === true) {
        stream.pipe(uglify());
    }

    stream.pipe(gulp.dest(webPath + 'js'));
    stream.pipe(gulp.dest(rootPath + 'js'));
    stream.pipe(livereload());

    return stream.pipe(notify({ message: 'Successfully compiled JavaScript' }));
});

// Images
gulp.task('images', function() {
    return gulp
        .src(webPath + 'images/**/*')
        .pipe(gulp.dest(webPath + 'images'))
        .pipe(gulp.dest(rootPath + 'images'))
        .pipe(livereload())
        .pipe(notify({ message: 'Successfully processed image' }));
});

// Default task
gulp.task('default', [], function() {
    gulp.start('css', 'js', 'images');
});


// Watch
gulp.task('watch', function() {

    livereload.listen();

    // Watch .less files
    gulp.watch(webPath + 'scss/**/*.scss', ['css']);

    // Watch .js files
    gulp.watch(webPath + 'js/**/*.js', ['js']);

    // Watch image files
    gulp.watch(webPath + 'images/**/*', ['images']);

    // Create LiveReload server
    var server = livereload();

    // Watch any files in , reload on change
    gulp.watch([webPath + 'css/style.css', webPath + 'images/!**!/!*']).on('change', function(file) {
        server.changed(file.path);
    });

});