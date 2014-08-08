module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      files: {
        "css/global.css" : "scss/global.scss"
      }
    },

    shell: {
      jekyllServe: {
        command: "jekyll serve"
      },
      jekyllBuild: {
        command: "jekyll build"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["index.html", "_layouts/*.html", "_posts/*.md", "_includes/*.html"],
        tasks: ["shell:jekyllBuild"]
      },
      css: {
        files: ["scss/*.scss"],
        tasks: ["sass", "shell:jekyllBuild"]
      }
    }

  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("default", ["sass", "shell:jekyllBuild", "watch"]);

};