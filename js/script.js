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


function Link1(){
    const Link1 = window.open('https://floatlyb.github.io/The_venti/', '_blank');
}

function Link2(){
    const Link2 = window.open('https://floatlyb.github.io/sweetpotato_game/', '_blank');
}

function Link3(){
    const Link3 = window.open('http://yubin.dothome.co.kr/', '_blank')
}

function Link4(){
    const Link4 = window.open('https://floatlyb.github.io/car/', '_blank')
}