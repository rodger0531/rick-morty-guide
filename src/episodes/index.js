import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { EpisodesList } from "./episodes-list";

const GET_EPISODES = gql`
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

const EpisodePage = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_EPISODES, {
    variables: {
      page: 1,
    },
  });

  useEffect(() => {
    if (data?.episodes.info.next) {
      fetchMore({
        variables: { page: data.episodes.info.next },
        updateQuery: (prev, { fetchMoreResult, variables }) => {
          return {
            episodes: {
              info: fetchMoreResult.episodes.info,
              results: [
                ...prev.episodes.results,
                ...fetchMoreResult.episodes.results,
              ],
            },
          };
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="h-full w-full">
      <EpisodesList data={data} loading={loading} />
    </div>
  );
};

export default EpisodePage;