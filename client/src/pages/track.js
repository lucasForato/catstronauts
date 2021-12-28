import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetails from '../components/track-detail';

const GET_TRACK = gql`
  query Query($trackId: ID!) {
    track(id: $trackId) {
      title
      author {
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        title
        length
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetails track={data?.track}></TrackDetails>
      </QueryResult>
    </Layout>
  );
};

export default Track;
