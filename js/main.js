let body = document.querySelector("body");
let wrapper = document.querySelector(".wrapper");
let data = new Promise((resolve, reject) => {
  fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=05fd01b946415245871999e682addb43&language=ru-RU`
  ).then((data) => {
    resolve(data.json());
  });
});
data.then((data) => {
  let result = data;
  showResult(result);
});

// smooth BODY
setTimeout(function () {
  document.body.classList.add("body_visible");
}, 200);

// SCROLL
window.onscroll = () => {
  var scrolled = window.pageYOffset;
  let bounce = document.querySelector(".bounce");
  if (scrolled > 1000) {
    bounce.style.opacity = `0.${scrolled}`;
  } else if (scrolled < 500) {
    bounce.style.opacity = 0;
  }
};
// UP_TOP
function up() {
  let time;
  let top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, -100);
    time = setTimeout("up()", 20);
  } else clearTimeout(time);
  return false;
}
document
  .querySelector(".up_top")
  .addEventListener("click", function (scrolled) {
    up();
  });

// burgerMenu'
let small_menu = document.querySelector(".small_menu");
let burger_container = document.querySelector(".container");
let signin = document.querySelector("#signin");
burger_container.addEventListener("click", (event) => {
  burger_container.classList.toggle("change");
  small_menu.classList.toggle("header_close");
  ul.classList.toggle("dbl-border");
  ul.classList.toggle("none");
});
window.addEventListener("resize", function () {
  if (small_menu.classList.contains("header_close") && innerWidth > 768) {
    burger_container.classList.remove("change");
    small_menu.classList.toggle("header_close");
    ul.classList.toggle("dbl-border");
    ul.classList.toggle("none");
  }
});

let div = document.querySelector(".small_menu");
let ul = document.createElement("ul");
div.appendChild(ul);
ul.classList.add("none");
ul.innerHTML = `
    <li><a href="#">Головна</a></li>
    `;

class Slider {
  constructor(result) {
    this.result = result;
  }
  slider() {
    let img_slider_div = document.querySelector(".img_slider_div");
    let text_slider = document.querySelector(".text_slider");

    let img_border_slider = document.createElement("img");
    img_slider_div.insertAdjacentElement("afterbegin", img_border_slider);

    for (let i = 0; i < 20; i++) {
      if (typeof this.result.results[i].title == "undefined") {
        this.result.results[i].title = this.result.results[i].name;
      }

      img_slider_div.innerHTML += `
        <img src="https://image.tmdb.org/t/p/w500${this.result.results[i].backdrop_path}" alt="img" class = 'img_true_slider' data-index = '${i}'>
        `;
      text_slider.innerHTML += `
        <div class = "text_slider_inner">
          <span class="text_slider slider__title" data-index = '${i}'>${this.result.results[i].title}</span>
          <span class="slider__overview" data-index = '${i}'>${this.result.results[i].overview}</span> 
        </div>`;
    }

    let img_true_slider = document.querySelectorAll(".img_true_slider");
    let slider__title = document.querySelectorAll(".slider__title");
    let slider__overview = document.querySelectorAll(".slider__overview");
    let prev_next = document.querySelector(".prev_next");
    let prev_back = document.querySelector(".prev_back");
    let i = 0;
    img_true_slider[0].classList.add("block");
    slider__title[0].classList.add("block");
    slider__overview[0].classList.add("block");
    prev_next.addEventListener("click", function next() {
      ++i;
      if (i >= img_true_slider.length) {
        img_true_slider[i - 1].classList.remove("block");
        slider__title[i - 1].classList.remove("block");
        slider__overview[i - 1].classList.remove("block");
        i = 0;
        img_true_slider[i].classList.add("block");
        slider__title[i].classList.add("block");
        slider__overview[i].classList.add("block");
      } else {
        img_true_slider[i - 1].classList.remove("block");
        slider__title[i - 1].classList.remove("block");
        slider__overview[i - 1].classList.remove("block");
        img_true_slider[i].classList.add("block");
        slider__title[i].classList.add("block");
        slider__overview[i].classList.add("block");
      }
    });

    prev_back.addEventListener("click", function () {
      --i;
      if (i < 0) {
        img_true_slider[i + 1].classList.remove("block");
        slider__title[i + 1].classList.remove("block");
        slider__overview[i + 1].classList.remove("block");
        i = img_true_slider.length - 1;
        img_true_slider[i].classList.add("block");
        slider__title[i].classList.add("block");
        slider__overview[i].classList.add("block");
      } else {
        img_true_slider[i + 1].classList.remove("block");
        slider__title[i + 1].classList.remove("block");
        slider__overview[i + 1].classList.remove("block");
        img_true_slider[i].classList.add("block");
        slider__title[i].classList.add("block");
        slider__overview[i].classList.add("block");
      }
    });
    return this;
  }
}

class ImagesTop {
  constructor(card, result) {
    this.card = card;
    this.result = result;
  }
  print() {
    let $newCart = document.createElement("div");
    wrapper.insertAdjacentElement("afterbegin", $newCart);
    $newCart.classList.add(`${this.card}`);
    document
      .querySelector(".top")
      .insertAdjacentElement("afterbegin", $newCart);

    for (let i = 0; i < 20; i++) {
      //перевірка назви на undefined
      if (typeof this.result.results[i].title == "undefined") {
        this.result.results[i].title = this.result.results[i].name;
      }
      if (typeof this.result.results[i].release_date == "undefined") {
        this.result.results[i].release_date = "...";
      }
      $newCart.innerHTML += `
          <div class = 'div__ImgCart item'>
          <div class = "overview display__none"><span>
          ${this.result.results[i].overview}<span></div>
          <i class="fas fa-info-circle circre__info"></i>
            <div class = 'div_img'>
              <img src="https://image.tmdb.org/t/p/w200${this.result.results[i].poster_path}">
            </div>
            <div class = 'card__text'>
            <span id = 'title'>${this.result.results[i].title}</span>
              <div class = 'releaseVote'>
                <span id = 'release_date'>Дата релізу : ${this.result.results[i].release_date}</span><br>
                <span id = 'vote_average'>Рейтинг : ${this.result.results[i].vote_average}</span>
              </div>
            <div>
          </div>
          `;
    }

    let circre__info = document.querySelectorAll(".circre__info");
    let card__text = document.querySelectorAll(".card__text");
    let overview = document.querySelectorAll(".overview");

    for (let j = 0; j < circre__info.length; j++) {
      circre__info[j].addEventListener("mouseover", () => {
        card__text[j].style.opacity = ".1";
        overview[j].style.opacity = "1";
        overview[j].classList.toggle("display__none");
        overview[j].style.transition = "2s";
      });
      overview[j].addEventListener("mouseout", () => {
        overview[j].classList.toggle("display__none");
        overview[j].style.opacity = "0";
        card__text[j].style.opacity = "1";
        overview[j].style.transition = "2s";
      });
    }
    return this;
  }
}
let inform = document.querySelector(".inform");
let topSide = document.querySelector(".topSide");
let div__ImgCart = document.querySelectorAll(".div__ImgCart");

class Search {
  constructor() {
    this.input_user = document.querySelector("#user");
    this.input_search = document.querySelector("#signin");
    let count = 0;
    this.input_search.addEventListener("submit", (e) => {
      e.preventDefault();
      count += 1;
      let search_movie = document.querySelector(".search_movie");
      search_movie.style.height = "100%";
      search_movie.innerHTML = `
      <div class="close_circle">
        <i class="fas fa-times-circle" class="close" id="close_search"></i>
      </div>
      <span class="result_search">Результати пошуку</span>
      <div class="wrapper_movie"></div>
    `;
      let result_search = document.querySelector(".result_search");
      result_search.style.fontSize = "24px";
      if (count < 1) {
        search_movie.innerHTML = " ";
      }
      let input = this.input_user.value;
      if (input == "") {
        input = "new";
      }
      input = encodeURI(input);
      this.input_event(input);
      count = 0;
    });
    this.movie_card = new Object();
    return this;
  }

  async input_event(input) {
    try {
      if (input == undefined) {
        input = "";
      } else if (input != undefined) {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=05fd01b946415245871999e682addb43&language=ru-RU&query=${input}&include_adult=false`;
        let response = await fetch(url);
        let promise = await response.json();
        let first_promise = await promise.results;
        let total_pages = await promise.total_pages;
        let all_pages = await promise;
        await this.createFirstPages(first_promise, total_pages);
      } else {
        console.log("input = undefined");
      }
    } catch (err) {
      console.log("input_event - ", err);
    }
  }

  async createFirstPages(first_promise, total_pages) {
    try {
      console.log("createFirstPages");
      let search_card = document.createElement("div");
      let wrapper_movie = document.querySelector(".wrapper_movie");
      wrapper_movie.insertAdjacentElement("beforeend", search_card);
      search_card.classList.add(`search_card`);
      for (let i = 0; i < first_promise.length; i++) {
        this.movie_card = {
          title: first_promise[i].title,
          overview: first_promise[i].overview,
          poster_path: first_promise[i].poster_path,
          release_date: first_promise[i].release_date,
          vote_average: first_promise[i].vote_average,
        };
        search_card.innerHTML += `
                <div class = 'div__ImgCart item'>
                <div class = "overview display__none"><span>
                ${first_promise[i].overview}<span></div>
                <i class="fas fa-info-circle circre__info"></i>
                  <div class = 'div_img' id='wraper_img'>
                  </div>
                  <div class = 'card__text'>
                  <span id = 'title'>${first_promise[i].title}</span>
                    <div class = 'releaseVote'>
                      <span id = 'release_date'>Дата релізу : ${first_promise[i].release_date}</span><br>
                      <span id = 'vote_average'>Рейтинг : ${first_promise[i].vote_average}</span>
                    </div>
                  </div>
                </div>
                `;
        let wraper_img = document.querySelectorAll("#wraper_img");
        let images_poster_path = document.createElement("img");

        if (this.movie_card.poster_path == null) {
          images_poster_path.setAttribute("src", "./img/none.jpg");
        } else {
          images_poster_path.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w200${first_promise[i].poster_path}`
          );
        }
        wraper_img[i].insertAdjacentElement("afterbegin", images_poster_path);
      }

      let circre__info = document.querySelectorAll(".circre__info");
      let card__text = document.querySelectorAll(".card__text");
      let overview = document.querySelectorAll(".overview");

      for (let j = 0; j < circre__info.length; j++) {
        circre__info[j].addEventListener("mouseover", () => {
          card__text[j].style.opacity = ".1";
          overview[j].style.opacity = "1";
          overview[j].classList.toggle("display__none");
          overview[j].style.transition = "2s";
        });
        overview[j].addEventListener("mouseout", () => {
          overview[j].classList.toggle("display__none");
          overview[j].style.opacity = "0";
          card__text[j].style.opacity = "1";
          overview[j].style.transition = "2s";
        });
      }

      let close_search = document.querySelector("#close_search");
      close_search.addEventListener("click", () => {
        wrapper_movie.innerHTML = " ";
        console.log("close");
        let search_movie = document.querySelector(".search_movie");
        search_movie.style.height = "0";
        let result_search = document.querySelector(".result_search");
        result_search.style.fontSize = "0px";
      });
    } catch (err) {
      console.log("createFirstPages - ", err);
    }
  }
}

function inputview() {
  let input_view = new Search().input_event();
}
inputview();

function showResult(result) {
  let sliderTop = new Slider(result).slider();
  let topFilm = new ImagesTop("cart__All", result).print();
}
