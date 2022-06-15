import { apolloClient } from "../apollo-client";
import { gql } from "@apollo/client";
import {
  CREATE_PROFILE,
  GET_PROFILES,
  SEARCH_FOR_PROFILE,
  RECOMMENDED_PROFILES,
  GET_CHALLENGE,
  AUTHENTICATION,
} from "../queries/Profile";

export const createProfile = (createProfileRequest) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_PROFILE),
    variables: {
      request: createProfileRequest,
    },
  });
};

export const getProfiles = (address) => {
  const profileQuery = GET_PROFILES(address);
  return apolloClient.query({
    query: gql(profileQuery),
  });
};

export const searchForProfile = (searchInput) => {
  const searchQuery = SEARCH_FOR_PROFILE(searchInput);
  return apolloClient.query({
    query: gql(searchQuery),
  });
};

export const recommendedProfiles = () => {
  return apolloClient.query({
    query: gql(RECOMMENDED_PROFILES),
  });
};

export const generateChallenge = (address) => {
  return apolloClient.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request: {
        address,
      },
    },
  });
};

export const authenticate = (address, signature) => {
  return apolloClient.mutate({
    mutation: gql(AUTHENTICATION),
    variables: {
      request: {
        address,
        signature,
      },
    },
  });
};
