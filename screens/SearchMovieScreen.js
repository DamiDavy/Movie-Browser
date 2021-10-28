import React from 'react';
import MovieSearchForm from '../components/MovieSearchForm';

import { fetchMovies } from '../api';

export default class SearchMovieScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Movie Search',
  };

  handleSubmit = async (title) => {
    const results = await fetchMovies(title);
    this.props.navigation.navigate('MovieList', { results, title });
  };

  render() {
    return <MovieSearchForm onSubmit={this.handleSubmit} />;
  }
}