import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PrendreButton from './Components/buttonP';
import RetirerButton from './Components/buttonR';

export default class App extends React.Component {
  constructor(props){
          super(props);
          this.state = {
            activeIndex:0,
            carouselItems: [
            {
              id:1,
              nom:"Hoyt T. Jenkins",
              formation:"Université aix marseille",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/1.png",
            },
            {
              id:2,
              nom:"Stuart Q. Joyne",
              formation:"	Université de Strasbourg",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/2.png",
            },
            {
              id:3,
              nom:"Cailin N. Hoove",
              formation:"Université de Haute Alsace",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/3.png",
            },
            {
              id:4,
              nom:"Sacha R. Little",
              formation:"Université d'Auvergne",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/4.png",
            },
            {
              id:5,
              nom:"Jena Q. Wood",
              formation:"Université de Rennes 1",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/5.png",
            },
            {
              id:6,
              nom:"Casey V. Ayers",
              formation:"Université d'Auvergne",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/6.png",
            },
            {
              id:7,
              nom:"Clinton E. Irwin",
              formation:"Université de Haute Bretagne",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/7.png",
            },
            {
              id:8,
              nom:"Lucas G. Hendricks",
              formation:"Université Rabelais",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/8.png",
            },
            {
              id:9,
              nom:"Desirae A. Marks",
              formation:"Université de Rennes 1",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/9.png",
            },
            {
              id:10,
              nom:"Ryder X. Barnes",
              formation:"Université de Paris III Sorbonne-Nouvelle",
              description:"L'enseignant-chercheur est passionné par un sujet qu'il souhaite développer en se consacrant à la recherche fondamentale ou appliquée.",
              image:"./Data/images/10.png",
            }
          ]
        }
      }

      _renderItem({item,index}){
          return (
            <View style={styles.main_container}>
              <View style={styles.content_container}>
                <View style={styles.header_container}>
                  <Image style={styles.images_container} source={require('./Data/images/1.png')}/>
                  <Text style={styles.nom_container}>{item.nom}</Text>
                </View>
                <View style={styles.formation_container}>
                  <Text style={{color:'gray', fontWeight:'bold',}}>Formation</Text>
                  <Text style={styles.formation_text}>{item.formation}</Text>
                </View>
              <View style={styles.description_container}>
                <Text style={{color:'gray', fontWeight:'bold',}}>Description</Text>
                <Text style={styles.description_text}>{item.description}</Text>
              </View>
              <View>
                <PrendreButton text="Prendre un cours avec ce Teach'r" onPress={()=>{}}/>
              </View>
              <View>
                <RetirerButton text="Retirer ce Teachh'r de mes favoris" onPress={()=>{}}/>
              </View>
              </View>
            </View>

          )
      }

      render() {
          return (
            <SafeAreaView style={styles.areaview_content}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                  <Image source={require("./assets/back.png")}/>
                </TouchableOpacity>
              
              <Text style={styles.header_text}>Teach'rs favoris</Text>
            </View>
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
    flexDirection:'column',
    justifyContent:'space-around'
  },
  main_container:{
    flexDirection:'row',
    elevation:3,
    shadowOffset:{width:0, height:3},
    shadowOpacity:0.5,
    shadowRadius:5,
    borderRadius: 10,
    height: 400,
    padding: 20,
    marginTop:20,
    marginLeft: 25,
  },
  header:{
    height:150,
    justifyContent:'center',
    backgroundColor:'#00bfff',
  },
  header_text:{
    color:`#ffffff`,
    fontWeight:'bold',
    paddingLeft:15,
    fontSize:25,
    textAlign:'left',
  },
  images_container:{
    width:60,
    height:60,
    borderRadius:100,
    margin: 5,
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
    fontWeight:'bold',
  },
  description_container:{
    flex:2,
    justifyContent: 'space-around',
  },
  carousel_content:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
  },
  description_text:{
    fontWeight:'bold',
  },
  nom_container:{
    flex:1,
    height:50,
    fontSize: 17,
    paddingLeft:15,
    paddingTop:10,
  },
})
