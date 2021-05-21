import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_EPISODES = gql`
  {
    episodes {
      results {
        name
        episode
      }
    }
  }
`;
const EpisodePage = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_EPISODES);
  console.log(data);

  return <div>episodes</div>;
};

export default EpisodePage;
