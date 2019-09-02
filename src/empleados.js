// Frameworks e Icons
const fontawesome= require('./scss/fontawesome/css/all.scss');
const semantic= require('./scss/semantic/semantic.scss');
const semanticjs=require('./js/semantic');

// Control de los Menu del Layout del Admin
import {AdminLayout} from './js/adminLayout.js';
let al= new AdminLayout;
al.master();

// Files de la Pagina
const styles= require('./scss/empleados.scss');


// import Vue from 'vue';

import {crudJS} from './js/crudJS.js';
let cjs= new crudJS;
cjs.acciones("./empleados/destruir/"); // Aqui esta el problema

$('.ui.search.dropdown').dropdown();

$('.ui.form')
  .form({
    fields: {
        nombre: 'empty',
        apaterno: 'empty',
        amaterno: 'empty',
        edad: 'integer',
        sexo: 'empty',
        email:'email',
        cargo:'empty',
        jornada:'empty',
        escolaridad:'empty',
        departamento:'empty',
    }
  })
;

window.abrir= function(permiso=false){
    this.console.log(permiso)
    if(permiso==true){
        $('.agregar').modal('show');
    }
}

// $('.agregar').modal('show');

// window.abrir(true);