const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@%^&*]).{8,}$/;

const form = document.getElementById('myForm');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');


const validation = (event) => {
    var firstnameValue = firstname.value.trim();
    var lastnameValue = lastname.value.trim();
    var phoneValue = phone.value.trim();
    var emailValue = email.value.trim();

    document.getElementById('firstname-span').textContent = "";
    document.getElementById('lastname-span').textContent = "";
    document.getElementById('phone-span').textContent = "";
    document.getElementById('email-span').textContent = "";


    if (firstnameValue.length < 3) {
        firstname.focus();
        document.getElementById('firstname-span').textContent = "Check First Name again";
        document.getElementById('firstname-span').style.color = "red";
        event.preventDefault();
        return false;
    }

    if (lastnameValue.length < 3) {
        lastname.focus();
        document.getElementById('lastname-span').textContent = "Check Last Name again";
        document.getElementById('lastname-span').style.color = "red";
        event.preventDefault();
        return false;

    }
    if (phoneValue.length < 10) {
        phone.focus();
        document.getElementById('phone-span').textContent = "Check your phone number again "
        document.getElementById('phone-span').style.color = "red";
        event.preventDefault();
        return false;
    }

    if (!emailRegex.test(emailValue)) {
        email.focus();
        document.getElementById('email-span').textContent = "Check your E-mail again "
        document.getElementById('email-span').style.color = "red";
        event.preventDefault();
        return false;
    }
    return true;
}
form.onsubmit = validation;
var orders = document.querySelectorAll('swiper-slide .card button');
var card = document.querySelector('.item .card');

orders.forEach((order) => {
    order.addEventListener('click', () => {
        document.querySelector('.order').classList.add('showed');
        document.querySelector('.item .card h1').textContent = "Price: " + order.getAttribute("data-price") + "-" + order.getAttribute("data-sold") + "=" + order.getAttribute("data-offer");
        document.querySelector('.item .card .image1').style.backgroundImage = "url(" + order.getAttribute('data-image') + ")"
    });
});
document.querySelector('.info i').onclick = () => {
    document.querySelector('.order').classList.remove('showed');
};

window.addEventListener('keyup', (event) => {
    if (event.key == "Escape") {
        if (document.querySelector('.order').classList.contains('showed'))
            document.querySelector('.order').classList.remove('showed');

    };
});
document.getElementById('note').oninput = () => {
    document.getElementById('text-length').textContent = document.getElementById('note').value.length + " /100";
}