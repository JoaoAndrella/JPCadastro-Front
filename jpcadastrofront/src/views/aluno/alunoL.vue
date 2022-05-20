<template>
<div class="container">
       <table class="table table-dark">
            <thead>
                <tr>
                    <th>Cpf</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Opçoes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="colecaoAluno in colecaoAluno" :key="colecaoAluno.id">
                    <td>{{colecaoAluno.cpf}}</td>
                    <td>{{colecaoAluno.nome}}</td>
                    <td>{{colecaoAluno.telefone}}</td>
                    <td><button @click="editarAluno" type="button">Editar</button> <button type="button">Remover</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import AlunoService from "@/common/services/aluno/aluno.service"

export default {
    components: {

    },
    data() {
        return {
            colecaoAluno: [
                {
                    id: null,
                    cpf: null,
                    nome: null,
                    telefone: null
                }],
            key: null,
        }
    },

    mounted() {
        this.listarAluno();
    },

    methods: {
        listarAluno() {
            AlunoService.listar()
            .then(result => {
                this.colecaoAluno = result.data.dados;
            })
        },
        editarAluno(e) {
            console.log("******** key:", key.id)
            let id = key.id
            this.$router.push({name: "AlunoEditar", params: {id}});
        }
    }
}
</script>

<style scoped>

</style>