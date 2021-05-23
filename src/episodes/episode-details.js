import React from "react";
import { useQuery } from "@apollo/client";
import { Modal, Spin, Skeleton, Avatar, Typography, Popover } from "antd";
import { COLOR_PALETTE } from "../core/constants";
import { GET_EPISODE_DETAIL } from "../graphql/queries";

const EpisodeDetails = ({ episodeID, isModalVisible, handleCancel }) => {
  const { loading, data } = useQuery(GET_EPISODE_DETAIL, {
    variables: {
      id: episodeID,
    },
  });

  return (
    <div>
      <Modal
        title={data && `${data?.episode.episode}: ${data?.episode.name}`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="w-3/4"
      >
        <Spin spinning={loading}>
          {data ? (
            <div className="flex flex-col items-center">
              <Typography.Title
                level={3}
                className=""
                style={{ color: COLOR_PALETTE.PINK }}
              >
                Cast
              </Typography.Title>
              {/* <div className="grid grid-flow-row grid-cols-6 gap-5 w-full items-center justify-center"> */}
              <div className="w-full items-center justify-center">
                {data.episode.characters.map((character) => (
                  <Popover
                    content={
                      <div className="text-base text-rm-brown">
                        <p>
                          <b>{character.name}</b>
                        </p>
                        <p>Status: {character.status}</p>
                      </div>
                    }
                    color={COLOR_PALETTE.YELLOW}
                    className="text-lg"
                  >
                    <Avatar className="m-3" src={character.image} size={96} />
                  </Popover>
                ))}
              </div>
            </div>
          ) : (
            <Skeleton active />
          )}
        </Spin>
      </Modal>
    </div>
  );
};

export default EpisodeDetails;
