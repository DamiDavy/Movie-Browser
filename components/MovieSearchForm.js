import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {styles} from '../styles';

export default class MovieSearchForm extends React.Component {
  state = {
    title: '',
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

  validateForm = () => {
    if (this.state.title.length > 1) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.title);
    setTimeout(() => this.setState({ title: '' }), 2000);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.title}
          onChangeText={this.handleTitleChange}
          placeholder="Movie Title"
        />
        <TouchableOpacity onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}>
            <Text style={styles.buttonStyle} >Search</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
