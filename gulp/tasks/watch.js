var gulp = require("gulp"),
	watch = require("gulp-watch"),
	browserSync = require("browser-sync").create();

gulp.task("watch", function() {
	console.log("---------------------");
	console.log("Watch Task Has Begun.");
	console.log("---------------------");
	browserSync.init({
		server: {
			baseDir: "app"
		},
		browser: "google chrome"
	});

	watch("./app/index.html", function() {
		browserSync.reload();
	});

	watch("./app/assets/styles/**/*.css", function() {
		gulp.start("cssInject");
	});
});

// The second argument is a dependency that runs before the first argument
gulp.task("cssInject", ["styles"], function() {
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
});