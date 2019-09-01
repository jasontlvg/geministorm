<template>
    <main class="main">

        <div class="main__titleContainer">
            <h3 class="main__titleContainer__title">Seleccione un Departamento</h3>
        </div>

        <div class="main__body">
            <ul class="main__body__listContainer">
                <li v-for="dep in departamentos" class="main__body__listContainer__li" @click="selectedDep(dep, $event)">{{dep.nombre}}</li>
            </ul>
            <!-- <button >Aplastar</button> -->
            <button class="ui right labeled icon button disabled main__button" id="nextMain" @click="nextPage">
                <i class="right arrow icon"></i>Siguiente
            </button>
        </div>


        <!-- tabSection -->
        <!-- Quita el show -->
        <section class="main__tabSection surveys" id="tab">
            <!-- Estandar -->
            <div class="main__tabSection__titleContainer">
                <h3 class="main__tabSection__titleContainer__title">Seleccione una Encuesta</h3>
            </div>

            <!-- Estandar -->
            <div class="main__tabSection__body main__tabSection__body--surveysSection">

                <div class="main__tabSection__body--surveysSection__surveysContainer">

                    <!-- <div v-for="survey in resultados[0]" class="main__tabSection__body--surveysSection__surveysContainer__survey">
                        <p>{{survey.encuesta.nombre}}</p>
                    </div> -->


                    <!-- <div class="main__tabSection__body--surveysSection__surveysContainer__survey">
                        <i class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fa-users"></i>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__description">
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__title">Personas</p>
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__status">Lorem Ipsum 45</p>
                        </div>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__control">
                            <i class="fas fa-info-circle main__tabSection__body--surveysSection__surveysContainer__survey__control__info"></i>
                        </div>
                    </div> -->

                    <div v-for="survey in resultados[0]" class="main__tabSection__body--surveysSection__surveysContainer__survey" v-bind:class="{alert:promediosGlobales[survey.encuesta_id]<3}">
                        
                        <!-- <p>{{promediosGlobales[survey.encuesta_id]}}</p> -->
                        <i class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fa-users"></i>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__description">
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__title">{{survey.encuesta.nombre}}</p>
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__status">La Media es de: {{promediosGlobales[survey.encuesta_id]}}</p>
                        </div>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__control">
                            <i class="fas fa-info-circle main__tabSection__body--surveysSection__surveysContainer__survey__control__info" @click="nextPage($event,survey.encuesta_id)"></i>
                        </div>
                    </div>

                    
                </div>

                <!-- <p>HOla</p> -->





                <!-- <button class="ui right labeled icon button" id="nextMain" @click="nextPage($event)">
                    <i class="right arrow icon"></i>Siguiente
                </button> -->
            </div>
        </section>


        <!-- tabSection -->
        <!-- antes tenia el id='tab' -->
        <section class="main__tabSection" id="tabSurvey">
            <!-- Estandar -->
            <i class="fas fa-backspace main__tabSection__back" @click="previousPage('last')"></i>
            <div class="main__tabSection__titleContainer">
                <h3 class="main__tabSection__titleContainer__title">Informacion de Encuesta</h3>
            </div>

            <!-- Estandar -->
            <div class="main__tabSection__body main__tabSection__body--surveySection">
                <!-- <p v-for="x in preguntasEncuestaSeleccionado">{{x.pregunta}}</p> -->
                <!-- <div v-for="(x,index) in preguntasEncuestaSeleccionado">
                    <span>{{x.pregunta}}</span>
                    <p>{{respuestasEncuestaSeleccionada[index]}}</p>
                </div> -->

                <!-- <table class="ui celled table main__tabSection__body main__tabSection__body--surveySection__table" style="max-width:900px"> -->
                <table class="ui celled table main__tabSection__body main__tabSection__body--surveySection__table">
                    <thead>
                        <tr>
                            <th>Pregunta</th>
                            <th>Media</th>
                            <th>Ver Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(x,index) in preguntasEncuestaSeleccionado">
                            <td data-label="Name">{{(index+1)+ '. ' +x.pregunta}}</td>
                            <!-- Ignorar el de abajo -->
                            <!-- <td data-label="Age">{{promediosGlobales[encuestaIdSeleccionado]}}</td> -->
                            
                            <!-- <td data-label="Age">{{promedioDePreguntasDeEncuestaSeleccionada[index]}}</td> -->
                            <td data-label="Age" style="text-align:center">
                                <a class="item">
                                    <div class="ui horizontal label" :class="{green: promedioDePreguntasDeEncuestaSeleccionada[index]>3, red:promedioDePreguntasDeEncuestaSeleccionada[index]<=3}" >{{promedioDePreguntasDeEncuestaSeleccionada[index]}}</div>
                                    <!-- Kumquats -->
                                </a>
                                <!-- {{promedioDePreguntasDeEncuestaSeleccionada[index]}} -->

                            </td>

                            <!-- <td data-label="Job">{{respuestasEncuestaSeleccionada[index]}}</td> -->
                            <!-- <td data-label="Job" @click="modal(respuestasEncuestaSeleccionada[index])">{{respuestasEncuestaSeleccionada[index]}}</td> -->
                            <td data-label="Job" @click="modal(respuestasEncuestaSeleccionada[index])"><i class="fas fa-info-circle"></i></td>
                        </tr>
                    </tbody>
                </table>


                <div class="ui modal">
                <i class="close icon"></i>
                <div class="header">
                    Profile Picture
                </div>
                <div class="image content">
                    <div class="description">
                    <div class="ui header">We've auto-chosen a profile image for you.</div>
                    <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                    </div>
                </div>
                <div class="actions">
                    <div class="ui black deny button">
                    Nope
                    </div>
                    <div class="ui positive right labeled icon button">
                    Yep, that's me
                    <i class="checkmark icon"></i>
                    </div>
                </div>
                </div>

            </div>

        </section>
        
    </main>
