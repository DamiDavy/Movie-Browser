import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../styles';

export default class DetailMovieSearchForm extends React.Component {
  state = {
    title: '',
    year: null,
    type: null,
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.title !== prevState.title) {
      this.validateForm();
    }
  }

  handleTitleChange = title => {
    this.setState({ title });
  };

  handleYearChange = year => {
    this.setState({ year });
  };

  handleTypeChange = type => {
    this.setState({ type });
  };

  validateForm = () => {
    if (this.state.title.length > 1) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.title, this.state.type, this.state.year);
  };
  
  resetInputs = () => {
    this.setState({ title: '', year: '', type: '', isFormValid: false, });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.title}
          onChangeText={this.handleTitleChange}
          placeholder="Title" />
        <TextInput
          style={styles.input}
          value={this.state.type}
          onChangeText={this.handleTypeChange}
          placeholder="Type" />
        <Text style={styles.label}>movie or series or episode</Text>
        <TextInput
          style={styles.input}
          value={this.state.year}
          onChangeText={this.handleYearChange}
          placeholder="Year" />
        <Text><TouchableOpacity onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}>
          <Text style={styles.buttonStyle} >Search</Text>
          </TouchableOpacity>
        {(this.state.title || this.state.type || this.state.year) &&
        <TouchableOpacity onPress={this.resetInputs}>
          <Text style={styles.buttonStyle} >Reset</Text></TouchableOpacity>}</Text>
      </KeyboardAvoidingView>
    );
  }
}

