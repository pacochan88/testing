//创建该文件：写好任务，执行任务

var gulp = require('gulp');//引入模块

gulp.task('default', ['say', 'sing'], function () {
    console.log('default任务');
});

// 布置任务
gulp.task('say', [], function () {
    console.log('say任务');
});
gulp.task('sing', [], function () {
    console.log('sing任务');
});


/*
src() 源文件路径 参数可以是一个数组
dest（）目标文件路径 dest参数中的文件夹名称可以自动创建
pipe（）管道 ，表示输送，就是下一步 
 
 */

//把src下面index.html文件拷贝到dist目录下
gulp.task('copyhtml', function () {
    return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});

//把src下面hml目录下的html文件全部拷贝到dist的html目录下
gulp.task('copyhtml2', function () {
    return gulp.src('src/html/*.html').pipe(gulp.dest('dist/html'));
});

//把src下面js目录下的js文件全部拷贝到dist的js目录下
gulp.task('copyjs', function () {
    return gulp.src('src/js/*.js').pipe(gulp.dest('dist/js'));
});

//把css目录下所有文件拷贝过去
gulp.task('copycss', function () {
    return gulp.src('src/css/*').pipe(gulp.dest('dist/css'));
});

gulp.task('copycss2', ['copycss'], function () {
    return gulp.src('src/css/**').pipe(gulp.dest('dist/css'));
});


//把lib目录下的js文件全部拷贝到dist的lib目录下
gulp.task('copyjs2', function () {
    return gulp.src('src/lib/*.js').pipe(gulp.dest('dist/lib'));
});

//把lib目录下的sass文件全部拷贝到dist的sass目录下
gulp.task('copycss3', function () {
    return gulp.src('src/sass/*.scss').pipe(gulp.dest('dist/sass'));
});

//把api目录下的php文件全部拷贝到dist的api目录下
gulp.task('copyphp', function () {
    return gulp.src('src/api/*.php').pipe(gulp.dest('dist/api'));
});

//把img目录下的文件全部拷贝到dist的img目录下
gulp.task('copyimg', function () {
    return gulp.src('src/img/*').pipe(gulp.dest('dist/img'));
});

/*
    watch() 监听:自动化处理

	两个参数：
	参数一：监听文件的路径

	参数二：监听任务名称 数组
 */

gulp.task('watchhtml', function () {
    return gulp.watch('src/index.html', ['copyhtml']);
});
//在cmd窗口,按ctrl+c,然后再输入y,就结束监听


//实用的任务

//1.压缩html

var minifyhtml = require('gulp-htmlmin');

gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src('src/index.html')
        .pipe(minifyhtml(options))
        .pipe(gulp.dest('dist'));
});

var minifyhtml2 = require('gulp-htmlmin');

gulp.task('htmlmin2', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src('src/html/*.html')
        .pipe(minifyhtml2(options))
        .pipe(gulp.dest('dist/html'));
});


//2.压缩css

var minifycss = require('gulp-cssmin');

gulp.task('cssmin', function () {
    return gulp.src('src/css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

//3.重命名
var rename = require('gulp-rename');
gulp.task('rename', function () {
    return gulp.src('src/css/*.css')
        .pipe(minifycss())
        .pipe(rename('*.min.css'))
        .pipe(gulp.dest('dist/css'));
});


//4.压缩js并重命名
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('jsmin', function () {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            'presets': ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename('*.min.js'))
        .pipe(gulp.dest('dist/js'));//如果有ES6的语法不能直接压缩，先要转成ES5严格模式
});

gulp.task('jsmin2', function () {
    gulp.src('src/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
});



//6.合并文件
// var concat = require('gulp-concat');
// gulp.task('concat', function () {
//     return gulp.src(['dist/css/aa.css', 'dist/css/bb.css'])
//         .pipe(concat('all.css'))
//         .pipe(minifycss())
//         .pipe(rename('all.min.css'))
//         .pipe(gulp.dest('dist/css'));
// });


//7.压缩图片

var imagemin = require('gulp-imagemin');

gulp.task('imgmin', function () {
    return gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('imgmin2', function () {
    return gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});

var pngquant = require('imagemin-pngquant');

gulp.task('test', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/img'));
});