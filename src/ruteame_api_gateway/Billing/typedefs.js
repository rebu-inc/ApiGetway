export const BillingTypeDef = `
    type Billing {
        id: Int!
        user_id: Int
        status: String
        registDate: String
        line_items: [Line_items]
        payment: [Payment]
    }  

    type Line_items {
        id: Int!
        item_id: Int!
        quantity: Int!
    }
    input Line_itemsInput {
        item_id: Int!
        quantity: Int!
    }

    type Payment {
        id: Int!
        amount: String!
        paymentType: String!
    }

    input PaymentInput {
        amount: String!
        paymentType: String!
    }

    input BillingDataCreate {
        user_id: Int
        status: String
        registDate: String
        line_items: [Line_itemsInput]
        payment: [PaymentInput]
    }
    type BillCreate {
        id: Int
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
    addBilling(billing: BillingDataCreate!): BillCreate

    deleteBilling(id: Int!): DeleteMessage!
`;