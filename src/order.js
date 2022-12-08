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
    document.querySelector('.buying-info').style.display = 'none'
  }
})