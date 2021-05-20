import React from "react";
import { useQuery, gql } from "@apollo/client";

const ROCKET_DATA = gql`
  {
    rockets {
      id
      cost: cost_per_launch
      firstFlight: first_flight
    }
  }
`;

const RocketBar = (props) => {
  const { loading, error, data } = useQuery(ROCKET_DATA);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>`Error! ${error.message}`</p>}
      {!(loading || error) &&
        data.rockets.map(({ id, cost, firstFlight }) => (
          <div key={id}>
            <p>
              {id} : {cost}
            </p>
          </div>
        ))}
    </div>
  );
};

RocketBar.propTypes = {};

export default RocketBar;
