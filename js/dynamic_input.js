// SEARCH
let search = document.querySelector(".search");
let list_search = document.querySelector(".list_search");
search.addEventListener("click", () => {
  list_search.classList.toggle("list_search");
  dynamic_input.focus();
  // dynamicInputScreen();
});
let dynamic_input = document.querySelector("#dynamic_label_input");
// function dynamicInputScreen() {
//   dynamic_input.addEventListener("blur", (event) => {
//     event.preventDefault();
//     dynamic_input.blur();
//     list_search.classList.add("list_search");
//     dynamic_input.value = "";
//   });
// }
// INPUT => SEARCH
function dynamicInput() {
  let i = 0;
  dynamic_input.addEventListener("input", () => {
    dynamic_input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        searchData = encodeURI(dynamic_input.value);
        let resultSearch = new Promise((resolve, reject) => {
          fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=05fd01b946415245871999e682addb43&language=ru-RU&query=${searchData}&page=1&include_adult=false`
          ).then((dataSearch) => {
            resolve(dataSearch.json());
          });
        }).then((dataSearch) => {
          let resultSearch = dataSearch;
          i++;
          console.log(i);
          showResultSearch(resultSearch);
        });
      }
    });
  });
}




<div class="search_movie">
<div class="close_circle">
  <i class="fas fa-times-circle"></i>
</div>
<div class="wrapper_movie"></div>
<div class="pages"></div>
</div>
.search_movie {
  width: 100%;
  height: 90%;
  background: #292929;
  position: absolute;
  padding-top: 110px;
  z-index: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;

}

.wrapper_movie {
  position: relative;
  width: 95%;
  height: 85%;
  background: rebeccapurple;
  z-index: 4;
}

.pages {
  position: relative;
  width: 95%;
  height: 20px;
  background: rgb(51, 121, 153);
  z-index: 4;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  overflow-x: hidden;
  color: red;
}

.pages_num>span {
  padding: 5px;
  margin: 0 5px 0 5px;
}

.close_circle {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.close_circle>i {
  color: #414141;
  padding: 5px;
}




class Search {
  constructor(search_result) {
    this.url = url;
    this.selected_page = selected_page;
    this.search_result = search_result;
    this.input_value = input_value;
    // this.title = result_search.results.title;
    // this.overview = result_search.results.overview;
    // this.poster_path = result_search.results.poster_path;
    // this.release_date = result_search.results.release_date;
    // this.vote_average = result_search.results.vote_average;
  }
  
  async input_event() {
    this.input_value = document.querySelector("#user");
    console.log(search_panel);
  }
}

let btn_search = document.querySelector("#btn_search");
let input_search = document.querySelector("#user");
input_search.addEventListener("change", (event) => {
  let input_value = event.target.value;
  showResultSearch(input_value);
});
btn_search.addEventListener("click", function (key) {
  key.preventDefault();
});
// SEARCH

async function showResultSearch(input_value = "пес") {
  if (input_value != undefined) {
    input_value = encodeURI(input_value);
    let page_count = 1;
    let response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=05fd01b946415245871999e682addb43&language=ru-RU&query=${input_value}&page=${page_count}&include_adult=false`
    );
    let result_search = await response.json();
    // result_pages = result_search.results;
    console.log(result_search);
    total_pages = result_search.total_pages;
    // let all_pages = [];
    // // для прикладу 5 - має бути змінна - total_pages
    // for (let i = 1; i <= 5; i++) {
    //   let get_all_page = await fetch(
    //     `https://api.themoviedb.org/3/search/movie?api_key=05fd01b946415245871999e682addb43&language=ru-RU&query=${input_value}&page=${i}&include_adult=false`
    //   );
    //   let result_get_all_page = await get_all_page.json();
    //   all_pages.push(result_get_all_page.results);
    // }
    showSearch(result_search);
  }
}

showResultSearch();

class Search {
  constructor(result_search) {
    this.resultSearch = result_search;
    this.total_pages = total_pages;
    // this.title = result_search.results.title;
    // this.overview = result_search.results.overview;
    // this.poster_path = result_search.results.poster_path;
    // this.release_date = result_search.results.release_date;
    // this.vote_average = result_search.results.vote_average;
  }
  view() {
    // let search_movie = document.querySelector(".search_movie");
    let wrapper_movie = document.querySelector(".wrapper_movie");
    let pages = document.querySelector(".pages");
    let movie_cart = document.createElement("div");
    movie_cart.classList.add("movie_cart");
    wrapper_movie.insertAdjacentElement("afterbegin", movie_cart);
    console.log(this.resultSearch);

    for (let i = 0; i < this.total_pages; i++) {
      let pages_num = i + 1;
      console.log(pages_num);
      pages.innerHTML += `
      <span class='pages_num' data-set=${pages_num}>${pages_num}&emsp;</span>
      `;
    }
    let pages_num = document.querySelectorAll(".pages_num");
    for (let j = 0; j < pages_num.length; j++)
      pages_num[j].addEventListener("click", (event) => {
        console.log(event.target.dataset.set);
      });
  }
}
function showSearch(result_search) {
  let search_view = new Search(result_search).view();
}
