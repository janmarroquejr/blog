import { gql } from "apollo-boost";

const getPostsQuery = gql`
  {
    getPosts {
      id
      title
      category
      body
      createdAt
      updatedAt
    }
  }
`;

export { getPostsQuery };
