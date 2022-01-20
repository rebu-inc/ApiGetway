import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

const URL = `http://${url}:${port}`;
const Lista='pqrs';

const resolvers = {
	Query: {
		//CUSTOM ENDPONTS
		getPQR:(_)=> //endpoint para traer registros
			generalRequest(`${URL}/${Lista}`, 'GET'),
		getPQRbyId:(_, { id })=> //endpoint para traer usuario
			generalRequest(`${URL}/${Lista}/${id}`, 'GET'),
	},
	Mutation: {
		//CUSTOM ENDPONTS
		crearPQR:(_, {pqr})=>
			generalRequest(`${URL}/api/${Lista}`,'POST',pqr),//endpoint para crear usuario
		actualizarPQR:(_,{id, pqr})=>
				generalRequest(`${URL}/api/${Lista}/${id}`, 'PUT', pqr), //endpoint para editar usuario

	}
};

export default resolvers;