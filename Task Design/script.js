const btn_Signin = document.getElementById("btn_Signin");
const btn_login = document.getElementById("btn_login");
const form_signup = document.getElementById("form_signup");
const form_login = document.getElementById("form_login");
const mt1 = document.querySelectorAll('.mt1');
const m_display = document.getElementById("m-display");
let open_btn = false;
let m_bar = false;

function btn_Sign() {
    btn_Signin.style.opacity = "1";
    btn_Signin.style.color = "#000";
    form_signup.style.display = 'flex';
    form_login.style.display = 'none';
    btn_login.style.opacity = ".5";
}

function btn_log() {
    btn_login.style.opacity = "1";
    btn_login.style.color = "#000";
    form_login.style.display = 'flex';
    form_signup.style.display = 'none';
    btn_Signin.style.opacity = ".5";
}

function btn_login_up() {
    open_btn = !open_btn;
    document.getElementById("login_page").style.display = open_btn ? 'flex' : 'none';
    document.getElementById("login_page").style.opacity = open_btn ? '1' : '0';
}

function btn_bar_up() {
    m_bar = !m_bar;
    mt1.forEach(e => {
        e.style.display = m_bar ? 'block' : 'none';
    });
}
document.querySelectorAll('.mt1 a').forEach(link => {
    link.addEventListener('click', () => {
        m_bar = !m_bar;

        mt1.forEach(e => {
            // e.style.display = 'none';
        });
    });
}); const overlay = document.getElementById("overlay");
const loginPage = document.getElementById("login_page");

overlay.addEventListener("click", () => {
    loginPage.style.display = "none"; // إخفاء صفحة تسجيل الدخول
    overlay.style.display = "none"; // إخفاء الأوفرلاي
    overlay.style.pointerEvents = "none"; // تعطيل عملية النقر من خلال الأوفرلاي
});

function btn_login_up() {
    open_btn = !open_btn;
    loginPage.style.display = open_btn ? "flex" : "none";
    overlay.style.display = open_btn ? "block" : "none"; // عرض الأوفرلاي عند فتح صفحة تسجيل الدخول
    overlay.style.pointerEvents = open_btn ? "auto" : "none"; // تمكين عملية النقر عند فتح صفحة تسجيل الدخول
}
const mobileOverlay = document.getElementById("mobile_overlay");
const mobileLinks = document.querySelectorAll('svg');

mobileOverlay.addEventListener("click", () => {
    mobileOverlay.style.display = "none"; // إخفاء الأوفرلاي
    mobileOverlay.style.pointerEvents = "none"; // تعطيل عملية النقر من خلال الأوفرلاي
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.style.display = "none"; // إخفاء الأوفرلاي عند النقر على الرابط
        mobileOverlay.style.pointerEvents = "none"; // تعطيل عملية النقر من خلال الأوفرلاي
    });
});