import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Buttons, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDD4yDdnq0KtTEES-GotfiaDSo36xgoncQ',
      authDomain: 'authentication-e00ce.firebaseapp.com',
      databaseURL: 'https://authentication-e00ce.firebaseio.com',
      projectId: 'authentication-e00ce',
      storageBucket: 'authentication-e00ce.appspot.com',
      messagingSenderId: '657007630072'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
        return (
          <Buttons onPress={() => firebase.auth().signOut()}>Log Out
          </Buttons>
        );
      case false:
          return <LoginForm />
      default:
          return <View style={{ alignSelf: 'center' }}><Spinner size="large" /></View>
    }

  }

  render() {
    return (
    <View>
    <Header headerText="Authentication" />
     {this.renderContent()}
    </View>
    );
  }

}
export default App;
