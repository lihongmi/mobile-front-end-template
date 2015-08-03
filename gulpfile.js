// todo https://github.com/jonkemp/gulp-useref http://imziv.com/blog/article/read.htm?id=60
var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var stripDebug = require('gulp-strip-debug'); // 该插件用来去掉console和debugger语句

var pkg = require('./package.json');



var SRC_PATH = 'src/';
var DIST_PATH = 'build';

var paths = {
    js: [
        SRC_PATH + '/**/*.js'
    ],
    css: [
        SRC_PATH + '/**/*.css',
        '!' + SRC_PATH + '/assets/css/demo/**/*.css'// 排除demo
    ],
    image: [
        SRC_PATH + '/**/*.+(png|gif|jpg|jpeg)',
        '!' + SRC_PATH + '/assets/image/demo/**/*.+(png|gif|jpg|jpeg)'// 排除demo
    ],
    html: [
        SRC_PATH + '/**/*.html',
        '!' + SRC_PATH + '/views/demo/**/*.html'// 排除demo
    ]
};

gulp.task('build', ['min-js', 'min-css', 'move-html', 'move-image']);

// 压缩js
gulp.task('min-js', ['clean-js'], function() {
    return gulp.src(paths.js)
        .pipe(stripDebug())
        .pipe(uglify()) // 压缩
        .pipe(gulp.dest(DIST_PATH)); // 移动到目标文件。若目标文件夹不存在，会自动创建
});

// 压缩css
gulp.task('min-css', ['clean-css'], function() {
    return gulp.src(paths.css)
        .pipe(minifyCss()) // 压缩
        .pipe(gulp.dest(DIST_PATH)); // 移动到目标文件。若目标文件夹不存在，会自动创建
});

// 移动HTML
gulp.task('move-html', ['clean-html'], function() {
    return gulp.src(paths.html)
        .pipe(gulp.dest(DIST_PATH));
});

// 移动HTML
gulp.task('move-image', ['clean-image'], function() {
    return gulp.src(paths.image)
        .pipe(gulp.dest(DIST_PATH));
});

// 清空js
gulp.task('clean-js', function() {
    return gulp.src(DIST_PATH + '/**/*.js', {
            read: false
        })
        .pipe(clean());
});

gulp.task('clean-css', function() {
    return gulp.src(DIST_PATH + '/**/*.css', {
            read: false
        })
        .pipe(clean());
});

gulp.task('clean-html', function() {
    return gulp.src(DIST_PATH + '/**/*.html', {
            read: false
        })
        .pipe(clean());
});

gulp.task('clean-image', function() {
    return gulp.src(DIST_PATH + '/**/*.png', {
            read: false
        })
        .pipe(clean());
});


