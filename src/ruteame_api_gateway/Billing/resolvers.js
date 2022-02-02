import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

const URL = `${url}`;
const Listar='listbilling';
const DeleteBill='deletebilling';
const Lista='billing';
const Test='test';

const resolvers = {
	Query: {
		//CUSTOM ENDPONTS
		getListBilling:(_)=> //endpoint para traer registros
			generalRequest(`${URL}/api/${Listar}`, 'GET'),
		getBillingById:(_, { id })=> //endpoint para traer una billing
			generalRequest(`${URL}/api/${Lista}/${id}`, 'GET'),
		getTestBilling:(_)=> //endpoint para traer registros
			generalRequest(`${URL}/api/${Test}`, 'GET'),
	},
	Mutation: {
		//CUSTOM ENDPONTS
		addBilling:(_, {billing})=>
			generalRequest(`${URL}/api/${Lista}`,'POST',billing),//endpoint para crear billing
		deleteBilling:(_,{id, billing})=>
			generalRequest(`${URL}/api/${DeleteBill}/${id}`, 'DELETE'), //endpoint para editar usuario
		//actualizarPQR:(_,{id, pqr})=>
				//generalRequest(`${URL}/api/${Lista}/${id}`, 'PUT', pqr), //endpoint para editar usuario

	}
};

export default resolvers;