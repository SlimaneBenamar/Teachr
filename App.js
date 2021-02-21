import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
export default class App extends React.Component {
  constructor(props){
          super(props);
          this.state = {
            activeIndex:0,
            carouselItems: [
            {
                nom:"Teach'r 1",
                formation: "univ",
                description: "Description 1",
            },
            {
                nom:"Teach'r 2",
                formation: "univ",
                description: "Description 2",
            },

          ]
        }
      }

      _renderItem({item,index}){
          return (
            <View style={{
                backgroundColor:'#eaeaea',
                borderwidth: 4,
                borderRadius: 8,
                height: 450,
                padding: 50,
                marginLeft: 25,
                //marginRight: 25,
               }}>
              <Text style={{fontSize: 30}}>{item.nom}</Text>
              <Text>{item.formation}</Text>
              <Text>{item.description}</Text>
            </View>

          )
      }

      render() {
          return (
            <SafeAreaView style={{flex: 1, paddingTop: 50, }}>
              <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', alignItems:'center' }}>
                  <Carousel
                    layout={"tinder"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
              </View>
            </SafeAreaView>
          );
      }
  }
