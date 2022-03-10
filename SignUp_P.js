import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Pressable, Linking, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      first_name : '',
      last_name : '',
      email : '',
      password : '',
      confirmpassword : '',
      check_textInputChange : false,
      secureTextEntry : true,
      secureTextEntry_ConfirmPass : true
    };
  } 
  
  RegDataInDB=()=>{
    var First_Name = this.state.first_name;
    var Last_Name = this.state.last_name;
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPassword = this.state.confirmpassword;
   
  
    if ((Email.length==0) || (Password.length==0) || (ConfirmPassword.length==0) || (First_Name.length==0) || (Last_Name.length==0)){
      alert("Required Field Is Missing!");
    }else if(Password !== ConfirmPassword){
      alert("Password does not match!");
    }else if (Password.length<8){
      alert("Minimum 08 characters required!!!");
    }
    

    else{

      var Data ={
        First_Name: First_Name,
        Last_Name: Last_Name,
        Email: Email,
        Password: Password
      };

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

    fetch("http://192.168.1.127/practice_MelDB/kk12_react/SignUp.php",{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Registered successfuly!") {
          this.props.navigation.navigate("HomePage");
        }
      })
      .catch((error)=>{
        console.error("ERROR:" + error);
      })
    }
  }
  

  render() {
    return (
      <View style={styles1.AppStyle}>
              <View style={styles1.TextInView}>
                <TextInput
                placeholder="Enter First Nameee"
                style={styles1.textInput}
                onChangeText={first_name=>this.setState({first_name})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="Enter Last Name"
                style={styles1.textInput}
                onChangeText={last_name=>this.setState({last_name})}
                />
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
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles1.textInput}
                onChangeText={password=>this.setState({password})}
                />
                <TouchableOpacity
                  onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}>     
                    <Feather name={true ? "eye-off" : "eye"}  size={30} />
                </TouchableOpacity> 
              </View>
              
              <View style={styles1.TextInView}>
                <TextInput
                placeholder="Confirm Password"
                style={styles1.textInput}
                onChangeText={confirmpassword=>this.setState({confirmpassword})}
                secureTextEntry={this.state.secureTextEntry_ConfirmPass ? true : false}
                /> 
                <TouchableOpacity
                  onPress={() =>this.setState({secureTextEntry_ConfirmPass: !this.state.secureTextEntry_ConfirmPass})}>     
                    <Feather name={true ? "eye-off" : "eye"}  size={30} />
                </TouchableOpacity>  
              </View> 


              <View style={styles1.ButtonView}>
                  <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.RegDataInDB()}}
                    >
                    <Text style={styles1.text}>Register</Text>
                  </Pressable>
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

    text: {
        color: 'white',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
    },

    textInput:{
        flex: 1,
        marginBottom: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        height: 30,
        fontSize: 20,
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
    },

    AppStyle:{
      flex: 1,
      padding: 20,
      marginTop: 6,
      paddingBottom: 3,
      width: '100%'

    },

    TextInView: {
      flexDirection: 'row',
      marginTop: 6,
      paddingBottom: 3,
      width: '95%',
      padding: 2,
    },

    ButtonView: {
        marginTop: 48,
        alignItems: 'center'
    },
     
    Button: {
       color: 'white',
       backgroundColor: 'green',
       height: 35,
       justifyContent: 'center', 
       alignItems: 'center', 
       width: '80%',
       marginTop: -5
    },
    
})  


