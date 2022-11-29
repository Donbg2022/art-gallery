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


const imgHover = (e) => {
  let name = e.target.id
    document.querySelector(`#${name}`).style.width = '110%'
 
  }

  const imgDown = (e) => {
    let name = e.target.id
    if (name === 'one'){
      document.querySelector('#one').style.width = '100%'
    }else if (name === 'two'){
      document.querySelector('#two').style.width = '100%'
    }else if (name === 'three'){
      document.querySelector('#three').style.width = '100%'
    }else if (name === 'four'){
      document.querySelector('#four').style.width = '100%'
    }else if (name === 'five'){
      document.querySelector('#five').style.width = '100%'
    }else if (name === 'six'){
      document.querySelector('#six').style.width = '100%'
    }else if (name === 'seven'){
      document.querySelector('#seven').style.width = '100%'
    }else if (name === 'eight'){
      document.querySelector('#eight').style.width = '100%'
    }else if (name === 'nine'){
      document.querySelector('#nine').style.width = '100%'
    }else if (name === 'ten'){
      document.querySelector('#ten').style.width = '100%'
    }

}
images.addEventListener('mouseover', imgHover)
images.addEventListener('mouseout', imgDown)