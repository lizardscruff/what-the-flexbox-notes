var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// so basically you make these functions that perform a task
gulp.task('styles', function() {
    // put the file that needs to be altered here
    gulp.src('style.css')
        // pipe it through autoprefixer
        .pipe(autoprefixer())
        // after it's done put it in the 'build' dir
        .pipe(gulp.dest(assets_path + 'build'));
});

// then you get those functions to run everytime the file changes
gulp.task('watch', function() {
    // everytime 'style.css' changes, perform[styles function, blahblah function]
    gulp.watch('style.css', ['styles']);
});


// figure out a way to use a taskrunner 
// get it to do autoprefixing
// make it watch the css file so i don't have to manually do it 