// Full-Screen Mode Toggle Code (Start)
function getFullscreenElement() {
  return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch((e) => {
      console.log(e);
    });
  }
}

// const fullscreenbtn = document.getElementById("fullscreenbtn");
// fullscreenbtn.addEventListener("click", () => {
//   toggleFullscreen();
// });

document.addEventListener("click", () => {
  toggleFullscreen();
})
// Full-Screen Mode Toggle Code (End)

function showGameEndScreen(player) {
  let str1 = "Player " + player + " Wins!"
  
  playerWinText.textContent = str1;

  if (player == 1) {
    p1Score++
  } else {
    p2Score++
  }

  let str2 = "Player 1: " + p1Score
  let str3 = "Player 2: " + p2Score

  p1ScoreText.textContent = str2
  p2ScoreText.textContent = str3

  buttonDiv.style.display = "none"
  gameoverDiv.style.display = "flex"
  
}


var p1Score = 0
var p2Score = 0
var endState = false;

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const ropeKnot = document.getElementById("ropeKnot")
const buttonDiv = document.getElementById("div-rgb")
const btnRematch = document.getElementById("btn-rematch")
const btnReset = document.getElementById("btn-reset")
const gameoverDiv = document.getElementById("div-gameover")
const playerWinText = document.getElementById("h1-pwin")
const p1ScoreText = document.getElementById("h3-p1")
const p2ScoreText = document.getElementById("h3-p2")
const slider2 = document.getElementById('slider')
const zone2 = document.getElementById('zone')
const deduct = document.getElementById('deduct')

function touching(slider2, zone2) {
  const rect1 = slider2.getBoundingClientRect();
  const rect2 = zone2.getBoundingClientRect();

  return (
  rect1.bottom - rect2.bottom <= 10 && rect1.top - rect2.top >= 0 ||       
  rect1.top - rect2.top <= 10 && rect1.bottom - rect2.bottom >= 0 ||
  rect2.bottom - rect1.bottom <= 10 && rect2.top - rect1.top >= 0 ||        
  rect2.top - rect1.top <= 10 && rect2.bottom - rect1.bottom >= 0 );      
}

btn1.addEventListener("touchstart" , e => {
  e.preventDefault();
  // console.log("Btn1-Touches" , e.touches.length)
  // console.log("Btn1-Targets" , e.targetTouches.length)
  // console.log("Btn1-Changed" , e.changedTouches.length)

  let ropeKnotStyle = window.getComputedStyle(ropeKnot);
  let ropeKnotTopVal = ropeKnotStyle.getPropertyValue("top")
  // console.log(ropeKnotTopVal)
  let str = JSON.stringify(ropeKnotTopVal)
  // console.log(str)
  let topSubstring = str.substring(1, str.length-3)
  // console.log(topSubstring)


  const buttonDivStyle = window.getComputedStyle(buttonDiv);
  const buttonDivGradVal = buttonDivStyle.getPropertyValue("background")
  let str2 = JSON.stringify(buttonDivGradVal)
  // console.log(str2)
  let blue_substring = parseInt(str2.substring(62, 65).replace('%', '').replace(',', '').replace(" ", '').replace(")", ''));
  let red_substring = parseInt(str2.substring(89, 93).replace('%', '').replace(',', '').replace(" ", '').replace(")", ''));

  // console.log(blue_substring);
  // console.log(red_substring);

  //Check if touching the zone
  if(touching(slider2, zone2)) {
    ropeKnot.style.top  = (parseInt(topSubstring) - 50) +"px"
    console.log(ropeKnot.style.top)
    // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) " + (blue_substring - 20) + "%, rgba(255,0,0,0.75) " + (red_substring - 20) + "%)";
    console.log("Sweet Spot!")
  }
  else if(touching(slider2, deduct)) {
    ropeKnot.style.top  = (parseInt(topSubstring) + 50) +"px"
    console.log(ropeKnot.style.top)
    // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) " + (blue_substring + 20) + "%, rgba(255,0,0,0.75) " + (red_substring + 20) + "%)";
    console.log("Bad Spot!")
  }
  else {
    ropeKnot.style.top  = (parseInt(topSubstring) - 10) +"px"
    console.log(ropeKnot.style.top)
    // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) " + (blue_substring - 4) + "%, rgba(255,0,0,0.75) " + (red_substring - 4) + "%)";
  }

  ropeKnotStyle = window.getComputedStyle(ropeKnot);
  ropeKnotTopVal = ropeKnotStyle.getPropertyValue("top")
  console.log(ropeKnotTopVal)
  str = JSON.stringify(ropeKnotTopVal)
  topSubstring = parseInt(str.substring(1, str.length-3))
  console.log(topSubstring)

  if (topSubstring > 110) {
    console.log("new: " + "rgba(0,82,255," + ((topSubstring - 100)/100) + ")")
    buttonDiv.style.background = "rgba(0, 82, 255, " + ((topSubstring - 100)/100) + ")"
  } else if (topSubstring > 100 && topSubstring < 110) {
    buttonDiv.style.background = "rgba(0, 82, 255, " + ((topSubstring - 100)/100) + ")"
  } else if (topSubstring <= 100) {
    buttonDiv.style.background = "rgba(255, 100, 100, " + Math.abs(((topSubstring - 100)/100)) + ")"
  } else if (topSubstring == 110) {
    buttonDiv.style.background = "rgba(255,100,100,0)"
  }

})


