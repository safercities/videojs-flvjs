var gulp = require('gulp');
var concat = require('gulp-concat');

var sources = [
    'node_modules/videojs-contrib-media-sources/dist/videojs-contrib-media-sources.min.js',
    'node_modules/flv.js/dist/flv.min.js',
    'src/**/*.js'
];

gulp.task('build', function() {
    return gulp.src(sources)
        .pipe(concat('videojs-flvjs.js'))
        .pipe(gulp.dest('dist/'));
});