import React, {Component} from 'react';
 
import {StyleSheet, View} from 'react-native';
 
import MapboxGL from '@react-native-mapbox-gl/maps';
 
MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic3dpamF5YSIsImEiOiJja2N5ZmVrOHgwMXh0MnJtc2F5M2RkbWVzIn0.p5A5cp1-KjYjr5LQ2bbJVQ',
);
 
// console.disableYellowBox = true;
 
export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
 
      // Here -122.4324 is Longitude.
      // Here 37.78825 is Latitude.
      coordinates: [106.816666, -6.200000],
    };
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <View style={styles.SubContainer}>
 
          <MapboxGL.MapView style={styles.Mapbox}>
            <MapboxGL.Camera
              zoomLevel={9}
              centerCoordinate={this.state.coordinates}
            />
 
            <MapboxGL.PointAnnotation coordinate={this.state.coordinates} />
 
          </MapboxGL.MapView>
        
        </View>
      
      </View>
    
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  SubContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  Mapbox: {
    flex: 1,
  },
});