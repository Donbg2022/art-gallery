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



const images = document.querySelector('.gallery-img')
const imgIdentity = document.querySelector('.img-identifier')
 


//event listener functions to make hover over images enlarge image and display id
const imgHover = (e) => {
  let name = e.target.id
  if (name.length !== 0){ 
    document.querySelector(`#${name}`).style.width = '101%'
    document.querySelector(`#${name}`).style.filter = 'blur(2px)'
    document.querySelector(`.${name}`).style.display = 'block'
    document.body.style.cursor = 'pointer'

  }
}
  

const imgDown = (e) => {
    let name = e.target.id
    if (name.length !== 0){ 
      document.querySelector(`#${name}`).style.width = '100%'
      document.querySelector(`#${name}`).style.filter = 'blur(0)'
      document.querySelector(`.${name}`).style.display = 'none'
      document.body.style.cursor = 'default'



  }
}
//initializing eventlisteners
images.addEventListener('mouseover', imgHover)
images.addEventListener('mouseout', imgDown)


const galleryRedirect = document.querySelector('.gallery-img')

galleryRedirect.addEventListener('click', () =>{
  location.assign('./order.html')
})