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
