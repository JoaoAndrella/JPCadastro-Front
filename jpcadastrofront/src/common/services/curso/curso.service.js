import ApiService from "@/common/api/api.service";

const CursoService = {
    listar() {
        return ApiService.get('Curso/listar');
    },
    adicionar(curso) {
      return ApiService.post('Curso/adicionar', curso);  
    },
}

export default CursoService