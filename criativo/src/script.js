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
