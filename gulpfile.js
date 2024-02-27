const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// دالة لتحويل Sass إلى CSS
function compileSass() {
    return src('./kamsat/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./kamsat/'));
}

// دالة لمراقبة تغييرات الملفات وتشغيل مهمة التحويل تلقائيًا
function watchFiles() {
    watch('./kamsat/scss/*.scss', compileSass);
}

// تصدير المهام ليتم تشغيلها باستخدام Gulp
exports.default = watchFiles;
