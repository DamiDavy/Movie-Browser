import React from 'react';
import { Text, ScrollView, Image, } from 'react-native';

import { styles } from '../styles';

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: this.props.route.params.results.Title,
  })

  render() {
    const information = this.props.route.params.results;
    console.log(information)
    return (
      <ScrollView style={styles.containerList}>
        <Text style={styles.movieTitle}>{information.Title}</Text>
        <Text style={styles.movieItem}>{information.Type}</Text>
        <Text style={styles.movieItem}>{information.Year} ({information.Released}) </Text>
        <Text style={styles.movieItemEnd}>{information.Genre}</Text>
        <Text style={styles.movieItem}>IMDB Rating: {information.imdbRating}</Text>
        <Text style={styles.movieItem}>Director: {information.Director}</Text>
        <Text style={styles.movieItem}>Actors: {information.Actors}</Text>
        <Text style={styles.movieItemEnd}>{information.Runtime}</Text>
        <Text style={styles.movieItemEnd}>{information.Plot}</Text>
        <Text style={styles.movieItem}>Language: {information.Language} Country: {information.Country} </Text>
        <Text style={styles.movieItemEnd}>Awards: {information.Awards}</Text>
        <Image style={styles.stretch} source={{ uri: information.Poster, }} />
      </ScrollView>
    );
  }
}