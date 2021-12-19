const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');

// BrowserSync for live reload on file saves
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "site",
      stream: true
    },
    //Specifiy a socket implementation of your website
    //socket: {

       //For using a socket implementation of your website, 
       //configure your DNS records to point to the ip address of your host machine.
       //Specify the socket name next to the field 'namespace' equal to your chosen DNS record pointing 
       //to you host machine. ex: 'your.dns.record'

	    //namespace: "gulp.mintymint.info"
    //},
    ghostMode:false,
    port: 80,
    notify:false,
  });
  done();
}
// BrowserSync for live reload on file saves

// pug Preprocessor
function pugPro() {
   return (
      gulp.src('site/pug/index.pug')
      // Specifies which file is will be processed into html
      .pipe(pug({
          pretty: true
      }))
      // Compiles the pug file into HTML
      .pipe(gulp.dest('site'))
      // Specifies where the processed HTML file will reside
      .pipe(browsersync.reload({
         stream: true,
         notify: false
      }))
   );
};
// pug Preprocessor

// Sass Preprocessor
function sassPro() {
   return (
      gulp.src('site/css/style.sass')
      .pipe(sass()) //converts sass to css
      .pipe(autoprefixer('last 3 version'))
      .pipe(gulp.dest('site/css'))
      .pipe(browsersync.reload({
         stream: true,
         notify: false
      }))
   );
};
// Sass Preprocessor

// JavaScript Concatenation
function jsPro(){
   return (
      gulp.src('site/js/js-lib/*.js')
      //specify which files are to be combined in which order
      .pipe(concat('functions.js'))
      //specifies which file stores the concatenated js files
      .pipe(gulp.dest('site/js'))
      //specifies which folder will contain the concatenated js file
      .pipe(browsersync.reload({
            stream: true,
            notify: false
      }))
   );
};
// JavaScript Concatenation

//Watch files
function watchFiles() {
   gulp.watch('site/pug/**/*.pug', gulp.series(pugPro));
   gulp.watch('site/css/*.sass', gulp.series(sassPro));
   gulp.watch('site/js/js-lib/*.js', gulp.series(jsPro));
   gulp.watch(
      [
         'site/*.html',
         'site/css/*.css',
         'site/img/*',
         'site/js/*.js'
      ]
   );
};
//Watch files

// define tasks to process
const build = gulp.series( pugPro, sassPro, jsPro, browserSync, watchFiles);
// define tasks to process

// export tasks
exports.build = build;
exports.default = build;
