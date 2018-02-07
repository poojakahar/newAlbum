import React from 'react';
import {View , Text, Image, Linking } from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail=(props)=>{
    let {thumbnailContainerStyle, thumbnailStyle, titleStyle, titleTextSyle, imageStyle}=styles;

    return(
      <Card>
          <CardSection>
              <View style={thumbnailContainerStyle}>
                  <Image source={{uri: props.albums.thumbnail_image}} style={thumbnailStyle}/>
              </View>
              <View style={titleStyle}>
                  <Text style={titleTextSyle}>{props.albums.title}</Text>
                  <Text>{props.albums.artist}</Text>
              </View>

          </CardSection>
          <CardSection>
              <Image source={{uri: props.albums.image}} style={imageStyle}/>
          </CardSection>

          <CardSection>
              <Button onpress={()=>Linking.openURL(props.albums.url)}/>
          </CardSection>
      </Card>
    );
};

const styles={
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    titleStyle:{
        justifyContent: 'space-around',
        flexDirection: 'column'
    },

    titleTextSyle:{
      fontSize: 20
    },

    thumbnailStyle:{
        height:50,
        width: 50,
    },

    imageStyle:{
        height: 200,
        width: null,
        flex:1
    }
}
export default AlbumDetail;