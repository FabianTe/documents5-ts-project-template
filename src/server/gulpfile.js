var gulp			= require("gulp");
var tsc				= require("gulp-typescript");
var dest			= "../../build/server";

gulp.task("tsc", () => {
	var project = tsc.createProject("tsconfig.json");
	return project.src()
		.pipe(project())
		.js
		.pipe(gulp.dest(dest))
})

gulp.task("default", [
	"tsc"
])