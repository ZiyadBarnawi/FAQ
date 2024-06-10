"use strict"
// I swear to allah I learned an easier way of doing this but my ego is way too high



let icons=document.querySelectorAll(".icon");
let hiddenTexts=document.querySelectorAll(".hidden-text")

const switchState=function func1(icon){
    if(icon.target===icons[0])
        {hiddenTexts[0].classList.toggle("hide")
         icons[0].classList.toggle("active-icon")  
         icons[1].classList.remove("active-icon") 
         hiddenTexts[1].classList.add("hide") 
         icons[2].classList.remove("active-icon") 
         hiddenTexts[2].classList.add("hide") 
        }
    else if(icon.target===icons[1])
        {hiddenTexts[1].classList.toggle("hide")
         icons[1].classList.toggle("active-icon")  
         icons[0].classList.remove("active-icon") 
         hiddenTexts[0].classList.add("hide") 
         icons[2].classList.remove("active-icon") 
         hiddenTexts[2].classList.add("hide") 
        }
    else if(icon.target===icons[2])
        {hiddenTexts[2].classList.toggle("hide")
         icons[2].classList.toggle("active-icon")  
         icons[1].classList.remove("active-icon") 
         hiddenTexts[1].classList.add("hide") 
         icons[0].classList.remove("active-icon") 
         hiddenTexts[0].classList.add("hide") 
        }
}
// let icons=document.querySelectorAll(".icon");
// let hiddenTexts=document.querySelectorAll(".hidden-text");

// const switchState=function func1(icon){
    

//     if(icon.target===icons[0] ){
//         icon.target.parentNode.parentNode.childNodes[3].classList.toggle("hide")//to toggle the first question
//         icon.target.classList.toggle("active-icon")//to activate the icon class that makes it rotate
//         icon.target.parentNode.parentNode.nextSibling.nextSibling.childNodes[2].nextSibling.classList.add("hide")//to hide the second question
//         icon.target.parentNode.parentNode.nextSibling.nextSibling.childNodes[2].nextSibling.classList.remove("active-icon")//to remove the class that makes the icon rotates
//         icon.target.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[2].nextSibling.classList.add("hide")// to hide the third question
//         console.log(icon.target.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[2].nextSibling.classList.remove("active-icon"))// to remove the class that makes the icon rotates
//         // icon.target.parentNode.parentNode.nextSibling.lastChild.classList.toggle("hide")
//     }
//     else if(icon.target===icons[1]){
//         icon.target.parentNode.parentNode.childNodes[3].classList.toggle("hide")//to toggle the second question
//         icon.target.classList.toggle("active-icon")//to activate the icon class that makes it rotate
//         icon.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].classList.add("hide")//To hide the first question
//         icon.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].classList.remove("active-icon")// to make the first arrow go back to normal
//         console.log(icon.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].classList.add("hide"))
//         console.log(icon.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].classList.remove("active-icon"))
            
    
//     }



    


// }

for(const icon of icons){
    icon.addEventListener("click",switchState)
}
