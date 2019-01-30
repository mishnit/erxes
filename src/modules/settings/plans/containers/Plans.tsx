import gql from 'graphql-tag';
import { Spinner } from 'modules/common/components';
import * as React from 'react';
import { compose, graphql } from 'react-apollo';
import { withProps } from '../../../common/utils';
import { Plans } from '../components';
import { queries } from '../graphql';
import { VersionsQueryResponse } from '../types';

type Props = {
  versionsQuery: VersionsQueryResponse;
};

const PlansContainer = (props: Props) => {
  const { versionsQuery } = props;

  if (versionsQuery.loading) {
    return <Spinner objective={true} />;
  }

  const updatedProps = {
    ...props,
    versions: versionsQuery.configsVersions || {}
  };

  return <Plans {...updatedProps} />;
};

export default withProps<{}>(
  compose(
    graphql<{}, VersionsQueryResponse>(gql(queries.configsVersions), {
      name: 'versionsQuery'
    })
  )(PlansContainer)
);
