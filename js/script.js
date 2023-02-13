window.addEventListener('scroll',function(){
    console.log(window.scrollY);
}); 

window.addEventListener('scroll',function(){
    if(window.scrollY > 580){
        document.querySelector('#profile>h2').classList.add('active');
    }
    if(window.scrollY > 1200){
        document.querySelector('#portfolio>h2').classList.add('active');
    }
})




