import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Buttons, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password} = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLogInSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLogInSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    });
    }

    onLoginFail() {
      this.setState({
        error: 'Authentication Failed',
        loading: false
      });
    }

    onLogInSuccess() {
      this.setState({
      error: '',
      loading: false,
      email: '',
      password: ''
    });
    }

    renderButton() {
      if (this.state.loading) {
        return <Spinner size="small" />
      }

      return (
        <Buttons onPress={this.onButtonPress.bind(this)}>
          Login
        </Buttons>
      );
    }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder="handsome@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>


        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
         </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
