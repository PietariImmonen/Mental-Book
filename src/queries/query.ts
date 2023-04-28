import { gql } from '@apollo/client'

export const ALL_PERSONS = gql`
query {
  allPersons  {
    name
    phone
    id
  }
}
`


export const CREATE_ACCOUNT = gql`
mutation Mutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      username
      password
    }
  }
`

export const ADD_FEELING = gql `
mutation AddFeeling($name: String!, $positive: Boolean!) {
    addFeeling(name: $name, positive: $positive) {
      name
      positive
    }
  }
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`