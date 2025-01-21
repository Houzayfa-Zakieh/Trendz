var filterButtons = document.querySelectorAll('.filter button');
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked')
    });
});

var accessories = document.querySelector('.filter .accessories');
var shorts = document.querySelector('.filter .shorts');
var shirts = document.querySelector('.filter .shirts');
var fullDress = document.querySelector('.filter .full-dress');
var bajamas = document.querySelector('.filter .bajamas');
var shoes = document.querySelector('.filter .shoes');


var accesoars = document.querySelectorAll('.accesoars')
var shirt = document.querySelectorAll('.shirt');
var full = document.querySelectorAll('.full');
var begama = document.querySelectorAll('.begama');
var shose = document.querySelectorAll('.shose');
var short = document.querySelectorAll('.short');

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;


function filter(){

accessories.onclick = () => {
    a == 1;

    accesoars.forEach((acces) => {
        acces.classList.remove('hide')
        acces.classList.add('show');
    });
    shirt.forEach((shir) => {
        shir.classList.add('hide');
    });
    full.forEach((ful) => {
        ful.classList.add('hide');
    });
    begama.forEach((begam) => {
        begam.classList.add('hide');
    });
    shose.forEach((shos) => {
        shos.classList.add('hide');
    });
    short.forEach((shor) => {
        shor.classList.add('hide');
    });

}

shorts.onclick = () => {
    b == 1;

    short.forEach((shor) => {
        shor.classList.remove('hide');
        shor.classList.add('show');
    });
    shirt.forEach((shir) => {
        shir.classList.add('hide');
    });
    full.forEach((ful) => {
        ful.classList.add('hide');
    });
    begama.forEach((begam) => {
        begam.classList.add('hide');
    });
    shose.forEach((shos) => {
        shos.classList.add('hide');
    });
    accesoars.forEach((acces) => {
        acces.classList.add('hide');
    });

};

shirts.onclick = () => {
    c == 1;
    shirt.forEach((shir) => {
        shir.classList.remove('hide');
        shir.classList.add('show');
    });
    short.forEach((shor) => {
        shor.classList.add('hide');
    });
    full.forEach((ful) => {
        ful.classList.add('hide');
    });
    begama.forEach((begam) => {
        begam.classList.add('hide');
    });
    shose.forEach((shos) => {
        shos.classList.add('hide');
    });
    accesoars.forEach((acces) => {
        acces.classList.add('hide');
    });

};

fullDress.onclick = () => {
    d == 1;

    full.forEach((ful) => {
        ful.classList.remove('hide');
        ful.classList.add('show');
    });
    short.forEach((shor) => {
        shor.classList.add('hide');
    });
    shirt.forEach((shir) => {
        shir.classList.add('hide');
    });
    begama.forEach((begam) => {
        begam.classList.add('hide');
    });
    shose.forEach((shos) => {
        shos.classList.add('hide');
    });
    accesoars.forEach((acces) => {
        acces.classList.add('hide');
    });

};

bajamas.onclick = () => {
    e == 1;
    begama.forEach((begam) => {
        begam.classList.remove('hide')
        begam.classList.add('show');
    });
    short.forEach((shor) => {
        shor.classList.add('hide');
    });
    shirt.forEach((shir) => {
        shir.classList.add('hide');
    });
    full.forEach((ful) => {
        ful.classList.add('hide');
    });
    shose.forEach((shos) => {
        shos.classList.add('hide');
    });
    accesoars.forEach((acces) => {
        acces.classList.add('hide');
    });
};

shoes.onclick = () => {
    f == 1;

    shose.forEach((shos) => {
        shos.classList.remove('hide');
        shos.classList.add('show');
    });
    short.forEach((shor) => {
        shor.classList.add('hide');
    });
    shirt.forEach((shir) => {
        shir.classList.add('hide');
    });
    full.forEach((ful) => {
        ful.classList.add('hide');
    });
    begama.forEach((begam) => {
        begam.classList.add('hide');
    });
    accesoars.forEach((acces) => {
        acces.classList.add('hide');
    });
};


if (a = 1) {
    accesoars.forEach((acces) => {
        acces.classList.remove('hide');
        acces.classList.add('show');

    });
}
if (b = 1) {
    short.forEach((shor) => {
        shor.classList.remove('hide');
        shor.classList.add('show');
    });
};
if (c = 1) {
    shirt.forEach((shir) => {
            shir.classList.remove('hide');
            shir.classList.add('show');
        
    });
};
if (d = 1) {
    full.forEach((ful) => {
                    ful.classList.remove('hide');
            ful.classList.add('show');
          });
};
if (d = 1) {
    begama.forEach((begam) => {
       
            begam.classList.remove('hide');
            begam.classList.add('show');
          });
};
if (e = 1) {
    shose.forEach((shos) => {
            shos.classList.remove('hide');
            shos.classList.add('show');
    });
};
}
filter();