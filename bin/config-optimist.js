module.exports = function(optimist) {
	optimist
		.boolean("help").alias("help", "h").alias("help", "?").describe("help")
		.string("config").describe("config", "Path to the config file")
		.string("env").describe("env", "Enviroment passed to the config, when it is a function")
		.string("context").describe("context", "The root directory for resolving entry point and stats")
		.string("entry").describe("entry", "The entry point")
		.string("module-bind").describe("module-bind", "Bind an extension to a loader")
		.string("module-bind-post").describe("module-bind-post")
		.string("module-bind-pre").describe("module-bind-pre")
		.string("output-path").describe("output-path", "The output path for compilation assets")
		.string("output-filename").describe("output-filename", "The output filename of the bundle")
		.string("output-chunk-filename").describe("output-chunk-filename", "The output filename for additional chunks")
		.string("output-source-map-filename").describe("output-source-map-filename", "The output filename for the SourceMap")
		.string("output-public-path").describe("output-public-path", "The public path for the assets")
		.string("output-jsonp-function").describe("output-jsonp-function", "The name of the jsonp function used for chunk loading")
		.boolean("output-pathinfo").describe("output-pathinfo", "Include a comment with the request for every dependency")
		.string("output-library").describe("output-library", "Expose the exports of the entry point as library")
		.string("output-library-target").describe("output-library-target", "The type for exposing the exports of the entry point as library")
		.string("records-input-path").describe("records-input-path", "Path to the records file (reading)")
		.string("records-output-path").describe("records-output-path", "Path to the records file (writing)")
		.string("records-path").describe("records-path", "Path to the records file")
		.string("define").describe("define", "Define any free var in the bundle")
		.string("target").describe("target", "The targeted execution enviroment")
		.boolean("cache").describe("cache", "Enable in memory caching").default("cache", true)
		.boolean("watch").alias("watch", "w").describe("watch", "Watch the filesystem for changes")
		.boolean("watch-stdin").alias("watch-stdin", "stdin").describe("Exit the process when stdin is closed")
		.describe("watch-aggregate-timeout", "Timeout for gathering changes while watching")
		.describe("watch-poll", "The polling intervall for watching (also enable polling)")
		.boolean("hot").describe("hot", "Enables Hot Module Replacement")
		.boolean("debug").describe("debug", "Switch loaders to debug mode")
		.string("devtool").describe("devtool", "Enable devtool for better debugging experience")
		.boolean("progress").describe("progress", "Print compilation progress in percentage")
		.string("resolve-alias").describe("resolve-alias", "Setup a module alias for resolving")
		.string("resolve-extensions").describe("resolve-extensions", "Setup extensions that should be used to resolve modules")
		.string("resolve-loader-alias").describe("resolve-loader-alias", "Setup a loader alias for resolving")
		.describe("optimize-max-chunks", "Try to keep the chunk count below a limit")
		.describe("optimize-min-chunk-size", "Try to keep the chunk size above a limit")
		.boolean("optimize-minimize").describe("optimize-minimize", "Minimize javascript and switches loaders to minimizing")
		.string("prefetch").describe("prefetch", "Prefetch this request")
		.string("provide").describe("provide", "Provide these modules as free vars in all modules")
		.boolean("labeled-modules").describe("labeled-modules", "Enables labeled modules")
		.string("plugin").describe("plugin", "Load this plugin")
		.boolean("bail").describe("bail", "Abort the compilation on first error")
		.boolean("profile").describe("profile", "Profile the compilation and include information in stats")
		.boolean("d").describe("d", "shortcut for --debug --devtool eval-check-module-source-map --output-pathinfo")
		.boolean("p").describe("p", "shortcut for --optimize-minimize --define process.env.NODE_ENV=\"production\"");
};
