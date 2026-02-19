const targets = document.querySelectorAll('#intro, .ul_lineup,.div_set,.postcard,#wrapping,#qa');

window.addEventListener('scroll', function () {
  const scroll = window.scrollY; 
  const windowHeight = window.innerHeight;

  targets.forEach(target => {
    const targetPos = target.getBoundingClientRect().top + scroll;
    const offset = target.classList.contains('ul_lineup') ? 600 : 400; // ul_lineupは下にあるので遅め
    if (scroll > targetPos - windowHeight + offset) {
      target.classList.add('is-animated');
    }
  });
});
const pointSection = document.querySelector('.point1');
const pointTexts = document.querySelectorAll('.point1 .point_text');

function scrollAnimation() {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const sectionTop = pointSection.getBoundingClientRect().top + scroll;

  if (scroll > sectionTop - windowHeight + 400) {
    // section が画面に入ったら全ての子要素に class を付与
    pointTexts.forEach((text, index) => {
      text.style.transitionDelay = `${index * 1.8}s`; // 少しずつ順番に出す
      text.classList.add('is-animated');
    });
  }
}



window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);


// cartのjs
const products = {
  rabbit: {
    image: "images/うさぎ 2.jpg",
    title: "うさぎのルル",
    description: "W90mm×D100mm×H180mm",
    price: "¥1,980"
  },
  bear: {
    image: "images/くま 2.jpg",
    title: "くまのポポ",
    description: "W90mm×D100mm×H150mm",
    price: "¥1,980"
  },
  cat: {
    image: "images/ねこ 2.jpg",
    title: "ねこのリリ",
    description: "W90mm×D100mm×H160mm",
    price: "¥1,980"
  },
  set: {
    image: "images/背景あり3人 1.jpg",
    title: "ぬいぐるみ3点セット",
    description: "うさぎ・くま・ねこが全部入ったお得なセット",
    price: "¥5,940"
  }
};

function changeProduct(type) {
  const p = products[type];

  document.getElementById("mainImage").src = p.image;
  document.getElementById("mainImage").alt = p.title;
  document.getElementById("title").textContent = p.title;
  document.getElementById("description").textContent = p.description;
  document.getElementById("price").textContent = p.price;
}


// window.addEventListener('scroll', function () {
//   const scroll = window.scrollY;
//   const windowHeight = window.innerHeight;

//   targets.forEach(target => {
//     const targetPos = target.getBoundingClientRect().top + scroll;
//     const offset = target.classList.contains('ul_lineup') ? 600 : 400;

//     if (scroll > targetPos - windowHeight + 500) {
//       target.classList.add('is-animated');
//     }
//   });
// });

// // 商品のこだわりアニメーション
// const pointSection = document.querySelector('.point1');
// const pointTexts = document.querySelectorAll('.point1 .point_text');

// function scrollAnimation() {
//   const scroll = window.scrollY;
//   const windowHeight = window.innerHeight;
//   const sectionTop = pointSection.getBoundingClientRect().top + scroll;

//   if (scroll > sectionTop - windowHeight + 400) {
//     pointTexts.forEach((text, index) => {
//       text.style.transitionDelay = `${index * 1.5}s`; // 少しずつ順番に出す
//       text.classList.add('is-animated');
//     });
//   }
// }

// window.addEventListener('scroll', scrollAnimation);
// window.addEventListener('load', scrollAnimation);

