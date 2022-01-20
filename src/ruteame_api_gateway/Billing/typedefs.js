export const BillingTypeDef = `
type Billing {
    id: Int!
    firstName: String!
    lastName: String!
}  

type Line_items {
id: Int!
item_id: Int!
quantity: Int!
}

type Payment {
id: Int!
amount: String!
paymentType: String!
}

input BillingDataCreate {
    firstName: String!
    lastName: String!
}
type CreateBilling {
    ID: Int!
    message: String!
}

type DeleteMessage {
    message: String!
}
type TestMessage {
    message: String!
}
`;


export const BillingQueries = `
    getListBilling: [Billing]!
    getBillingById(id: Int!): Billing!
    getTestBilling: TestMessage!
`;
export const BillingMutations = `
    addBilling(billing: BillingDataCreate!): CreateBilling
    deleteBilling(id: Int!): DeleteMessage!
`;