let container  = document.createElement('div');
let bigDiv = document.createElement('div');
let minDiv = document.createElement('div');
let right_arrows = document.createElement('span');
let left_arrows = document.createElement('span');
let ul = document.createElement('ul');

let right_arrows_min = document.createElement('span');
let left_arrows_min = document.createElement('span');


//add class
container.classList.add('container');
bigDiv.classList.add('bigDiv');
minDiv.classList.add('minDiv');
right_arrows.classList.add('right_arrows');
left_arrows.classList.add('left_arrows');
right_arrows_min.classList.add('right_arrows_min');
left_arrows_min.classList.add('left_arrows_min');

//add text
right_arrows.innerHTML = '&rArr;'
left_arrows.innerHTML = '&lArr;';
right_arrows_min.innerHTML = '&rArr;'
left_arrows_min.innerHTML = '&rArr;'

//add html
document.body.insertAdjacentElement('afterbegin', container);
container.insertAdjacentElement('afterbegin', bigDiv);
	bigDiv.insertAdjacentElement('afterbegin', right_arrows);
	bigDiv.insertAdjacentElement('afterbegin', left_arrows);
container.insertAdjacentElement('beforeend', minDiv);
minDiv.insertAdjacentElement('afterbegin', ul);


let get_img = new XMLHttpRequest();
let url = 'https://pixabay.com/api/?key=17057678-b4c4954d8c62e2cb084b2680c&q=green+rock&image_type=photo&per_page=20'
get_img.open('GET',url);
get_img.send();

get_img.onload = function(){
    if(get_img.status !=200){
        console.log(get_img.status,get_img.statusText);
    } else {
        let result = JSON.parse(get_img.response).hits;
        showImg(result);
        showBigImg(result);
    }
}
 
function showBigImg(objImg){
	let img_stc = objImg[0].webformatURL;
	let img = document.createElement('img');
	img.src = img_stc;
	bigDiv.insertAdjacentElement('afterbegin',img);
}
function showImg(objImg){
	for(let i = objImg.length-1; i >= 0; i--){
		var li = document.createElement('li');
		let img = document.createElement('img');
		img.src = objImg[i].webformatURL;
		ul.insertAdjacentElement('afterbegin', li);
		li.insertAdjacentElement('afterbegin', img);
	}
	let n = 0;
	right_arrows.addEventListener('click',function(){
		n++;
		if(n>=objImg.length){
			n=0;
			console.log(objImg.length);
		}
		document.querySelector('.bigDiv img').src = objImg[n].webformatURL;
	})
	 left_arrows.addEventListener('click',function(){
		n--;
		console.log(n, objImg.length);
		if(n < 0){n = objImg.length-1;}
		document.querySelector('.bigDiv img').src = objImg[n].webformatURL;
	})
let list = document.querySelectorAll('.minDiv li');
console.log(list);
	 for(let i = 0; i <list.length; i++){
	 	 list[i].addEventListener('click',function(){
	 	document.querySelector('.bigDiv img').src = objImg[i].webformatURL;
	 	console.log('ok');
		n = i;
	 })
	 }
	 //min img slider 
let size_min = list[0].getBoundingClientRect().width * list.length;
ul.style.width = `${size_min}px`;
	minDiv.insertAdjacentElement('afterbegin', right_arrows_min);
	minDiv.insertAdjacentElement('afterbegin', left_arrows_min);
	let control_width = 0;

	let border = size_min - minDiv.getBoundingClientRect().width;
		console.log(border);
	right_arrows_min.addEventListener('click', function(){
		control_width -= list[0].getBoundingClientRect().width;
		if(control_width <= (-border)){
			control_width = 0;
		}
		ul.style.left = `${control_width}px`;
		console.log(border);
	})
	left_arrows_min.addEventListener('click', function(){
		console.log('of');
		console.log(control_width);
		if(control_width !== 0){
			control_width = (control_width + 150);
		}
		ul.style.left = `${control_width}px`;
	})
}









