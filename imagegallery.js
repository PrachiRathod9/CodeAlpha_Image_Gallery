const buttons = document.querySelectorAll('.clickbtn');


buttons.forEach(button=>{
    button.addEventListener('click',function(){
        const targetId=this.getAttribute('data-target');
        const targerHeading=document.getElementById(targetId);
        targerHeading.classList.toggle('show');
    });
});

var scrollContainer=document.querySelector(".photos");
var prevbtn=document.getElementById("prevbtn");
var nextbtn=document.getElementById("nextbtn");
scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
});
nextbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehaviour="smooth";
    scrollContainer.scrollLeft += 700;
});
prevbtn.addEventListener("click",()=>{
   scrollContainer.style.scrollBehaviour="smooth";
    scrollContainer.scrollLeft -= 700;
});




 

    
    


