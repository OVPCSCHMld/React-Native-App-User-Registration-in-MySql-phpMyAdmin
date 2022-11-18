import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Pressable, Linking, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
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

      var Data1 ={
        Email: Email,
        Password: Password
      };

      var headers = {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
      };

      axios.post('http://192.168.1.117/practice_MelDB/kk12_react/LoginP.php', JSON.stringify(Data1), headers)  
      .then((response) => {
        console.log(response);
        console.log(response.data[0].Message)
          if (response.data[0].Message == "Logged In Successfully") {
          this.props.navigation.navigate("HomePage");
           }
           if (response.data[0].Message == "Password is wrong") {
            console.log('password does not match');
             }
      });


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


                <View style={styles1.ButtonView1}>    
                  <Pressable
                    style={styles1.Button1} 
                    onPress={()=>{this.RegDataInDB()}}
                    >
                    <Text style={styles1.text}>Existing User: LogIn</Text>
                  </Pressable>

                </View> 

                
                <View style={styles1.ButtonView1}>
                   <Pressable
                    style={styles1.Button1} 
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
        height: "90%",
    },
    
    stretch2: {
        // display: 'flex',
        width: "40%",
        height: "90%",
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
      justifyContent:'center',
		  backgroundColor: 'pink',
    },

    AppBar2: {
      margin: 5,
      padding: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15,
      width: 300,
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
       borderRadius: 1,
       height: 30,
       backgroundColor: 'green',
       color: 'white',
       justifyContent: 'center', 
       alignItems: 'center',  
       width: '80%',
      },

      
      ButtonView1: {
        marginTop: 10,
        alignItems: 'center',
     },
    
     Button1: {
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 1,
      height: 30,
      backgroundColor: 'green',
      color: 'white',
      justifyContent: 'left', 
      alignItems: 'center',  
      width: '80%',
      width: 280,
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
