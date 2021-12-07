import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

//Juan Guillermo (busqueda)_______________
import {
	rutasQueries,
	rutasTypeDef
} from './ruteame_api_gateway/busquedas/typeDefs';

//Julio (informe)_______________
	import{
		informeQueries,
		informeTypeDef
	} from './ruteame_api_gateway/informe/typeDefs';

//Diana (acciones usuario)_______________
import{
	accionesUsuarioTypeDef,
	accionesUsuarioQueries,
	accionesUsuarioMutations
} from './ruteame_api_gateway/acciones_usuario/typeDefs';	

//Juan Camilo (usuario)____________________
import {
	UsuariosQueries,
	UsuariosTypeDef,
	UsuariosMutations
} from './ruteame_api_gateway/Usuarios/typeDefs';


//Juan Sebastian (PQR)__________________________________
import {
	PQRTypeDef,
	PQRQueries,
	PQRMutations
} from './ruteame_api_gateway/PQR/typedefs';


import PQRResolvers from './ruteame_api_gateway/PQR/resolvers';
import UsuariosResolvers from './ruteame_api_gateway/Usuarios/resolvers';
import busquedasResolvers from './ruteame_api_gateway/busquedas/resolvers';
import informeResolvers from './ruteame_api_gateway/informe/resolvers';
import accionesUsuarioResolvers from './ruteame_api_gateway/acciones_usuario/resolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		PQRTypeDef,
		UsuariosTypeDef,
		rutasTypeDef,
		informeTypeDef,
		accionesUsuarioTypeDef
	],
	[
		PQRQueries,
		UsuariosQueries,
		rutasQueries,
		informeQueries,
		accionesUsuarioQueries
	],
	[
		PQRMutations,
		UsuariosMutations,
		accionesUsuarioMutations
	]
);


// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		PQRResolvers,
		UsuariosResolvers,
		busquedasResolvers,
		informeResolvers,
		accionesUsuarioResolvers
	)
});