</template>

<script>
    // import { EventBus } from './../results';
    export default{
        data:function(){
            return{
                departamentos: [],
                departamentoSeleccionado: {},
                resultados: {},
                promediosGlobales:[],
                encuestaIdSeleccionado: -1,
                preguntasEncuestaSeleccionado:[],
                respuestasEncuestaSeleccionada:[],
                promedioDePreguntasDeEncuestaSeleccionada:[]
            }
        },
        created: function(){
            let este=this;
            axios.get(raiz+'api/results')
            .then( ({data}) => {
                // console.log(JSON.parse(JSON.stringify(data)))
                este.departamentos= data;
                // console.log(este.departamentos)
                // this.departamentos= JSON.parse(JSON.stringify(data));
                // console.log(this.departamentos[0]);
                
            })
            .catch((error)=>{
                console.log(error.response.data)
            });
        }
        ,
        methods: {
            saludo(){
                console.log('Exito')
                // this.departamentoSeleccionado= dep;
            },
            getData:function(){
                let este= this;
                axios.get(raiz + `api/getdata/${este.departamentoSeleccionado.id}`)
                .then(function (response) {
                    // handle success
                    // console.log(response.data);
                    este.resultados= response.data;

                    let encuestasDisponibles= este.resultados[0];
                    for (const iterator of encuestasDisponibles) {
                        // console.log(iterator.encuesta_id)
                        let i=iterator.encuesta_id;
                        let sum=0;
                        let promediosPregunta= este.resultados[2][i];
                        let numPreguntas= promediosPregunta.length;
                        // console.log(promediosPregunta.length)
                        for (const promedioPregunta of promediosPregunta) {
                            sum= sum + promedioPregunta; // Solito este, ya sirve
                            // sum= sum + promedioPregunta; // Solito este, ya sirve
                            // console.log(promedioPregunta)
                        }
                        let x= sum/numPreguntas; // decimal
                        este.promediosGlobales[i]= x.toFixed(4); // No borrar, si quieres que en los promedios globales, se agregen por id de encuesta y no seguidas, descomenta esto, y comenta el de abajo, decimal
                        // este.promediosGlobales[i]= sum/numPreguntas; // No borrar, si quieres que en los promedios globales, se agregen por id de encuesta y no seguidas, descomenta esto, y comenta el de abajo
                        // este.promediosGlobales.push(sum/numPreguntas);
                        // console.log(sum/numPreguntas)
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                    // console.log(typeof este.resultados)
                    // console.log(este.resultados[2][1])

                    // console.log(este.resultados[0])




                    // let encuestasDisponibles= este.resultados[0];
                    // for (const iterator of encuestasDisponibles) {
                    //     // console.log(iterator.encuesta_id)
                    //     let i=iterator.encuesta_id;
                    //     let sum=0;
                    //     let promediosPregunta= este.resultados[2][i];
                    //     let numPreguntas= promediosPregunta.length;
                    //     // console.log(promediosPregunta.length)
                    //     for (const promedioPregunta of promediosPregunta) {
                    //         sum= sum + promedioPregunta;
                    //         // console.log(promedioPregunta)
                    //     }
                    //     este.promediosGlobales[i]= sum/numPreguntas; // No borrar, si quieres que en los promedios globales, se agregen por id de encuesta y no seguidas, descomenta esto, y comenta el de abajo
                    //     // este.promediosGlobales.push(sum/numPreguntas);
                    //     console.log(sum/numPreguntas)
                    // }




                    // Este de abajo, listo
                    // let numEncuestas= este.resultados[0].length;

                    // // console.log('Numero de encuestas'+ numEncuestas)
                    // for(let i=1; i<=numEncuestas; i++){
                    //     // console.log(este.resultados[2][i])
                    //     let sum=0;
                    //     let promediosPregunta= este.resultados[2][i];
                    //     let numPreguntas= promediosPregunta.length;
                    //     // console.log(promediosPregunta.length)
                    //     for (const promedioPregunta of promediosPregunta) {
                    //         sum= sum + promedioPregunta;
                    //         // console.log(promedioPregunta)
                    //     }
                    //     // console.log('Agregare al array promediosGlobales index #:'+i)
                    //     este.promediosGlobales[i]= sum/numPreguntas;
                    //     console.log(sum/numPreguntas)
                    // }



                });
            },
            selectedDep: function(dep,event){
                this.departamentoSeleccionado= dep;
                // console.dir(this.departamentoSeleccionado)
                let listOfDepartments=document.getElementsByClassName("main__body__listContainer__li");
                for(let dep of listOfDepartments){
                    dep.classList.remove('selected')
                }
                // console.dir()
                event.target.classList.toggle('selected')
                // event.path[0].classList.toggle('selected')
                document.getElementById('nextMain').classList.remove('disabled')
            },
            nextPage: function(event, encuestaId){
                // console.dir(event.srcElement.offsetParent)
                let este=this;
                let containerParent= event.srcElement.offsetParent;
                if(containerParent.classList[0] == 'main'){
                    // console.dir(containerParent.children[2].classList.toggle('show'))
                    containerParent.children[2].classList.toggle('show')
                    this.getData()
                }else{
                    let nextPage= containerParent.nextElementSibling;
                    // console.dir(nextPage)
                    if(nextPage != null){
                        nextPage.classList.toggle('show')
                        // console.dir(nextPage.classList.toggle('show'))
                        // console.log(encuestaId)
                        if(encuestaId != undefined){
                            // console.log(encuestaId)
                            this.encuestaIdSeleccionado= encuestaId;
                            
                            axios.get(raiz + `api/results/encuesta/preguntas/${encuestaId}`)
                            .then(function (response) {
                                // handle success
                                // console.log(response.data);
                                este.preguntasEncuestaSeleccionado= response.data;

                                este.respuestasEncuestaSeleccionada= este.resultados[1][encuestaId]
                                console.log(este.resultados[2][encuestaId])
                                este.promedioDePreguntasDeEncuestaSeleccionada= este.resultados[2][encuestaId];

                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .finally(function () {
                                // always executed
                            });

                            // console.log(this.resultados[1][encuestaId])
                        }

                        
                    }else{
                        console.log('Ya no hay otra pagina')
                    }
                }
            },
            previousPage: function(v){
                if(v == 'last'){
                    let section= document.getElementById('tabSurvey');
                    section.classList.toggle('show')
                    
                }
            },
            modal: function(arr){
                console.log(arr)
                $('.ui.modal')
                .modal('show')
                ;
            }
        }
    }


</script>

<style lang="scss">
    @import '../scss/partials/variables.scss';
    // $masterColor: orangered;
    $masterTime:0.5s;
    .section{
        .main{
            position:relative;
            justify-content: center;
            align-content: flex-start;
            overflow-x: hidden;
            overflow-y: auto;
            @media screen and (min-width: $large) {
                overflow-y: auto; // antes hidden
                // overflow-y: hidden;
            }

            // background: blue;
            flex-wrap: wrap;
            flex-direction: column;
            &__titleContainer{
                width: 100%;
                display: flex;
                justify-content: center;
                padding: 3em;
                &__title{
                    font-size: 2em

                }
            }

            &__body{
                width: 100%;
                flex: 1 1 auto;
                // background: tomato;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                &__listContainer{ // ul
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    width: 20em;
                    max-height: 50em;
                    overflow: auto;
                    // background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
                    margin-bottom: 4em;
                    background-color: white;
                    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

                    &__li{
                        // background: blue;
                        font-size: 1em;
                        padding: 1.5em;
                        cursor: pointer;
                        color: black;
                        background: none;
                        transition: all $masterTime;
                        &:hover{
                            background: $masterColor;
                            color: white;
                        }

                        &.selected{
                            background-color: $masterColor;
                            color: white;
                        }
                    }
                }
            }
        }
        .header{
            // background-color: orangered;
            display: none;
        }
    }

    @import '../scss/partials/tabSection.scss';
    
</style>