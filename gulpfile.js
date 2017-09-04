var gulp			= require("gulp");
var shell			= require("gulp-shell");
var config			= require("config");
var argv			= require("yargs").argv;
var gutil			= require("gulp-util");

gulp.task("build", () => {
	var client =  argv.client === undefined ? false : true;
	var server =  argv.server === undefined ? false : true;
	var tasks = [];

	if (client) {
		// Configure client build here
		logError("Client build not implemented");
	}
	if (server) {
		tasks.push("gulp --gulpfile src/server/gulpfile.js");
	}
	if (tasks.length == 0)
		throwError("At least one build option must be chosen!");
	
	shell.task(tasks)();
})

gulp.task("deploy", () => {
	var client =  argv.client === undefined ? false : true;
	var server =  argv.server === undefined ? false : true;

	if (!client && !server)
		throwError("At least one deploy option must be chosen!");

	if (client) {
		// Configure client deploy options here.
		// This might be copying something to ext res.
		logError("Client deplyoment is not implemented");
	}
	if (server) {
		logError("Server deplyoment is not implemented");
	}
})

function logError(err) {
	gutil.log(gutil.colors.red(err));
}

function throwError(err) {
	logError(err);
	throw err;
}