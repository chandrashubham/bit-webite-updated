// hamsburger menu
var hamsburger=document.querySelector(".menu");
let sideMenu=document.querySelector(".menuOptions");
let closeBtn=document.querySelector(".cancel");
hamsburger.onclick=function(){
  sideMenu.style.left='0';
  console.log("aaya side menu");
}
closeBtn.onclick=()=>{
  sideMenu.style.left="-320px";
  console.log("agya side menu");
}
// typed js implementation
var typed = new Typed('#typed-text1', {
  strings: ["   RANKING",],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
  showCursor: false 
});
var typed = new Typed('#typed-text2', {
  strings: ["   MESSAGE",],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
  showCursor: false 
});
var typed = new Typed('#typed-text3', {
  strings: ["   EVENTS",],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
  showCursor: false 
});
var typed = new Typed('#typed-text4', {
  strings: ["   VIDEO",],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
  showCursor: false 
});
