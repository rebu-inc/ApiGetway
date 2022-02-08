import { generalRequest, getRequest } from '../../utilities';
import { url, port} from './server';

const URL = `http://${url}:${port}`;
const Lista='user';
const auth='auth';
const Login='login';

const resolvers = {
	Query: {
		//CUSTOM ENDPONTS
		getUsuarios:(_)=> //endpoint para traer registros
			generalRequest(`${URL}/${Lista}`, 'GET'),
		getUsuario:(_, { id })=> //endpoint para traer usuario
			generalRequest(`${URL}/${Lista}/${id}`, 'GET'),
	},
	Mutation: {
		//CUSTOM ENDPONTS
		crearUser:(_, {user})=>
			generalRequest(`${URL}/${Lista}`,'POST',user),//endpoint para crear usuario
		actualizarUser:(_,{id, user})=>
				generalRequest(`${URL}/${Lista}/${id}`, 'PATCH', user), //endpoint para editar usuario
		loginUser:(_,{user} )=>{
			console.log(generalRequest(`${URL}/${auth}/${Login}`, 'POST', user, true) )//endpoint para editar usuario
			console.log(getRequest(`${URL}/${auth}/${Login}`))
		}
	}
};

export default resolvers;