'use strict';
export class AdminLayout{

    master(){
        const trigger= document.getElementById('trigger');
        const section= document.getElementById('section');
        const burguer= document.getElementById('burguer');
        const large=960;
        const aside= document.getElementById('aside');
        const overlay= document.getElementById('aside-overlay');
        
        const tf= function(){
        
            // Controla el comportamiento del menu, no toca NADA que sea o este dentro de el ul
            aside.classList.toggle('morfosis');
            if(innerWidth < large){
                overlay.classList.toggle('active');
            }else{
                aside.classList.toggle('width')
                section.classList.toggle('width')
            }
            // section.classList.toggle('morfosis');
            // console.log(innerWidth)
        
            // Controla todo dentro del ul y el ul mismo
        
            // console.dir(icons[0].classList.toggle('showText'))
        };
        
        trigger.addEventListener('click', tf);
        burguer.addEventListener('click', tf);
        
        overlay.addEventListener('click', function(){
            aside.classList.toggle('morfosis');
            overlay.classList.toggle('active');
        });
        
        addEventListener('resize', function(){
            if(this.innerWidth >= large){
                overlay.classList.remove('active')
                aside.classList.remove('morfosis')
            }
        });
    }

}