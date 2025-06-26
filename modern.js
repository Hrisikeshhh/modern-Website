

    // html acess section
    let about = document.querySelector("#about");
    let firstSection = document.querySelector(".firstSection");


    // function

  about.addEventListener("click",(e)=>{
    e.preventDefault();
    firstSection.scrollIntoView({behavior :"smooth"});
  });
