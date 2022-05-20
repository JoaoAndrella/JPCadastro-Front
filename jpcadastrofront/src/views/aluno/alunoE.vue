<template>
<body>
    <div class="form">
<form>
    <div class="input-container">
        <span>CPF*</span>
        <input type="text" required v-model="aluno.cpf" />
    </div>

    <div class="input-container">
        <span>Nome*</span>
        <input type="text" name="nome" required v-model="aluno.nome" />
    </div>

    <div class="input-container">
        <span>Telefone*</span>
        <input type="text" name="telefone" required v-model="aluno.telefone" />
    </div> 

    <p class="warning">*Campos obrigatórios</p>

    <div class="input-submit-container">
        <button type="button" @click="adicionar">Enviar</button>
    </div>
</form>
    </div>
</body>
</template>

<script>

import NotificacaoService from "@/common/services/utils/notificacao.service"
import AlunoService from "@/common/services/aluno/aluno.service"

export default {
    components: {

    },
    data() {
        return {
            aluno: {
                cpf: null,
                nome: null,
                telefone: null
            }
        }
    },
    mounted() {
        this.obterAlunoPorId();
    },

    methods: {
        obterAlunoPorId() {
            AlunoService.obter(this.$route.params.id)
            .then(result => {
                this.aluno = result.data.dados;
            })
            .catch(err => {
                console.log(err.response);
            })
        },

        atualizar() {
            AlunoService.atualizar(this.aluno)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
                this.inicializarDados();
                this.$router.push({name: "AlunoListagem"})
            })
            .catch(err => {
                if (err.response.status == 400) {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                }
            }); 
        },
        inicializarDados() {
            this.aluno = {
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
	top:-15px;
    float: center;
	position: center;
	border:8px solid rgba(115, 139, 217, 0.5);
	background-color: #223161;
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
	color: white;
	font-size: 20px;
}

.input-container input[type=text]{
	margin-top:8px;
	width: 344px;
	height: 55px;
	border:2px solid #60636b;
    font-size:25px;
    background-color: #f0f0f5 ;
}

.form input[type=submit]{
	color: #60636b;
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

.input-submit-container button[type=button]{
	text-align: center;
    margin-top:4px;
	width: 344px;
	height: 55px;
    font-size:30px;
	cursor: pointer;
	display: inline-block;
    color: white;
    background-color: #6b768f;
}

.input-submit-container button[type=button]:hover{
	background-color: #849edb;
	border-bottom: 5px solid #4A5097;

}

.warning{
    color: white;
    font-size: 20px;
}

</style>