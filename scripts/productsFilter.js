var filterButtons = document.querySelectorAll('.filter button');
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked')
    });
});
var accessories = document.querySelector('.accessories');
var shorts = document.querySelector('.shorts');
var shirts = document.querySelector('.shirts');
var fullDress = document.querySelector('.full-dress');
var bajamas = document.querySelector('.bajamas');
var shoes = document.querySelector('.shoes');


var accessories2 = document.querySelector('.accessories2');
var shorts2 = document.querySelector('.shorts2');
var shirts2 = document.querySelector('.shirts2');
var fullDress2 = document.querySelector('.full-dress2');
var bajamas2 = document.querySelector('.bajamas2');
var shoes2 = document.querySelector('.shoes2');


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


function filter() {

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

/////////////////////////////////////////////////////////////////////////////////////////// 

function filter2() {

    accessories2.onclick = () => {
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

    shorts2.onclick = () => {
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

    shirts2.onclick = () => {
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

    fullDress2.onclick = () => {
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

    bajamas2.onclick = () => {
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

    shoes2.onclick = () => {
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
filter2();


/////////////////////////////////////////////////////////////////////////////////////////// 
const search = document.getElementById('search');

search.onclick = () => {
    document.querySelector('.search').classList.add('show');
}
document.querySelector('.search .search-content i').onclick = () => {
    document.querySelector('.search').classList.remove('show');
}
const filterMobile = document.getElementById('filter-mobile');
filterMobile.onclick = () => {
    document.querySelector('.filter-mobile').classList.toggle('show');
};

window.addEventListener('keyup', (event) => {
    if (event.key == "Escape") {
        if (document.querySelector('.search').classList.contains('show'));
        document.querySelector('.search').classList.remove('show');
    }
});


// document.onclick = (event) => {
// if (event.target.id !== "filter-mobile" && event.target.id !== "filter-mobile2") {
//     if(document.getElementById('filter-mobile2').classList.contains('show')){
//         document.getElementById('filter-mobile2').classList.remove('show');
//     };
//  }}
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
