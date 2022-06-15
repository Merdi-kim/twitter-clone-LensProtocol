import { apolloClient } from "../apollo-client";
import { gql } from "@apollo/client";
import { EXPLORE_PUBLICATIONS } from "../queries/Tweets";

export const explorePublications = (explorePublicationQueryRequest) => {
  return apolloClient.query({
    query: gql(EXPLORE_PUBLICATIONS),
    variables: {
      request: explorePublicationQueryRequest,
    },
  });
};
