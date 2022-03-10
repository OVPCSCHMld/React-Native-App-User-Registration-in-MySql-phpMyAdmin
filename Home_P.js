import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Image, TextInput, Text, Linking} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

//import { Appbar } from 'react-native-paper';

export default class ButtonBasics extends Component {  

  LogoutDB=()=>{

    var Data ={
    
    };
    
    var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    };
            
    fetch("http://192.168.1.127/practice_MelDB/kk12_react/Logout.php",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
    })
    this.props.navigation.navigate("LogInPage");

   }

    render() {  
        return (  
 
            <View style={styles.container}>  

           {/* <Appbar.Header >
                <Appbar.Content title="React Native Tutorial" />
                <Appbar.Action icon="star" onPress={() => {}} />
           </Appbar.Header> */}

                <View style={styles.stretch1}>  
                    <Image style={styles.stretch2} source={require('./images/Voyager.jpg')} />
                </View> 

                <View style={styles.AppBar5}>
                   <Text style={styles.AppBar2}>Proxima b Arrival Registration</Text>
                   <Text style={styles.AppBar2}>Welcome!</Text>
                   <Text style={styles.AppBar4}>My Name is Karl Sagan, on behalf of Alpha Centauri 's people, I would like to welcome all arrivals from federations.
                   </Text>
                </View>
                
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={()=>{this.LogoutDB()}}  
                        title="Log Out"  
                        color="#009933"  
                    />  
                </View> 

                <View style={styles.AppBar1}>
                   <Text style={styles.AppBar2}>The copyright belong to Galaxy Confederations</Text>
                </View>

                <View style={styles.Iconn}>
                   <Icon name="instagram" size={50} color="#bf1313" />
                   <Icon name="youtube" size={50} color="#bf1313" />  
                   <Icon name="twitter" size={50} color="#bf1313" 
                        onPress={() => Linking.openURL('https://www.twitter.com')} 
                   />    
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
        margin: 20  
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
    },
    
    stretch2: {
        width: 400,
        height: 160,
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
	//flex: 1,
    //appen: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
	//textcolor: 'red',
    //alignItems:'center',
        justifyContent:'center',
		backgroundColor: 'pink',
	//color: 'red', 
	//fontSize: 26 ,
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
    //flex: 1,
    margin: 5,
    padding: 1,
    alignItems: 'center',
    //fontWeights: 'bold',
    justifyContent: 'center',
    fontSize: 15,
    // backgroundColor: 'pink',
    width: 300,
    height: 20,
    },
    
    AppBar4: {
    //flex: 1,
    margin: 7,
    padding: 1,
    alignItems: 'center',
    //fontWeights: 'bold',
    justifyContent: 'center',
    textAlign: 'justify',
    fontSize: 15,
    //backgroundColor: 'pink',
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
})  
