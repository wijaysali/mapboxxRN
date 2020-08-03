# mapboxxRN

1. react-native init name-projects
2. npm install @react-native-mapbox-gl/maps --save
3. Now it’s time to start application Coding. Open your project’s main App.js file and import StyleSheet and View component.
   
    import React, {Component} from 'react';
    import {StyleSheet, View} from 'react-native';
    
4. Import MapboxGL component from react-native-mapbox-gl/maps library in your react native project.
    
    import MapboxGL from '@react-native-mapbox-gl/maps';

5. Creating MapboxGL.setAccessToken() object with your Access Token which you have copied from their website.
    
    
    MapboxGL.setAccessToken(
     'mapbox - key - token ,
    );

6. Creating console.disable YellowBox with true value to hide any type of yellow warning messages from app screen.

   console.disableYellowBox = true;

7. Creating our main export default App class extends with Component.
   
    export default class App extends Component {
 
    }
    
8. Creating Constructor in our main Class here we would make a State array and pass Longitude and Latitude here.
   
  constructor(props) {
    super(props);
    this.state = {

      // Here 106.816666 is Longitude.
      // Here -6.200000 is Latitude.
      coordinates: [106.816666, -6.200000],
    };
  }

9. Creating the MapboxGL.MapView, MapboxGL.Camera and MapboxGL.PointAnnotation component in render’s return block.

    MapboxGL.MapView :- is Used to show us the Map on Screen.
    MapboxGL.Camera :- is used to display a fix particular area on Screen with Zoom in Zoom out effect.
    MapboxGL.PointAnnotation :- is used to annotate a particular location on Map Screen with highlighter.
    
    
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


10. Creating Style.
     
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

Screenshot: https://drive.google.com/file/d/1yZO2Rch2K24vl8G-YGcesdOA82Lufkyd/view?usp=sharing
