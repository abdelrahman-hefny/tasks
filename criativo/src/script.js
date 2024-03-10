//search close nav
function btn_search() {
    document.querySelector("nav .input-search").classList.toggle("input-search-close")
}
//menu close nav
function open_menu_nav() {
    document.querySelectorAll("header .nav_ul").forEach(e => {
        e.classList.toggle("open")
    })
};


window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    const logoH2 = document.querySelector('.logo a h2');
    const navLinks = document.querySelectorAll('nav li');

    if (scrollPosition > window.innerHeight) {
        header.classList.add('scrolled');
        console.log('done'); // إخطار بالوصول إلى 100vh
        header.style.height = '50px'; // تقليل ارتفاع الناف بار
        header.style.position = 'fixed'; // جعل الناف بار شفافة
        logoH2.style.fontSize = '30px';
        logoH2.style.marginTop = '5px';
        navLinks.forEach(link => link.style.fontSize = '15px');
        header.style.backgroundColor = '#343434a1'; // تغيير لون الخلفية
    } else {
        header.classList.remove('scrolled');
        header.style.height = '70px'; // استعادة ارتفاع الناف بار الأصلي
        header.style.position = 'relative';
        header.style.backgroundColor = '#151515'
        // إعادة أي تغييرات أخرى للعناصر إلى حالتها الأصلية هنا
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
