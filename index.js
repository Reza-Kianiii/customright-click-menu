let contextMenu=document.querySelector('.container');
let share_menu=document.querySelector('.share-menu');
document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    
    let x=window.innerWidth-e.pageX>=305?e.pageX+'px': window.innerWidth-305+'px';

    contextMenu.style.left=x;
    contextMenu.style.top=e.pageY+'px';
    contextMenu.style.display='block'

    
    
    
    if(window.innerHeight-e.pageY<(contextMenu.scrollHeight)+5){
        let newposition=window.innerHeight-233
        contextMenu.style.top=newposition+'px'
    }
    //170 :share_menu  اندازه ارتفاع  
    if( window.innerWidth-e.pageX<  contextMenu.offsetWidth+170){
        share_menu.style.left=-170+'px';
        
    }
    else{
        share_menu.style.left=260+'px'
    }

 

    
   

})


document.addEventListener('click',()=>{
    contextMenu.style.display='none'
})