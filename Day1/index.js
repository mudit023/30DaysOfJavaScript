const numberOfDrums = document.querySelectorAll(".drum-key").length;

for (let index = 0; index < numberOfDrums; index++) {
  document.querySelectorAll(".drum-key")[index].addEventListener("click", function () {
    const divInnerContent = this.firstElementChild.textContent;
    console.log(divInnerContent);
    console.log("click registered");
    playSound(divInnerContent);
    addAnimation(divInnerContent);
  });
}

document.addEventListener("keydown", function(event){
  console.log("key pressed "+ event.key);
  playSound(event.key.toUpperCase());
  addAnimation(event.key.toUpperCase());
})

function playSound(input){
  switch (input) {
    case 'A':
      const clap = new Audio('./Resources/Sounds/clap.wav');
      clap.play(); 
      break;
    case 'S':
      const hihat = new Audio('./Resources/Sounds/hihat.wav');
      hihat.play(); 
      break;
    case 'D':
      const kick = new Audio('./Resources/Sounds/kick.wav');
      kick.play(); 
      break;
    case 'F':
      const openhat = new Audio('./Resources/Sounds/openhat.wav');
      openhat.play(); 
      break;
    case 'G':
      const boom = new Audio('./Resources/Sounds/boom.wav');
      boom.play(); 
      break;
    case 'H':
      const ride = new Audio('./Resources/Sounds/ride.wav');
      ride.play(); 
      break;
    case 'J':
      const snare = new Audio('./Resources/Sounds/snare.wav');
      snare.play(); 
      break;
    case 'K':
      const tom = new Audio('./Resources/Sounds/tom.wav');
      tom.play(); 
      break;
    case 'L':
      const tink = new Audio('./Resources/Sounds/tink.wav');
      tink.play(); 
      break;
  
    default:
      alert("Wrong key");
      break;
  }
}

function addAnimation(currentKey){
  const activeKey = document.querySelector("."+currentKey);
  activeKey.classList.add("playing");
  setTimeout(function (){
    activeKey.classList.remove("playing")
  }, 100)
}