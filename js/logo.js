window.onload = function(){
  
  const up = document.getElementById("logo-title")
  const down = document.getElementById("logo-subtitle")
  const logo = document.getElementById("logo-img")
  const container_logo = document.getElementById("logo-container")

  document.addEventListener("scroll", function(){

    if(window.pageYOffset < 800){
      up.style.top =`${-(window.pageYOffset/3)}px`
      down.style.top =`${(window.pageYOffset*1.5)}px`
      logo.style.top = `${(window.pageYOffset)}px`
    
      this.const = 1 - window.pageYOffset/200
      container_logo.style.opacity = `${this.const.toFixed(2)}` 
      
      if(this.const < 0){
        this.const = 0
      }
      if(this.const > 1){
        this.const = 1 
      }
    }
  });
};
