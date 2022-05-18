import ApiService from "@/common/api/api.service";

const AlunoService = {
    listar() {
        return ApiService.get('Aluno/listar');
    },
    adicionar(aluno) {
      alert("servico");
      return ApiService.post('Aluno/adicionar', aluno);  
    }
}

export default AlunoService