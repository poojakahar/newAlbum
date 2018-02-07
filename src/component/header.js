import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const header=(props)=> {
    const {textStyle,viewStyles}=styles;

    return(
        <View style={viewStyles}>
            <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );

};

const styles={
    textStyle:{
        fontSize: 50,
        color: 'red'
    },
    viewStyles:{
        backgroundColor: '#ffddee',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 100,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height:2},
        elevation: 2,
        position: 'relative'
    }
}
export default header;