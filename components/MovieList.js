import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid/non-secure';
import {fetchMovies} from '../api';
import {styles} from '../styles';

import Row from './Row';

export default class MovieList extends React.Component {
  state = {
    page: 1,
    results: null,
  };

  onPageChange = async (p) => {
    const results = await fetchMovies(this.props.title, p);
    this.setState({page: p, results: results.Search});
  }

  render() {
    const pagesCount = Math.ceil(this.props.pagesCount / 10);
    if (!this.props.movies) return (
    <View style={styles.container}>
      <Text style={styles.pageNumberButton}>Not Found</Text>
    </View>)

    return (
    <ScrollView style={styles.containerList}>
      <Text style={styles.pageNumberButton}>Page {this.state.page} of {pagesCount}</Text>

      <View style={styles.searchResults}>

      {this.state.page === 1 ? 
      this.props.movies.map(movie => 
        <Row {...movie} key={movie.imdbID} onSelectMovie={this.props.onSelectMovie}/>) :
      this.state.results.map(movie => 
        <Row {...movie} key={movie.imdbID} onSelectMovie={this.props.onSelectMovie}/>) }
      </View>
        <View style={styles.pagesRow}>
        {+this.state.page > 1 && <TouchableOpacity style={styles.movieLink} key={"page_" + nanoid()}
            onPress={() => this.onPageChange(this.state.page - 1)}>
            <Text style={styles.pageNumberButton}>Prev</Text>
          </TouchableOpacity>}
        {+this.state.page < pagesCount && <TouchableOpacity style={styles.movieLink} key={"page_" + nanoid()}
              onPress={() => this.onPageChange(+this.state.page + 1)}>
              <Text style={styles.pageNumberButton}>Next</Text>
          </TouchableOpacity>}
        </View>
    </ScrollView>
    );
  }
}