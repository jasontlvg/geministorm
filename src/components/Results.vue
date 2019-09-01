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

                    <div v-for="survey in resultados[0]" class="main__tabSection__body--surveysSection__surveysContainer__survey">
                        <i class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fa-users"></i>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__description">
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__title">{{survey.encuesta.nombre}}</p>
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__status">Lorem Ipsum 45</p>
                        </div>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__control">
                            <i class="fas fa-info-circle main__tabSection__body--surveysSection__surveysContainer__survey__control__info"></i>
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
        <section class="main__tabSection" id="tab">
            <!-- Estandar -->
            <div class="main__tabSection__titleContainer">
                <h3 class="main__tabSection__titleContainer__title">Informacion de Encuesta</h3>
            </div>

            <!-- Estandar -->
            <div class="main__tabSection__body main__tabSection__body--surveySection">
                <!-- <button @click="nextPage">Aplastar</button> -->

                

                <button class="ui right labeled icon button disabled" id="nextMain" @click="nextPage($event)">
                    <i class="right arrow icon"></i>Siguiente
                </button>
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
                promediosGlobales:[]
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
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                    // console.log(typeof este.resultados)
                    // console.log(este.resultados[2][1])
                    let numEncuestas= este.resultados[0].length;


                    for(let i=1; i<=numEncuestas; i++){
                        // console.log(este.resultados[2][i])
                        let sum=0;
                        let promediosPregunta= este.resultados[2][i];
                        let numPreguntas= promediosPregunta.length;
                        // console.log(promediosPregunta.length)
                        for (const promedioPregunta of promediosPregunta) {
                            sum= sum + promedioPregunta;
                            // console.log(promedioPregunta)
                        }
                        // este.promediosGlobales[]
                        console.log(sum/numPreguntas)

                    }



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
            nextPage: function(event){
                // console.dir(event.srcElement.offsetParent)
                let containerParent= event.srcElement.offsetParent;
                if(containerParent.classList[0] == 'main'){
                    // console.dir(containerParent.children[2].classList.toggle('show'))
                    containerParent.children[2].classList.toggle('show')
                    this.getData()
                }else{
                    let nextPage= containerParent.nextElementSibling;
                    // console.dir(nextPage)
                    if(nextPage != null){
                        console.dir(nextPage.classList.toggle('show'))

                    }else{
                        console.log('Ya no hay otra pagina')
                    }
                }
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