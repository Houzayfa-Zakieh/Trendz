const donate = document.getElementById('donate');

donate.onclick = ()=>{
    document.querySelector('.donate').classList.add('show');
}
document.querySelector('.donate .donate-content i').onclick = ()=>{
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
arrow.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
}); 