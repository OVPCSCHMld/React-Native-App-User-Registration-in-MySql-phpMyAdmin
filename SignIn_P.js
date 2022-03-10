import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Pressable, Linking, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      secureTextEntry : true,
    };
  }



//code to send/reciev data with php to backend
  RegDataInDB=()=>{
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!");
    }else{

      var Data ={
        Email: Email,
        Password: Password
      };

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      fetch("http://192.168.1.127/practice_MelDB/kk12_react/LoginP.php",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Logged In Successfully") {
          this.props.navigation.navigate("HomePage");
        }
      })
      .catch((error)=>{console.error("ERROR:" + error);})
    }
  }

//app layout
  render() {
    return (

      <View style={styles1.AppStyle}>

          <View style={styles1.stretch1}>  
               <Image style={styles1.stretch2} source={require('./images/CuriosityRover.jpg')} />
          </View> 

          <View style={styles1.TextInView}>
            <TextInput
                placeholder="Enter Email"
                style={styles1.textInput}
                onChangeText={email=>this.setState({email})}
              />
          </View>

         <View style={styles1.TextInView}>
              <TextInput
                placeholder="Enter Password"
                style={styles1.textInput}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                onChangeText={password=>this.setState({password})}
              />
                <TouchableOpacity
                  onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}>  
                  <Feather name={true ? "eye-off" : "eye"}  size={30} />
                </TouchableOpacity> 
          </View>


                <View style={styles1.ButtonView}>    
                  <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.RegDataInDB()}}
                    >
                    <Text style={styles1.text}>Existing User: LogIn</Text>
                  </Pressable>

                </View> 

                
{/* <view style={styles1.AppBar1}>
<Button   title="New User: SignUp" style={styles1.Button}
                    onPress={()=>{this.props.navigation.navigate("SignUpPage")}} />
                    </view> */}


                <View style={styles1.ButtonView}>
                   <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.props.navigation.navigate("SignUpPage")}}
                    >
                    <Text style={styles1.text}>New User: SignUp</Text>
                  </Pressable>   
               
                </View>

                <View style={styles1.Iconn}>
                   <Icon name="instagram" size={50} color="#bf1313" />
                   <Icon name="youtube" size={50} color="#bf1313" 
                         onPress={() => Linking.openURL('https://www.youtube.com/channel/UCQATtGnC_pLhKucmrSHM2xA')}/>  
                        
                   <Icon name="twitter" size={50} color="#bf1313" 
                         onPress={() => Linking.openURL('https://www.twitter.com')} 
                   />    
                   {/* icons: instagram youtube google  facebook twitter  */}
                </View>
                
      </View>
    );
  }
}


//style section
const styles1 = StyleSheet.create({  
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
    }  ,
    
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

    TextInView: {
      flexDirection: 'row',
      marginTop: 6,
      paddingBottom: 3,
      width: '95%',
      padding: 1,
    },

    text: {
        color: 'white',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
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
      //backgroundColor: 'pink',
      width: 300,
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
      //backgroundColor: 'pink',
      width: 300,
      height: 20,
    },
    
    Iconn: {
      margin: 20,  
      flexDirection: 'row',  
      justifyContent: 'space-between' , 
      height: 4,
    },

    AppStyle:{
      flex: 1,
      padding: 20,
      marginTop: 6,
      paddingBottom: 3,
      width: '100%'
    },



      ButtonView: {
         marginTop: 10,
         alignItems: 'center'
      },
     
      Button: {
       // marginTop: 30,
       // marginBottom: 20,
       borderRadius: 1,
       height: 30,
       backgroundColor: 'green',
       color: 'white',
       justifyContent: 'center', 
       alignItems: 'center',  
       width: '80%',
       //width: 80,
      },
    
      textInput:{
        flex: 1,
		    height: 30,
        marginBottom: 20,
        fontSize: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,

      },

})  
