import dogs from "/data.js"
import {Dog} from "/Dog.js";
let index=0;
let currentDog= new Dog(dogs[index]);
document.getElementById("image-section").innerHTML=currentDog.getDogHtml();

document.getElementById("b1").addEventListener("click", function(){
    document.getElementById("dislike-badge").style.display="inline";
    document.getElementById("b2").disabled=true;
    document.getElementById("b1").disabled=true;
    dogs[index].hasBeenSwiped=true;
    setTimeout(renderDog, 2000);
})
document.getElementById("b2").addEventListener("click", function(){
    document.getElementById("like-badge").style.display="inline";
    document.getElementById("b1").disabled=true;
    document.getElementById("b2").disabled=true;
    dogs[index].hasBeenSwiped=true;
    dogs[index].hasBeenLiked=true;
    setTimeout(renderDog, 2000);
})

function renderDog(){
    if(index===2){
        index=0;
    }
    else{index++;}
    currentDog= new Dog(dogs[index]);
    document.getElementById("image-section").innerHTML=currentDog.getDogHtml();
    document.getElementById("image-section").style.backgroundImage=`url(${currentDog.avatar})`;
    document.getElementById("like-badge").style.display="none";
    document.getElementById("dislike-badge").style.display="none";
    document.getElementById("b1").disabled=false;
    document.getElementById("b2").disabled=false;
}