import React, { useState } from "react";
import { Card } from "antd";
import { COLOR_PALETTE } from "../core/constants";
import EpisodeDetails from "./episode-details";

export const EpisodeItem = ({ episodes }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [episodeID, setEpisodeID] = useState(null);

  const showModal = (id) => {
    setEpisodeID(id);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {episodes.map((episode) => (
        <div
          key={episode.episode}
          className="site-card-border-less-wrapper mb-3 cursor-pointer"
          onClick={() => showModal(episode.id)}
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
      {isModalVisible && (
        <EpisodeDetails
          episodeID={episodeID}
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};
