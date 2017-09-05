/**
 * Created by deepcam on 2017/8/10.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
    srcPath:'src/',
    devPath:'build/',
    prdPath:'dist/'
};

gulp.task('lib',function () {
    //读取目录
   gulp.src('bower_components/**/*.js')
       //拷贝文件到指定目录
       .pipe(gulp.dest(app.devPath + 'vendor'))
       .pipe(gulp.dest(app.prdPath + 'vendor'))
       //刷新
       .pipe($.connect.reload());
});

gulp.task('html',function () {
    var options = {
        removeComments: true//,//清除HTML注释
        //collapseWhitespace: true,//压缩HTML
        //collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        //removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        //removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
       // removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
       // minifyJS: true,//压缩页面JS
       // minifyCSS: true//压缩页面CSS
    };
   gulp.src(app.srcPath + '**/*.html')
       .pipe(gulp.dest(app.devPath))
       //压缩html代码
       .pipe($.htmlmin(options))
       .pipe(gulp.dest(app.prdPath))
       .pipe($.connect.reload());
});

gulp.task('json',function () {
    gulp.src(app.srcPath + 'data/**/*.json')
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.prdPath + 'data'))
        .pipe($.connect.reload());
});

gulp.task('less',function () {
   gulp.src(app.srcPath + 'style/index.less')
       //编译less
       .pipe($.less())
       .pipe(gulp.dest(app.devPath + 'css'))
    //压缩css
       .pipe($.cssmin())
       .pipe(gulp.dest(app.prdPath + 'css'))
       .pipe($.connect.reload());
});

gulp.task('js',function () {
   gulp.src(app.srcPath + 'script/**/*.js')
       //合并js文件并生产index文件
       .pipe($.concat('index.js'))
       .pipe(gulp.dest(app.devPath + 'js'))
       //压缩js文件
       .pipe($.uglify())
       .pipe(gulp.dest(app.prdPath + 'js'))
       .pipe($.connect.reload());
});

gulp.task('image',function () {
   gulp.src(app.srcPath + 'image/**/*')
       .pipe(gulp.dest(app.devPath + 'image'))
       //压缩图片
       .pipe($.imagemin())
       .pipe(gulp.dest(app.prdPath + 'image'))
       .pipe($.connect.reload());
});

//删除目录
gulp.task('clean',function () {
   gulp.src([app.devPath,app.prdPath])
       .pipe($.clean())
});

//执行指定操作
gulp.task('build',['lib','html','json','less','js','image']);

gulp.task('serve',['build'],function () {
   $.connect.server({
       root:[app.devPath],  //监听哪个目录
       livereload:true,  //自动刷新
       port:6333  //监听端口
   }) ;
   open('http://localhost:6333');
    gulp.watch('bower_components/**/*',['lib']);
    gulp.watch(app.srcPath + '**/*.html',['html']);
    gulp.watch(app.srcPath + 'data/**/*.json',['json']);
    gulp.watch(app.srcPath + 'style/**/*.less',['less']);
    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch(app.srcPath + 'images/**/*',['image']);
});

//默认执行指定任务
gulp.task('default',['serve']);