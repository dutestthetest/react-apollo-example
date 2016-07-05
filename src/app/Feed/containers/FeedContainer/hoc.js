/* @flow */

import { compose, shouldUpdateComponent } from 'recompose'
import { connect } from 'react-apollo'
import { withRouter } from 'react-router'
import gql from 'graphql-tag';

const mapQueriesToProps = () => ({
  data: {
    query: gql`
      query getWines($limit: Int!) {
        wines(limit: $limit) {
          id,
          name
        }
      }
    `,
    variables: {
      limit: 2,
    },
  },
})

export default (container: React$Element): React$Element => (
  compose(
    connect({
      mapQueriesToProps,
    }),
    withRouter
  )(container)
)
