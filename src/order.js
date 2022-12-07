const imgList = document.querySelector('.img-list')

//event listener functions to make hover over images enlarge image and display id
const imgHover = (e) => {
  let name = e.target.id
  if (name.length !== 0){ 
    document.querySelector(`.${name}`).style.display = 'block'

  }
}
  const imgDown = (e) => {
    let name = e.target.id
    console.log(e)
    if (name.length !== 0){ 
      document.querySelector(`.${name}`).style.display = 'none'
  }
}

//initializing eventlisteners
imgList.addEventListener('mouseover', imgHover)
imgList.addEventListener('mouseout', imgDown)



// the hover effect is detecting the div which is why it is glitching out