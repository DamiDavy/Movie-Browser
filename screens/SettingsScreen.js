import React from 'react';
import DetailMovieSearchForm from '../components/DetailMovieSearchForm';

import { fetchMoviesExtended } from '../api';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Movie Search Extended',
  };

  handleSubmit = async (title, type, year) => {
    const results = await fetchMoviesExtended(title, type, year);
    this.props.navigation.navigate('Search', {
      screen: 'MovieList',
      params: { results, title },
    });
  };

  render() {
    return <DetailMovieSearchForm onSubmit={this.handleSubmit} />;
  }
}