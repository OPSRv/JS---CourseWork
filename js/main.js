let body = document.querySelector('body');
    let wrapper = document.querySelector('.wrapper');
let data = new Promise((resolve, reject) =>{
  fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=05fd01b946415245871999e682addb43&language=ru-RU`)
    .then(data => {resolve(data.json());
    })
  });
  data.then(data => {
    let result = data;
      showResult(result)
  })

// // BODY
// setTimeout(function(){
// 	document.body.classList.add('body_visible');
// }, 200);

  // SEARCH
  let search = document.querySelector('.search');
  let list_search = document.querySelector('.list_search');
      search.addEventListener('click', ()=>{
          list_search.classList.toggle('list_search');
          dynamic_input.focus();
          dynamicInputScreen();
  })

  // SEARCH
  let dynamic_input = document.querySelector('#dynamic_label_input');
    function dynamicInputScreen (){
          dynamic_input.addEventListener('blur', ()=> {
          event.preventDefault();
          dynamic_input.blur();
          list_search.classList.add('list_search');
          dynamic_input.value = '';
          })
    }
    // INPUT => SEARCH
  function dynamicInput(){
    dynamic_input.addEventListener('input', () =>{
      dynamicKey();
    })
  }
  function dynamicKey(){
    dynamic_input.addEventListener('keydown', () =>{
      if(event.key === 'Enter'){
        console.log(dynamic_input.value);
      } 
    })
  }
  dynamicInput();

  // burgerMenu'
let burger_container = document.querySelector('.container');
burger_container.addEventListener("click", () => {
    burger_container.classList.toggle("change");
})

class Slider{
  constructor(result){
    this.result = result;
  }
    slider(){
      let img_slider_div = document.querySelector('.img_slider_div');
      let text_slider = document.querySelector('.text_slider');      
      let circle_slider_nav = document.querySelector('.circle_slider_nav');
      let img_border_slider = document.createElement('img');
      img_slider_div.insertAdjacentElement('afterbegin',img_border_slider)

      for(let i = 0; i < 20; i++){
        if (typeof this.result.results[i].title == 'undefined'){
          this.result.results[i].title = this.result.results[i].name
        }

        img_slider_div.innerHTML += `
        <img src="https://image.tmdb.org/t/p/w500${this.result.results[i].backdrop_path}" alt="img" class = 'img_true_slider' data-index = '${i}'>
        `;
        text_slider.innerHTML +=`
        <div class = "text_slider_inner">
          <span class="text_slider slider__title" data-index = '${i}'>${this.result.results[i].title}</span>
          <span class="text_slider slider__overview" data-index = '${i}'>${this.result.results[i].overview}</span> 
        </div>
          `;
        circle_slider_nav.innerHTML +=`<i class="far fa-circle circle_slider_i active" data-index = '${i}'></i>`;

        // this.newMethod(i);
      }
      let img_true_slider = document.querySelectorAll('.img_true_slider');
      let slider__title = document.querySelectorAll('.slider__title');
      let slider__overview = document.querySelectorAll('.slider__overview');
      let circle_slider_i = document.querySelectorAll('.circle_slider_i');
        img_true_slider[0].classList.add("block");
        slider__title[0].classList.add("block");
        slider__overview[0].classList.add("block");
        circle_slider_i[0].classList.add("block");
        circle_slider_i[0].classList.add("block");

let prev_next = document.querySelector('.prev_next');
let prev_back = document.querySelector('.prev_back');
let i = 0;
 
prev_next.addEventListener("click", function () {
    ++i
    if (i >= img_true_slider.length) {
        img_true_slider[i-1].classList.remove("block");
        slider__title[i-1].classList.remove("block");
        slider__overview[i-1].classList.remove("block");
        circle_slider_i[i-1].classList.remove("block");
        i = 0;
        img_true_slider[i].classList.add("block");
        slider__title[i].classList.add("block");
        slider__overview[i].classList.add("block");
        circle_slider_i[i].classList.add("block");
        
    } else {
        img_true_slider[i-1].classList.remove("block");
        slider__title[i-1].classList.remove("block");
        slider__overview[i-1].classList.remove("block");
        circle_slider_i[i-1].classList.remove("block");
        img_true_slider[i].classList.add("block");
        slider__title[i].classList.add("block");
        slider__overview[i].classList.add("block");
        circle_slider_i[i].classList.add("block");
    }
})

prev_back.addEventListener("click", function () {
    --i
    if (i < 0) {
        img_true_slider[i+1].classList.remove("block");
        slider__title[i+1].classList.remove("block");
        slider__overview[i+1].classList.remove("block");
        circle_slider_i[i+1].classList.remove("block");
        i = img_true_slider.length-1;
        img_true_slider[i].classList.add("block");
        slider__title[i].classList.add("block");
        slider__overview[i].classList.add("block");
        circle_slider_i[i].classList.add("block");

    } 
    else {
        img_true_slider[i+1].classList.remove("block");
        slider__title[i+1].classList.remove("block");
        slider__overview[i+1].classList.remove("block");
        circle_slider_i[i+1].classList.remove("block");
        img_true_slider[i].classList.add("block");
        slider__title[i].classList.add("block");
        slider__overview[i].classList.add("block");
        circle_slider_i[i].classList.add("block");
    }
})
  return this
  }
}


class ImagesTop{
 constructor(card,result){
    this.card = card;
    this.result = result;
 }
   print(){

    let $newCart = document.createElement('div');

    wrapper.insertAdjacentElement('afterbegin', $newCart);
      $newCart.classList.add(`${this.card}`);
        document.querySelector('.top').insertAdjacentElement('afterbegin', $newCart);

      for (let i = 0; i < 20; i++) {
  //перевірка назви на undefined
        if (typeof this.result.results[i].title == 'undefined'){
          this.result.results[i].title = this.result.results[i].name
        }
        if (typeof this.result.results[i].release_date == 'undefined'){
          this.result.results[i].release_date = '...';
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

      let circre__info = document.querySelectorAll('.circre__info');
      let card__text = document.querySelectorAll('.card__text');
      let div_img = document.querySelectorAll('.div_img');
      let overview = document.querySelectorAll('.overview');


      for (let j = 0; j < circre__info.length; j++) {
        circre__info[j].addEventListener('mouseover', ()=> {
        card__text[j].style.opacity = '.1';
        overview[j].style.opacity = '1';
        overview[j].classList.toggle('display__none');
        overview[j].style.transition = '2s';
   });
        overview[j].addEventListener('mouseout', ()=> {
        overview[j].classList.toggle('display__none');
        overview[j].style.opacity = '0';
        card__text[j].style.opacity = '1';
        overview[j].style.transition = '2s';
   }); 

  }
      



     return this
   }
}

let inform = document.querySelector('.inform');
let topSide = document.querySelector('.topSide');
let div__ImgCart = document.querySelectorAll('.div__ImgCart');




function showResult(result){
        let sliderTop = new Slider(result).slider();
        let topFilm = new ImagesTop( 'cart__All', result).print();

}



