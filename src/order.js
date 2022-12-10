const burger = document.querySelector('#burger')
let click = 1
//add event listener to make a drop down menu of options
burger.addEventListener('click', function(){
  //adds 1 to click variable and uses if statement to open and close the links 
  click++
  if (click % 2 !== 0){
    return document.querySelector('#reactivelinks').style.display = 'none'
  }else{
    return document.querySelector('#reactivelinks').style.display = 'block'
  }
})

const imgList = document.querySelector('.img-list')

//event listener functions to make hover over images enlarge image and display id
const imgHover = (e) => {
  let name = e.target.id
  if (name.length !== 0){ 
    document.querySelector(`.${name}`).style.display = 'block'

  }
}
//mouseover affect to make text disapear when cursor moves from img
window.addEventListener('mouseover', (e) => {
  console.log(e)
  if(e.target.nodeName === 'BODY'){
    let textDown = document.querySelectorAll('.buying-info')
    textDown.forEach(text => {
      text.style.display = 'none'
    })
  }
})

imgList.addEventListener('mouseover', imgHover)