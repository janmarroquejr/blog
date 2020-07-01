import { gql } from "apollo-boost";

const createPostMutation = gql`
  mutation($title: String!, $category: String!, $body: String!) {
    createPost(title: $title, category: $category, body: $body) {
      id
      title
      category
      body
    }
  }
`;

export { createPostMutation };
