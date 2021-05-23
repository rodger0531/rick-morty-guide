import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GET_CHARACTERS($page: Int, $species: String, $name: String) {
    characters(page: $page, filter: { species: $species, name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        id
        species
        gender
        status
        image
        location {
          name
          dimension
        }
      }
    }
  }
`;

export const GET_EPISODE_DETAIL = gql`
  query ($id: ID!) {
    episode(id: $id) {
      name
      episode
      aired: air_date
      characters {
        name
        image
        status
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query ($page: Int) {
    episodes(page: $page) {
      info {
        next
      }
      results {
        id
        name
        episode
        aired: air_date
      }
    }
  }
`;
