var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function() {

    var server = gls.new('app.js');
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['/**/*.css', '/**/*.html', '/**/*.handlebars'], server.notify);
    gulp.watch('app.js', server.start); // restart my server
});