import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Image, Pressable, TextInput, Text, Linking} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
//import { Appbar } from 'react-native-paper';

export default class ButtonBasics extends Component {  

  LogoutDB=()=>{

    var Data ={
    
    };
    
    var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    };
            

    axios.post('http://192.168.1.117/practice_MelDB/kk12_react/Logout.php', JSON.stringify(Data), headers)  
    this.props.navigation.navigate("LogInPage");

   }

    render() {  
        return (  
 
            <View style={styles.container}>  



                <View style={styles.stretch1}>  
                    <Image style={styles.stretch2} source={require('./images/Voyager.jpg')} />
                </View> 

                <View style={styles.AppBar5}>
                   <Text style={styles.AppBar2}>Welcome on board!</Text>
                   <Text style={styles.AppBar4}>My Name is Karl Sagan, we are on course to "Universe xy12z Galaxy IC 1101 Star Pollux Plannet Kepler-37b.</Text>
                   <Text style={styles.AppBar4}>25th-December-5340.</Text>
                </View>
                

                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={()=>{this.LogoutDB()}}  
                        title="Log Out"  
                        color="#009933"  
                    />  
                </View> 



                <View style={styles.Iconn}>
                   <Icon name="instagram" size={50} color="#bf1313" />
                   <Icon name="youtube" size={50} color="#bf1313" />  
                   <Icon name="twitter" size={50} color="#bf1313" 
                        onPress={() => Linking.openURL('https://www.twitter.com')} 
                   />    
                </View>

                <View style={styles.AppBar1}>
                   <Text style={styles.AppBar2}>The copyright belong to Andromeda Galaxy Confederations</Text>
                </View>

            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    
    buttonContainer: {  
        margin: 20,
        width: 300,
        // alignItems: 'left',
    },  
    
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    },
    
    stretch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 700,
        height: 200,
        margin: 10,
        resizeMode: 'stretch',
    },
    stretch1: {
        
        justifyContent: 'center',
        alignItems: 'center',
        height: "60%",
    },
    
    stretch2: {
        // display: 'flex',
        width: "40%",
        height: "60%",
        margin: 10,
        resizeMode: 'stretch',
    },

    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },

    AppBar1: {

        justifyContent:'center',
		backgroundColor: 'pink',

    },

    AppBar2: {
    //flex: 1,
    margin: 5,
    padding: 1,
    alignItems: 'center',
    //fontWeights: 'bold',
    justifyContent: 'center',
    fontSize: 15,
    // backgroundColor: 'pink',
    width: 330,
    height: 20,
    },

    AppBar3: {
    margin: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    width: 300,
    height: 20,
    },
    
    AppBar4: {
    margin: 7,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    fontSize: 15,
    width: 330,
    height: 60,
    },
    
    AppBar5: {
        justifyContent:'center',
		backgroundColor: 'yellow',
    },
    
    Iconn: {
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between' , 
      },

      text: {
        color: 'white',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
    },

    ButtonView: {
        marginTop: 10,
        alignItems: 'center'
     },
    
     Button: {
      borderRadius: 1,
      height: 30,
      backgroundColor: 'green',
      color: 'white',
      justifyContent: 'center', 
      alignItems: 'center',  
      width: '80%',
     },

     ButtonView1: {
        marginTop: 130,
        marginTop: 10,
        alignItems: 'right',
     },
    
     Button1: {
      marginTop: 130,
      marginBottom: 20,
      borderRadius: 1,
      height: 30,
      backgroundColor: 'gray',
      color: 'white',
      justifyContent: 'left', 
      alignItems: 'right',  
      width: '80%',
      width: 280,
     },
    
})  
