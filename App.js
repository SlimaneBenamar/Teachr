import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';
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
            <View style={styles.main_container}>
              <View style={styles.content_container}>
                <View style={styles.header_container}>
                  <Image style={styles.images_container} source={require('./assets/favicon.png')}/>
                  <Text style={styles.nom_container}>{item.nom}</Text>
                </View>
                <View style={styles.formation_container}>
                  <Text style={styles.formation_text}>{item.formation}</Text>
                </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text}>{item.description}</Text>
              </View>
              <View>
                <Button style={styles.btn_prendre} title="Prendre un cours avec ce Teach'r" onPress={() =>{}}/>
              </View>
              <View>
                <Button style={styles.btn_retirer} title="Retirer ce Teach'r de mes favoris" onPress={() =>{}}/>
              </View>
              </View>
            </View>

          )
      }

      render() {
          return (
            <SafeAreaView style={styles.areaview_content}>
              <View style={styles.carousel_content}>
                  <Carousel
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

const styles = StyleSheet.create({
  areaview_content:{
    flex: 1,
    paddingTop: 50,
  },
  main_container:{
    flexDirection:'row',
    elevation:5,
    shadowColor:'#000',
    shadowOffset:{width:0, height:3},
    shadowOpacity:0.5,
    shadowRadius:5,
    backgroundColor:'#eaeaea',
    borderRadius: 10,
    height: 400,
    padding: 20,
    marginLeft: 25
  },
  images_container:{
    borderRadius:100,
    margin: 5,
    backgroundColor: 'gray',
  },
  content_container:{
    flex:1,
  },
  header_container:{
    flex:2,
    flexDirection:'row',
  },
  formation_container:{
    flex:1,
  },
  formation_text:{
    borderWidth:3,
    borderColor:'black',
  },
  description_container:{
    flex:7,
    borderWidth:3,
    borderColor:'black'
  },
  carousel_content:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
  },
  nom_container:{
    flex:1,
    height:50,
    fontSize: 30,
    borderWidth:3,
    borderColor:'black'
  },
  btn_prendre:{

  },
  btn_retirer:{

  },
})
