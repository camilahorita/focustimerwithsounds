
export default function(
  
){
  const musicForest = new Audio("./sounds/Floresta.wav");
  const musicRain = new Audio("./sounds/Chuva.wav");
  const musicCoffe = new Audio("./sounds/Cafeteria.wav");
  const musicFire = new Audio("./sounds/Lareira.wav");
  const buttonForest = document.querySelector(".forest");
  const buttonRain = document.querySelector(".rain");
  const buttonCoffe = document.querySelector(".coffe");
  const buttonFire = document.querySelector(".fire");
  let buttonForestActived = false;
  let buttonRainActived = false;
  let buttonCoffeActived = false;
  let buttonFireActived = false;



  function disableMusics() {
    musicForest.pause();
    musicRain.pause();
    musicCoffe.pause();
    musicFire.pause();
  }

  function cleanSelectedButtons(){
    document.querySelector("#forestSvgBackground").style.fill = '#E5E5E5';
    document.querySelector("#forestSvgColorImage").style.fill = "#323238";
    document.querySelector("#rainSvgBackground").style.fill = '#E5E5E5';
    document.querySelector("#rainSvgColorImage").style.fill = "#323238";
    document.querySelector("#coffeSvgBackground").style.fill = '#E5E5E5';
    document.querySelector("#coffeSvgColorImage").style.fill = "#323238";
    document.querySelector("#fireSvgBackground").style.fill = '#E5E5E5';
    document.querySelector("#fireSvgColorImage").style.fill = "#323238";
  
  }  

  buttonForest.addEventListener('click', function(){
    if (buttonForestActived == false){
    disableMusics();
    musicForest.play();
    cleanSelectedButtons();
    document.querySelector("#forestSvgBackground").style.fill = '#02799D';
    document.querySelector("#forestSvgColorImage").style.fill = "#FFF";
    buttonForestActived =true;
  } else {
      disableMusics();
      cleanSelectedButtons();
      buttonForestActived = false;
    }
    
  })
  
  buttonRain.addEventListener('click', function(){
    if (buttonRainActived == false){
    disableMusics();
    musicRain.play();
    cleanSelectedButtons();
    document.querySelector("#rainSvgBackground").style.fill = '#02799D';
    document.querySelector("#rainSvgColorImage").style.fill = "#FFF";
    buttonRainActived = true;
    } else {
      disableMusics();
      cleanSelectedButtons();
      buttonRainActived =false;
    }
  })
  
  buttonCoffe.addEventListener('click', function(){
    if (buttonCoffeActived == false){
    disableMusics();
    musicCoffe.play();
    cleanSelectedButtons();
    document.querySelector("#coffeSvgBackground").style.fill = '#02799D';
    document.querySelector("#coffeSvgColorImage").style.fill = "#FFF";
    buttonCoffeActived = true;
    } else {
      disableMusics();
      cleanSelectedButtons();
      buttonCoffeActived =false;
    }
    
  })
  buttonFire.addEventListener('click', function(){
    if (buttonFireActived == false) {
    disableMusics();
    musicFire.play();
    cleanSelectedButtons();
    document.querySelector("#fireSvgBackground").style.fill = '#02799D';
    document.querySelector("#fireSvgColorImage").style.fill = "#FFF";
    buttonFireActived =true;
    } else {
      disableMusics();
      cleanSelectedButtons();
      buttonFireActived =false;
  
    }
    
  })
}