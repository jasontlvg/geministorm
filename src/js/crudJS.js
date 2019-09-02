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
                    $('.agregar')
                    .modal({onDeny : function(){
                        $('form').form('clear')

                        // console.log(document.getElementsByClassName("selectToClear")[4])
                    }})
                    .modal('show');
                    // console.log('Machinima')
                }
            },
        })
    }
}