btn2.addEventListener("touchstart" , e => {
  e.preventDefault();
  // console.log("Btn2-Touches" , e.touches.length)
  // console.log("Btn2-Targets" , e.targetTouches.length)
  // console.log("Btn2-Changed" , e.changedTouches.length)

  const ropeKnotStyle = window.getComputedStyle(ropeKnot);
  const ropeKnotTopVal = ropeKnotStyle.getPropertyValue("top")
  // console.log(ropeKnotTopVal)
  let str = JSON.stringify(ropeKnotTopVal)
  // console.log(str)
  let topSubstring = str.substring(1, str.length-3)
  console.log(topSubstring)

  const buttonDivStyle = window.getComputedStyle(buttonDiv);
  const buttonDivGradVal = buttonDivStyle.getPropertyValue("background")
  let str2 = JSON.stringify(buttonDivGradVal)
  console.log(str2)
  // let blue_substring = parseInt(str2.substring(62, 65).replace('%', '').replace(',', '').replace(" ", '').replace(")", ''));
  // let red_substring = parseInt(str2.substring(89, 93).replace('%', '').replace(',', '').replace(" ", '').replace(")", ''));

  // console.log(blue_substring);
  // console.log(red_substring);
  
  //Check if touching the zone
  if(touching(slider2, zone2)) {
    ropeKnot.style.top  = (parseInt(topSubstring) + 50) +"px"
    console.log(ropeKnot.style.top)
    // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) " + (blue_substring + 20) + "%, rgba(255,0,0,0.75) " + (red_substring + 20) + "%)";
  }
  else if(touching(slider2, deduct)) {
    ropeKnot.style.top  = (parseInt(topSubstring) - 50) +"px"
    console.log(ropeKnot.style.top)
    // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) " + (blue_substring - 20) + "%, rgba(255,0,0,0.75) " + (red_substring - 20) + "%)";
  }
  else {
    ropeKnot.style.top  = (parseInt(topSubstring) + 10) +"px"
    console.log(ropeKnot.style.top)
    // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) " + (blue_substring + 4) + "%, rgba(255,0,0,0.75) " + (red_substring + 4) + "%)";
  }

  if (topSubstring > 110) {
    console.log("new: " + "rgba(0,82,255," + ((topSubstring - 100)/100) + ")")
    buttonDiv.style.background = "rgba(0, 82, 255, " + ((topSubstring - 100)/100) + ")"
  } else if (topSubstring > 100 && topSubstring < 110) {
    buttonDiv.style.background = "rgba(0, 82, 255, " + ((topSubstring - 100)/100) + ")"
  } else if (topSubstring <= 100) {
    buttonDiv.style.background = "rgba(255, 100, 100, " + Math.abs(((topSubstring - 100)/100)) + ")"
  }
})

btnRematch.addEventListener("touchend", e => {
  e.preventDefault();
  // Should reset board
  // Set game over div display to none, rgb div display to flex
  // reset rope
  // reset gradient colors 

  ropeKnot.style.top = "110px";
  gameoverDiv.style.display = "none";
  // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) 40%, rgba(255,0,0,0.75) 60%)"
  buttonDiv.style.background = "rgba(255,100,100,0)"
  buttonDiv.style.display = "flex";
})

btnReset.addEventListener("touchend", e => {
  e.preventDefault();
  p1Score = 0;
  p2Score = 0;

  ropeKnot.style.top = "110px";
  gameoverDiv.style.display = "none";
  // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) 40%, rgba(255,0,0,0.75) 60%)"
  buttonDiv.style.background = "rgba(255,100,100,0)"
  buttonDiv.style.display = "flex";
})

buttonDiv.addEventListener("touchstart", e => {
  [...e.changedTouches].forEach(touch => {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    dot.style.top = `${touch.pageY}px`
    dot.style.left = `${touch.pageX}px`
    dot.id = touch.identifier
    document.body.append(dot)


  })
})

buttonDiv.addEventListener("touchmove", e => {
  [...e.changedTouches].forEach(touch => {
    const dot = document.getElementById(touch.identifier)
    dot.style.top = `${touch.pageY}px`
    dot.style.left = `${touch.pageX}px`
  })
})

buttonDiv.addEventListener("touchend", e => {
  [...e.changedTouches].forEach(touch => {
    const dot = document.getElementById(touch.identifier)
    dot.remove()
    const ropeKnotStyle = window.getComputedStyle(ropeKnot);
    const ropeKnotTopVal = ropeKnotStyle.getPropertyValue("top")
    let str = JSON.stringify(ropeKnotTopVal)
    let topSubstring = str.substring(1, str.length-3)

    if ((parseInt(topSubstring) - 10) < 0) {
      // alert("player 1 wins!")
      
      // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) 40%, rgba(255,0,0,0.75) 60%)"
      // ropeKnot.style.top = "110px";

      showGameEndScreen(1);
      
    }else if ((parseInt(topSubstring) + 10) > 210) {
      // alert("player 2 wins!")
      // ropeKnot.style.top ="110px";
      // buttonDiv.style.background = "linear-gradient(0deg, rgba(0,82,255,0.75) 40%, rgba(255,0,0,0.75) 60%)"
      
      showGameEndScreen(2);
    }
  })
})
