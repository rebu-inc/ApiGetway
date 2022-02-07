export const UsuariosTypeDef = `
type Users1 {
    id: Int!
    name: String!
    email: String!
    password: String!
    cellphone: Int!
}
input UserDataCreate {
    name: String!
    email: String!
    password: String!
    cellphone: Int!
}

input UserDataUpdate {
    username: String!
}
type UpdateMessage {
    message: String!
}
input UserDataLogin {
    username: String!
    password: String!
}
type LoginMessage {
    token: String
    message: String!
}
`;


export const UsuariosQueries = `
    getUsuarios: [Users1]!
    getUsuario(id: Int!): Users1!
`;
export const UsuariosMutations = `
    crearUser(user: UserDataCreate!): String!
    actualizarUser(id: Int!, user: UserDataUpdate!): UpdateMessage!
    loginUser(user: UserDataLogin!): LoginMessage!
`;