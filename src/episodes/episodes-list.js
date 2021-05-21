import React from "react";
import "./episode-list.css";
import { Tabs } from "antd";
import { EpisodeItem } from "./episode-item";
const { TabPane } = Tabs;

export const EpisodesList = ({ data, loading }) => {
  const seasonsList = data?.episodes.results.reduce((t, x) => {
    const season = x.episode.slice(0, 3);
    if (t[season]) {
      t[season].push(x);
    } else {
      t[season] = [x];
    }

    return t;
  }, {});
  return (
    <div className="card-container m-10">
      <Tabs type="card">
        {seasonsList &&
          Object.entries(seasonsList).map(([season, episodes], idx) => (
            <TabPane tab={season} key={idx + 1} className="overflow-auto">
              <EpisodeItem episodes={episodes} />
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
};
