var gulp = require("gulp");
var conventionalChangelog = require("gulp-conventional-changelog");

gulp.task("changelog", function () {
    return gulp.src("CHANGELOG.md", {
        buffer: false
    })
        .pipe(conventionalChangelog({
            preset: "angular",
            outputUnreleased: true,
            releaseCount: 0
        }, {
            host: "https://github.com",
            owner: "Talatroncos",
            repository: "OSFPOV"
        }))
        .pipe(gulp.dest("./"));
});