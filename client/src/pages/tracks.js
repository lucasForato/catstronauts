import React from 'react';
import { Layout, QueryResult } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';

export const TRACKS = gql`
  query getTracks {
    getTracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;



const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.getTracksForHome.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
          />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
