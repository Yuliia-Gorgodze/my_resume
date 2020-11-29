// home
const borderResumRef = document.querySelector(".inf_resume-js");
const borderProjectRef= document.querySelector(".inf_project-js");
const borderSkillsRef= document.querySelector(".inf_skills-js");
const borderItemsRef =document.querySelector(".inf_item-js");

borderResumRef.addEventListener('mouseenter', borderIn);
borderResumRef.addEventListener('mouseleave', borderOut);
borderProjectRef.addEventListener('mouseenter', borderIn);
borderProjectRef.addEventListener('mouseleave', borderOut);
borderSkillsRef.addEventListener('mouseenter', borderIn);
borderSkillsRef.addEventListener('mouseleave', borderOut);
 

  function borderIn (elem) {
      let target = elem.target;
      if(target.dataset.border === "resum"){
      target.classList.add('draw', 'blue');
      borderProjectRef.classList.add('baseBg');
      borderSkillsRef.classList.add('baseBg');
      }
      if(target.dataset.border === "project"){
        target.classList.add('draw', 'yellow');
        borderResumRef.classList.add('baseBg');
        borderSkillsRef.classList.add('baseBg');
     }
     if(target.dataset.border === "skills"){
        target.classList.add('draw', 'red');
        borderResumRef.classList.add('baseBg');
        borderProjectRef.classList.add('baseBg');
    }
        
 }

 function borderOut (elem) {
    let target = elem.target;
    

    if(target.dataset.border === "resum"){
        target.classList.remove('draw', 'blue')
        borderProjectRef.classList.remove('baseBg');
        borderSkillsRef.classList.remove('baseBg');
        }
        if(target.dataset.border === "project"){
            target.classList.remove('draw', 'yellow')
          borderResumRef.classList.remove('baseBg');
          borderSkillsRef.classList.remove('baseBg');
       }
       if(target.dataset.border === "skills"){
        target.classList.remove('draw', 'red')
          borderResumRef.classList.remove('baseBg');
          borderProjectRef.classList.remove('baseBg');
      }
 }




