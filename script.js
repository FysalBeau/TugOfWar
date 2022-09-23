const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const ropeKnot = document.getElementById("ropeKnot")

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
  if ((parseInt(topSubstring) - 10) < 0) {
    alert("player 1 wins!")
  }else{
    ropeKnot.style.top  = (parseInt(topSubstring) - 10) +"px"
  }
  console.log(ropeKnot.style.top)

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
  if ((parseInt(topSubstring) + 10) > 210) {
    alert("player 2 wins!")
  }else{
    ropeKnot.style.top  = (parseInt(topSubstring) + 10) +"px"
  }
  console.log(ropeKnot.style.top)
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
  })
})