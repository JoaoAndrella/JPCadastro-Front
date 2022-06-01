<template>
<div class="container">
       <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Periodo</th>
                    <th>Professor</th>
                    <th>Opcoes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="curso in colecaoCurso" :key="curso.id">
                    <td>{{curso.nome}}</td>
                    <td>{{curso.colecaoPeriodo}}</td>
                    <td>{{curso.professorNome}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import CursoService from '@/common/services/curso/curso.service'
import EnumatorService from "@/common/services/enumerators/enumerator.service"


export default {
    components: {

    },
    data() {
        return {
            colecaoCurso: 
               [ {
                    id: null,
                    nome: null,
                    periodoName: null,
                    professorNome: null,
                    professorId: null,
            }],
            colecaoPeriodo: [],
        }
    },

    mounted() {
        this.listarCurso();
        this.listarPeriodo();
    },
    methods: {
        listarCurso() {
            CursoService.listar()
            .then(result => {
                this.colecaoCurso = result.data.dados;
                console.log("******", result.data.dados)
            })
        },
        listarPeriodo(){
            EnumatorService.listarPeriodoCurso()
            .then(result => {
                this.colecaoPeriodo = result.data
                console.log("******", result.data)
            })
            .catch( err => {
                console.log(err.response)
            })
        },
     }
}
</script>

<style scoped>

</style>