import React from 'react';
import { View, Text } from 'react-native';

const Card=(props)=>{
  return(
    <View style={styles.containerStyle}>
        {props.children}
    </View>
  );
};

const styles={
    containerStyle:{
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 1,
        shadowRadius: 1,
        shadowOffset: { width:1, height:2},
        shadowOpacity: 0.2,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    }
}
export default  Card;