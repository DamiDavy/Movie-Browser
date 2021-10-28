import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import MovieList from '../components/MovieList';
import { fetchMovieDetails } from '../api';

export default class MovieListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Movies',
      headerRight: (
        <Button
          title="Search"
          onPress={() => navigation.navigate('MovieSearch')}
          color="#a41034"
        />
      ),
    };
  };

  handleSelectMovie = async (movie) => {
    const results = await fetchMovieDetails(movie.imdbID);
    this.props.navigation.navigate('MovieDetails', { results });
  };

  render() {
    const movies = this.props.route.params;

    return (
      <View style={styles.container}>
        <MovieList
          title={movies.title}
          pagesCount={movies.results.totalResults}
          movies={movies.results.Search}
          onSelectMovie={this.handleSelectMovie}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});