import React from 'react'

export const EpisodeItem = ({episodes}) => {
  return (
    <div>
      {episodes.map(x=><p>{x.name}</p>)}
    </div>
  )
}
