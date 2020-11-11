<div class = 'div__ImgCart item'>
    <div class = "overview display__none">
        <span>${this.result.results[i].overview}<span>
    </div>
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
    </div>
</div>

<script>
    let main_card = document.createElement("div");
        main_card.insertAdjacentElement("afterbegin", card_overview)
        main_card.insertAdjacentElement("afterbegin", text_info)
        main_card.insertAdjacentElement("afterbegin", wrapper_images)
        main_card.insertAdjacentElement("afterbegin", card_title)
        let card_overview = document.createElement("div");
            card_overview.insertAdjacentElement("afterbegin", overview_text)
    let overview_text = document.createElement("span");
    let text_info = document.createElement("i");
    let wrapper_images = document.createElement("div");
        wrapper_images.insertAdjacentElement("afterbegin", images_poster_path)
        let images_poster_path = document.createElement("img");
    let card_title = document.createElement("div");
        card_title.insertAdjacentElement("afterbegin", title_text)
        card_title.insertAdjacentElement("afterbegin", wrapper_release_vote)
    let title_text = document.createElement("span");
        let wrapper_release_vote = document.createElement("div");
        wrapper_release_vote.insertAdjacentElement("afterbegin", release_date)
        wrapper_release_vote.insertAdjacentElement("afterbegin", vote_average)
            let release_date = document.createElement("span");
            let vote_average = document.createElement("span");
</script>