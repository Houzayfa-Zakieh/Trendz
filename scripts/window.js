const donate = document.getElementById('donate');

donate.onclick = () => {
    document.querySelector('.donate').classList.add('show');
}
document.querySelector('.donate .donate-content i').onclick = () => {
    document.querySelector('.donate').classList.remove('show');
}
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('scroll', window.scrollY > 50);
});

/////////////////////////////////////////////////
let arrow = document.querySelector('i.fa-arrow-up');

window.addEventListener('scroll', () => {
    arrow.classList.toggle('show', window.scrollY > 100);
});
arrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
});

window.addEventListener('keyup', (event) => {
    if (event.key == "Escape") {
        if (document.querySelector('.donate').classList.contains('show'));
        document.querySelector('.donate').classList.remove('show');

    }
});
var sider = document.getElementById('sider');
var btnSider = document.getElementById('btnSider');

document.onclick = (event) => {
    if (event.target.id !== "btnSider" && event.target.id !== "sider") {
        if (btnSider.classList.contains('clickeds') && sider.classList.contains('shows')) {
            btnSider.classList.remove('clickeds');
            sider.classList.remove('shows');
        if(document.getElementById('oneLine').classList.contains('hides')){
            document.getElementById('oneLine').classList.remove('hides');
        }
        }
    }
            if (event.target.id !== "filter-mobile" && event.target.id !== "filter-mobile2") {
                if(document.getElementById('filter-mobile2').classList.contains('show')){
                    document.getElementById('filter-mobile2').classList.remove('show');
                };            
        };

};


btnSider.onclick = () => {
    btnSider.classList.toggle('clickeds');
    sider.classList.toggle('shows');
    document.getElementById('oneLine').classList.toggle('hides');
    document.querySelectorAll('.sider ul li').forEach((lil) => {
        lil.classList.toggle('shows');
    });
    document.querySelectorAll('.sider a').forEach((link) => {
        link.classList.toggle('shows');
    });
}