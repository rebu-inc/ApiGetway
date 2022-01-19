export const PQRTypeDef = `
type PQR {
    _id: String!
    message: String!
    response: String!
    id_user: Int!
    id_trip: Int!
    state: String!
}

input PQRCreate {
    message: String!
}

input PQRUpdate {
    response: String!
    state: String!
}
`;


export const PQRQueries = `
    getPQR: [PQR]!
    getPQRbyId(_id: String!): PQR!
`;
export const PQRMutations = `
    crearPQR(pqr: PQRCreate!): Boolean
    actualizarPQR(_id: String!, pqr: PQRUpdate!): Boolean
`;