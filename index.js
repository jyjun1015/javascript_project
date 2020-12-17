// alert('i am iron-man');

// console.log('I am iron-man!!');

const title = document.querySelector("#title")

// html, css 수정

// title.innerHTML = "juck you"
// title.style.color = "red";

// 이벤트 다루기

function handleResize(event){
	console.log("sex")
	console.log(event)
	title.style.color = 'blue';
}
// resize, click 시에만 작동될 수 있도록 뒤에 () 안붙인다.
// title.addEventListener("click",handleResize);

// [alert]
// const age = prompt("how old are you");

// if(18 === 18){
// 	console.log("TRUE")
// }
// else{
// 	console.log("FALSE")
// }

// title.classList.toggle(Clicked_class);

// title.classList.toggle(Clicked_class);
