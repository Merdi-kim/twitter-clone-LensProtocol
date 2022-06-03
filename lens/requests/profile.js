import { apolloClient } from '../apollo-client'
import { gql } from '@apollo/client'
import { CREATE_PROFILE, GET_DEFAULT_PROFILE , GET_CHALLENGE, AUTHENTICATION } from '../queries/Profile'

export const createProfile = (createProfileRequest) => {
    return apolloClient.mutate({
     mutation: gql(CREATE_PROFILE),
     variables: {
       request: createProfileRequest
     },
   })
}

export const getDefaultProfile = (address) => {
  return apolloClient.query({
   query: gql(GET_DEFAULT_PROFILE),
   variables: {
     request: {
      address
     }
   },
 })
}

export const generateChallenge = (address) => {
  return apolloClient.query({
   query: gql(GET_CHALLENGE),
   variables: {
     request: {
        address,
     },
   },
 })
}

export const authenticate = (address, signature) => {
  return apolloClient.mutate({
   mutation: gql(AUTHENTICATION),
   variables: {
     request: {
       address,
       signature,
     },
   },
 })
}