"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var htmlmin = require("gulp-htmlmin");
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var size = require('gulp-size');



gulp.task('scripts', function() {
  return gulp.src('source/js/*.js')
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('build/js'))
      .pipe(rename('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));
});

/* gulp.task('scripts', function() {
  var js = gulp.src(['source/js/*.js', '!source/js/*jquery*', '!source/js/*bootstrap*'])
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(size({
        title: 'size of custom js'
      }))
      .pipe(gulp.dest('build/js'));
  var jsDeps = gulp.src(['js/*jquery*', 'js/*bootstrap*'])
    .pipe(concat('main.js'))
    .pipe(size({
      title: 'size of js dependencies'
    }))
    .pipe(gulp.dest('build/js'));
  stream.concat(js, jsDeps);
}); */


/* gulp.task('compress', async function () {
  gulp.src('source/js/*.js')
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.scombo.js', '-min.js']
    }))
    .pipe(gulp.dest('build/js'));
}); */


gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("minify-html", () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
})

gulp.task("sprite", function () {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("images", function () {
  return gulp.src("source/img/*.{png,jpg,svg,jpeg}")
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/*.{jpg,png,jpeg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("source/img"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/*.ico"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

gulp.task("server", function () {
  server.init({
    server: "build/"
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/img/*.{jpg,png,jpeg,svg}", gulp.series("html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/*.html", gulp.series("minify-html"));
  gulp.watch("source/js/*.js", gulp.series("html", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("scripts"));
 /*  gulp.watch("source/js/*.js", gulp.series("compress")); */


});



gulp.task("refresh", function (done) {
  server.reload();
  done();
});


gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "scripts",
/*   "compress", */
  "sprite",
  "html",
  "minify-html"

));

gulp.task("start", gulp.series("build", "server"));
