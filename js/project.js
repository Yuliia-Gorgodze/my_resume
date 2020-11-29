
 const projectContainerRef = document.querySelector(".project_title-js");
 const  projectTwoRef = document.querySelector(".project_container-js");
 const  projectElementRef = document.querySelector(".project_container");
 const projectElementTwoRef = document.querySelector(".project_titleTwo-js")
 

 projectElementRef.addEventListener('mouseenter', mouseIn);
 projectElementRef.addEventListener('mouseleave', mouseOut);
 projectTwoRef.addEventListener('mouseenter', mouseIn);
 projectTwoRef.addEventListener('mouseleave', mouseOut);
 function mouseIn (elem) {
    let target = elem.target;
   
    if(target.dataset.project === "one"){
    projectContainerRef.classList.add('red');
    projectContainerRef.textContent = "<<< CKLICK"
    }
    if(target.dataset.project === "two"){
        projectElementTwoRef.classList.add('red');
        projectElementTwoRef.textContent = "<<< CKLICK"
   }    
}
function mouseOut (elem) {
    let target = elem.target;
    if(target.dataset.project === "one"){
        projectContainerRef.classList.remove('red');
        projectContainerRef.textContent = "Проект | 1"
    }
    if(target.dataset.project === "two"){
        projectElementTwoRef.classList.remove('red');
        projectElementTwoRef.textContent = "Проект | 2"
   } 
 }