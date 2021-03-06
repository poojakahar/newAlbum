import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button=({ onpress })=>{
    var {buttonStyle, textStyle}=styles;

    return(
        <TouchableOpacity style={buttonStyle} onPress={onpress}>
            <Text style={textStyle}> Buy Now!! </Text>
        </TouchableOpacity>
    );
};

const styles={
  buttonStyle:{
      borderColor: '#007aff',
      flex: 1,
      margin: 5,
      alignSelf: 'stretch',
      borderWidth: 1,
      borderRadius: 3
  },

  textStyle:{
      alignSelf: 'center',
      color: '#007aff',
      margin: 5,
      fontSize: 18,
      fontWeight: '700'
  }
};
export default Button;