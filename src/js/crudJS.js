import Vue from 'vue';
export class crudJS{
    constructor() {

    }

    acciones(link){
        let app= new Vue({
            el: '#section',
            data: {
        
            },
            methods: {
                saludo: function(l){
                    console.log('Hola'+l);
                },
                eliminar: function(id){
                    $('.mini.modal')
                    .modal({onApprove : function(){
                        // console.log('Hola'+l)
                        window.location.href = link+id;  
                    }})
                    .modal('show');
                    // console.log()
                },
                agregar: function(){
                    $('.agregar').modal('show');

                    // $('.agregar')
                    // .modal({onDeny : function(){
                    //     console.log('apretado')
                    //     $('form').form('clear')
                    //     // console.log(document.getElementsByClassName("errorValidacion")[0])

                    //     let elementosDeError= document.getElementsByClassName("errorValidacion");

                    //     for (const iterator of elementosDeError) {
                    //         iterator.style.display='none';
                    //         console.log('desapareciendo')
                    //     }

                    // }})
                    // .modal('show');
                    
                    // $('.agregar')
                    // .modal({onDeny : function(){
                    //     console.log('apretado')
                    //     $('form').form('clear')
                    //     // console.log(document.getElementsByClassName("errorValidacion")[0])

                        // let elementosDeError= document.getElementsByClassName("errorValidacion");

                        // for (const iterator of elementosDeError) {
                        //     iterator.style.display='none';
                        //     console.log('desapareciendo')
                        // }

                    // }})
                    // .modal('show');
                },
                cancelar: function(){
                    $('form').form('clear')
                    let elementosDeError= document.getElementsByClassName("errorValidacion");

                    for (const iterator of elementosDeError) {
                        iterator.style.display='none';
                        // console.log('desapareciendo')
                    }
                    // console.log('cerrando')
                }
            },
        })
    }
}