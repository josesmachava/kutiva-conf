import React from 'react';
import MapView from 'react-native-maps'


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
  },
    title: 'Map',
  };

  render() {
    return (
      <MapView   style={{flex: 1}}
      region={{
          latitude: -25.971783,
          longitude: 32.588200,
          latitudeDelta: 0.0 ,
          longitudeDelta: 0.001,
      }}
      showsUserLocation={true}
    >
    <MapView.Marker
        coordinate={{latitude:-25.971783,
        longitude:32.588200}}
        title={"USTM Campus"}
        description={"Universidade São Tomás de Moçambique"}
     />
  </MapView>
 

    );
  } 
   
  }

