import ApiService from "@/common/api/api.service";

const ProfessorService = {
    listar() {
        return ApiService.get('Professor/listar');
    },
    adicionar(professor) {
      return ApiService.post('Professor/adicionar', professor);  
    }
}

export default ProfessorService