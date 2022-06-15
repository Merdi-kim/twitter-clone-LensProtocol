import { apolloClient } from "../apollo-client";
import { gql } from "@apollo/client";
import { CREATE_POST } from "../queries/Tweet";

export const createPost = (createPostTypedDataRequest) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_POST),
    variables: {
      request: createPostTypedDataRequest,
    },
  });
};
