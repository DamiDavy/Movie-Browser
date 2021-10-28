import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, } from 'react-native';

import {styles} from '../styles';

const Row = props => (
  <View style={styles.row}>
    <TouchableOpacity onPress={() => props.onSelectMovie(props)}>
      <Text style={styles.movieLink}>{props.Title} </Text>
    </TouchableOpacity>
    <Text style={styles.movieItem}>{props.Year} ({props.Type})</Text>
  </View>
);

export default Row;