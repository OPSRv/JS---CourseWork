class Search {
  constructor() {
    this.input_user = document.querySelector("#user");
    this.input_search = document.querySelector("#signin");
    this.input_search.addEventListener("submit", (e) => {
      e.preventDefault();
      let input = this.input_user.value;
      input = encodeURI(input);
      this.input_event(input);
      return this;
    });
    this.pages = document.querySelectorAll(".pages_span");

    this.movie_card = new Object();
  }

  // this.search_result = search_result;
  // this.selected_page = selected_page;
  // this.input_value = input_value;
  // this.movie_card = {
  //   title,
  //   overview,
  //   poster_path,
  //   release_date,
  //   vote_average,

  async input_event(input) {
    try {
      let wrapper_movie = document.querySelector(".wrapper_movie");
      wrapper_movie.innerHTML = " ";
      if (input != undefined) {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=05fd01b946415245871999e682addb43&language=ru-RU&query=${input}&include_adult=false`;
        let response = await fetch(url);
        let promise = await response.json();
        let first_promise = await promise.results;
        let total_pages = await promise.total_pages;
        await this.createFirstPages(first_promise, total_pages);
      } else {
        console.log("input = undefined");
        return this;
      }
    } catch (err) {
      console.log("input_event - ", err);
      return this;
    }
  }

  async createFirstPages(first_promise, total_pages) {
    try {
      console.log(first_promise, total_pages);
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
          console.log(images_poster_path);
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

      let search_movie = document.querySelector(".search_movie");
      let pages = document.createElement("div");
      pages.classList.add("pages");
      search_movie.insertAdjacentElement("beforeend", pages);
      console.log(total_pages);

      for (let k = 0; k < total_pages; k++) {
        let iter = k + 1;
        pages.innerHTML += `<span class='pages_span' data-set=${iter}>${iter}&emsp;</span>`;
      }
      let pages_span = document.querySelectorAll(".pages_span");
      let close_search = document.querySelector("#close_search");
      close_search.addEventListener("click", () => {
        wrapper_movie.innerHTML = " ";
        pages.innerHTML = " ";
      });
      await this.allPage(pages_span);
    } catch (err) {
      console.log("input_event - ", err);
      return this;
    }
  }

  async allPage(pages_span) {
    await this.pages_span.addEventListener("click", () => {
      console.log(pages_span);
    });

    //
    //   pages_span.addEventListener("click", () => {
    //       await this.allPage(pages_span)
    //   });
  }
}

function inputview() {
  let input_view = new Search().input_event();
}

inputview();
// this.url = `https://api.themoviedb.org/3/search/movie?api_key=05fd01b946415245871999e682addb43&language=ru-RU&query=${this.input_value}&page=${this.selected_page}&include_adult=false`;
