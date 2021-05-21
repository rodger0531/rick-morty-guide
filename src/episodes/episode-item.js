import React from "react";
import { Card } from "antd";

export const EpisodeItem = ({ episodes }) => {
  return (
    <div>
      {episodes.map((episode) => (
        <div className="site-card-border-less-wrapper mb-3">
          <Card
            type="inner"
            title={`Episode ${episode.episode.slice(4)}`}
            className="text-left text-xl"
          >
            <div className="flex justify-between">
              <p>{episode.name}</p>
              <span>{episode.aired}</span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
