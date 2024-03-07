const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// دالة لتحويل Sass إلى CSS
function compileSass() {
    return src('./kudzoka/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./kudzoka'));
}

// دالة لمراقبة تغييرات الملفات وتشغيل مهمة التحويل تلقائيًا
function watchFiles() {
    watch('./kudzoka/sass', compileSass);
}

// تصدير المهام ليتم تشغيلها باستخدام Gulp
exports.default = watchFiles;
