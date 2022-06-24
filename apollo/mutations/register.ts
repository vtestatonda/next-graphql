import { gql } from "@apollo/client";

//usamos SET porque estamos agregando elementos
export const SET_USER = gql`
  mutation register($input: UserInput!) {
    register(input: $input) {
      email
      id
      fullName
    }
  }
`;
