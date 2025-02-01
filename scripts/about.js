const items = document.querySelectorAll('#timeline li');

const InViewport = e => {
  const rect = e.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (InViewport(item)) {
      item.classList.add('show');
    }
  });

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

// function darkMode(){

// const isChecked = document.getElementById("check").checked;
// const header = document.getElementById("main-header");
// const boxes = document.querySelectorAll('#timeline li div');
// const dots = document.querySelectorAll('#timeline ul li');

// if (isChecked) {
//   document.body.style.background = '#222';
//   header.style.background = '#000';

//   for(let i = 0 ; i < boxes.length ; i++){
//     boxes[i].classList.remove("light-mode");
//     boxes[i].classList.add("dark-mode");
//     dots[i].classList.remove("light-mode");
//     dots[i].classList.add("dark-mode");
//   }
// }
// else {
//   document.body.style.background = '#5a5485';
//   header.style.background = '#8e9fd5';

//   for(let i = 0 ; i < boxes.length ; i++){
//     boxes[i].classList.add("light-mode");
//     boxes[i].classList.remove("dark-mode");
//     dots[i].classList.add("light-mode");
//     dots[i].classList.remove("dark-mode");
//     }
// }
// }


/////////////////////////////////  charts start  /////////////////////////////

const barchart = document.getElementById('barchart');

new Chart(barchart, {
  type: 'bar',
  data: {
    labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
    datasets: [{
      label: 'Our arrow price in K$',
      data: [3, 5, 8, 11, 14, 17],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const doughnut = document.getElementById('doughnut');

new Chart(doughnut, {
  type: 'doughnut',
  data: {
    labels: ['Shorts', 'Shirts', 'Shoes', 'Full Dress', 'Bags', 'Bottles'],
    datasets: [{
      label: 'Our sales ber day',
      data: [14, 24, 16, 10, 8, 13],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});