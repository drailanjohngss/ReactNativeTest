import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Buttons = ({ onPress, children }) => {

  return (
    <TouchableOpacity onPress={onPress}  style={styles.buttonStyle}>
    <Text style={styles.textButtonStyle}>
    {children}
    </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textButtonStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};


export { Buttons };
