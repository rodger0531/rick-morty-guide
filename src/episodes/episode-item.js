import React from "react";
import { Card } from "antd";
import { COLOR_PALETTE } from "../core/constants";

export const EpisodeItem = ({ episodes }) => {
  return (
    <div>
      {episodes.map((episode) => (
        <div
          key={episode.episode}
          className="site-card-border-less-wrapper mb-3"
        >
          <Card
            type="inner"
            title={`Episode ${episode.episode.slice(4)}`}
            className="text-left text-xl"
          >
            <div className="flex justify-between">
              <p style={{ color: COLOR_PALETTE.PINK }}>{episode.name}</p>
              <p className="text-sm opacity-30 align-baseline flex items-end">
                Aired: {episode.aired}
              </p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
