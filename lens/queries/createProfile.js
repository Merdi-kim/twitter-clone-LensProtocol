import { apolloClient } from '../apollo-client';
import { gql } from '@apollo/client'

const CREATE_PROFILE = `
  mutation($request: CreateProfileRequest!) { 
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
        __typename
    }
 }
`

export const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`

export const AUTHENTICATION = `
  mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
 }
`

export const createProfile = (createProfileRequest) => {
    return apolloClient.mutate({
     mutation: gql(CREATE_PROFILE),
     variables: {
       request: createProfileRequest
     },
   })
 }