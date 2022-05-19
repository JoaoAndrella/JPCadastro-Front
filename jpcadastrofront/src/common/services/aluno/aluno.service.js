import ApiService from "@/common/api/api.service";

const AlunoService = {
    listar() {
        return ApiService.get('Aluno/listar');
    },
    adicionar(aluno) {
      return ApiService.post('Aluno/adicionar', aluno);  
    }
}

export default AlunoService