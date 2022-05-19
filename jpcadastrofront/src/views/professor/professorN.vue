<template>
<div class="form">
<form>
    <div class="input-container">
        <span>CPF*</span>
        <input type="text" required v-model="professor.cpf" />
    </div>

    <div class="input-container">
        <span>Nome*</span>
        <input type="text" name="nome" required v-model="professor.nome" />
    </div>

    <div class="input-container">
        <span>Telefone*</span>
        <input type="text" name="telefone" required v-model="professor.telefone" />
    </div> 

    <p class="warning">*Campos obrigatórios</p>

    <div class="input-submit-container">
        <button type="button" @click="adicionar">Enviar</button>
    </div>
</form>
</div>
</template>

<script>

import NotificacaoService from "@/common/services/utils/notificacao.service"
import ProfessorService from "@/common/services/professor/professor.service" 

export default {
    components: {

    },
    data() {
        return {
            professor: {
                cpf: null,
                nome: null,
                telefone: null
            }
        }
    },
    methods: {
        adicionar() {
            ProfessorService.adicionar(this.professor)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
                this.inicializarDados();
            })
            .catch(err => {
                if (err.response.status == 400) {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                }
            });
        },
        inicializarDados() {
            this.professor = {
                cpf: "",
                nome: "",
                telefone: ""
            }
        }
    }
}
</script>

<style scoped>
.form{
	padding:10px;
	width: 400px;
	height: calc(100% + 30px);
	float: center;
	top:-15px;
	border:8px solid #999999;
	background-color: white;
}
.form h2{
	font-weight: normal;
	color: #999999;
	font-size: 21px;
}
.input-container{
	margin-top:20px;
}

.input-container span{
	display: inline-block;
	width: 100%;
	color: #BBBBBB;
	font-size: 17px;
}
.input-container input[type=text]{
	margin-top:8px;
	width: 344px;
	height: 55px;
	border:1px solid #ccc;
}
.form input[type=submit]{
	color: white;
	font-size: 25px;
	width: 280px;
	height: 56px;
	display: inline-block;
	background-color: #363A6D;
	border-top:0;
	border-right: 0;
	border-left: 0;
	cursor: pointer;
	border-bottom: 5px solid #4A5097;
}

.form input[type=submit]:hover{
	background-color: #323665;
}
</style>