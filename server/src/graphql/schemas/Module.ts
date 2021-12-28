import {gql} from 'apollo-server-core'

export default gql`
    type Module {
        id: ID!
        title: String!
        length: Int
    }
`;