const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// دالة لتحويل Sass إلى CSS
function compileSass() {
    return src('./criativo/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./criativo'));
}

// دالة لمراقبة تغييرات الملفات وتشغيل مهمة التحويل تلقائيًا
function watchFiles() {
    watch('./criativo/sass/*.scss', compileSass);
}

// تصدير المهام ليتم تشغيلها باستخدام Gulp
exports.default = watchFiles;
