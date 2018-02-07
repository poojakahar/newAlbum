import React from 'react';
import { View , Text } from 'react-native';

const CardSection=(props)=>{
  return(
    <View style={styles.containerStyle}>
        {props.children}
    </View>
  );
};

const styles={
    containerStyle:{
        borderWidth: 1,
        marginTop: 2,
        borderRadius: 1,
        borderColor:'#ddd',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
}
export default CardSection;