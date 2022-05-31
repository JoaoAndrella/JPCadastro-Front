<template>
<body>
<div class="divPai">
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Nome:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome do Curso" required v-model="curso.nome">
    </div>
        <p class="warning">*Campos obrigatórios</p>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" @click="adicionar">Cadastrar</button>
    </div>
</div>    
</body>
</template>

<script>

import NotificacaoService from "@/common/services/utils/notificacao.service"
import CursoService from "@/common/services/curso/curso.service"
import EnumatorService from "@/common/services/enumerators/enumerator.service"



export default {
    components: {

    },
    data() {
        return {
            curso: {
                nome: null,
                perido: null,
                professorId: null,
                professorNome: null,
            },
            colecaoPeriodoCurso: []
        }
    },

    mounted(){
        this.listarPeriodo();
    },


    methods: {
        adicionar() {
            CursoService.adicionar(this.curso)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
            })
            .catch(err => {
                if (err.response.status == 400) {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                }
            });
        },
        inicializarDados() {
            this.curso = {
                nome: "",
                periodo: "",
                professorNome: "",
            }
        },

        listarPeriodo(){
            EnumatorService.listarPeriodoCurso()
            .then(result => {
                this.colecaoPeriodoCurso = result.data.dados
            })
            .catch( err => {
                console.log(err.response)
            })
        }
    }
}
</script>

<style scoped>
.mb-3{
    width: 400px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;

}

.d-grid{
    width:110px;
}

.warning{
    text-align: center;
}
</style>
