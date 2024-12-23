// let dropDown = document.querySelector(".dropdown");
// const dropDownList = document.querySelector(".dropdown-content");

// // dropDown.addEventListener('onmouseenter', ()=>{
// //   dropDownList.style.display = "block";
// // })

// function mouseOver(){
//   dropDownList.style.display = "block";
// }

// function mouseOut(){
//   dropDownList.style.display = "none";
// }

let menu = document.querySelector(".menu");
let X = document.querySelector(".x-mark");
let menuItems = document.querySelector(".menu-item");
const scrollBtn = document.querySelector('#scroll')

menu.addEventListener('click', ()=>{
  menuItems.classList.add("show");
})

X.addEventListener('click', ()=>{
  menuItems.classList.remove("show");
})



window.addEventListener('scroll', () =>{
  if(window.pageYOffset > 50){
    scrollBtn.style.display = 'block'
  }else{
    scrollBtn.style.display = 'none'
  }

  scrollBtn.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  })
})