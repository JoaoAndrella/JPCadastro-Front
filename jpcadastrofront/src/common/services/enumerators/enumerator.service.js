import ApiService from '@/common/api/api.service';

const EnumeratorService = {
    listarPeriodoCurso() {
        return ApiService.get('Enumerators/listar-periodo-curso');
    }
}

export default EnumeratorService