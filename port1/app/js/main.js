window.addEventListener('DOMContentLoaded',function(){
    const menuToggle = document.querySelector('.toggleBtn');
    const mobileMenu = document.querySelector('.mobile-menu');
    

    menuToggle.addEventListener('click',function(e){
        e.preventDefault();
        if(menuToggle.classList.contains('open')){
            menuToggle.classList.remove('open');
        }else{
            menuToggle.classList.add('open');
        }

        if(menuToggle.classList.contains('open')){
            mobileMenu.classList.remove('hide');
            mobileMenu.classList.add('show');
        }else{
            mobileMenu.classList.remove('show');
            mobileMenu.classList.add('hide');
        }
    })
    
})