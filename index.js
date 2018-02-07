/*import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('newAlbum', () => App);*/

import React from 'react';
import { View,Text , AppRegistry } from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/AlbumList';

const app=()=>(
    <View style={{flex: 1}}>
        <Header headerText={'Hello!!'}/>
        <AlbumList/>
    </View>
);

AppRegistry.registerComponent("newAlbum",()=>app);