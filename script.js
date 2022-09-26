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

const fullscreenbtn = document.getElementById("fullscreenbtn");
fullscreenbtn.addEventListener("click", () => {
  toggleFullscreen();
});
// Full-Screen Mode Toggle Code (End)


const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const ropeKnot = document.getElementById("ropeKnot")
const slider2 = document.getElementById('slider')
const zone2 = document.getElementById('zone')

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

  const ropeKnotStyle = window.getComputedStyle(ropeKnot);
  const ropeKnotTopVal = ropeKnotStyle.getPropertyValue("top")
  // console.log(ropeKnotTopVal)
  var str = JSON.stringify(ropeKnotTopVal)
  // console.log(str)
  var topSubstring = str.substring(1, str.length-3)
  // console.log(topSubstring)

  if(touching(slider2, zone2)) {
    ropeKnot.style.top  = (parseInt(topSubstring) - 40) +"px"
    console.log(ropeKnot.style.top)
  }
  else {
    ropeKnot.style.top  = (parseInt(topSubstring) - 10) +"px"
    console.log(ropeKnot.style.top)
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
  var str = JSON.stringify(ropeKnotTopVal)
  // console.log(str)
  var topSubstring = str.substring(1, str.length-3)
  // console.log(topSubstring)

  if(touching(slider2, zone2)) {
    ropeKnot.style.top  = (parseInt(topSubstring) + 40) +"px"
    console.log(ropeKnot.style.top)
  }
  else {
    ropeKnot.style.top  = (parseInt(topSubstring) + 10) +"px"
    console.log(ropeKnot.style.top)
  }
})

document.addEventListener("touchstart", e => {
  [...e.changedTouches].forEach(touch => {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    dot.style.top = `${touch.pageY}px`
    dot.style.left = `${touch.pageX}px`
    dot.id = touch.identifier
    document.body.append(dot)


  })
})

document.addEventListener("touchmove", e => {
  [...e.changedTouches].forEach(touch => {
    const dot = document.getElementById(touch.identifier)
    dot.style.top = `${touch.pageY}px`
    dot.style.left = `${touch.pageX}px`
  })
})

document.addEventListener("touchend", e => {
  [...e.changedTouches].forEach(touch => {
    const dot = document.getElementById(touch.identifier)
    dot.remove()
    const ropeKnotStyle = window.getComputedStyle(ropeKnot);
    const ropeKnotTopVal = ropeKnotStyle.getPropertyValue("top")
    var str = JSON.stringify(ropeKnotTopVal)
    var topSubstring = str.substring(1, str.length-3)

    if ((parseInt(topSubstring) - 10) < 0) {
      alert("player 1 wins!")
      ropeKnot.style.top = "110px";
    }else if ((parseInt(topSubstring) + 10) > 210) {
      alert("player 2 wins!")
      ropeKnot.style.top ="110px";
    }
  })
})
