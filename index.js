
 let bar = document.querySelector("#bar");
 let navItems = document.querySelector(".navItems");
 let of = document.querySelector("#close")

 if(bar){
 bar.addEventListener("click",()=>{
    navItems.classList.add("slider");
 })
}
 
if(of)
{
   of.addEventListener("click",()=>{
      navItems.classList.remove("slider");
   })
}


  var typed = new Typed('#element', {
      strings: ['The future of education is here.'],
      typeSpeed: 50,
    });