import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
       playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drip%20Sound-22095-Free-Loops.com.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'purple',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:100, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Algerian',
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'thick'}}>Press Me</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton1 extends React.Component {
    playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'yellow',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:1, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Calibri Math',
         fontStyle:'Italic',
        fontSize:25,
        fontWeight:'thick'}}>Press Me</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton2 extends React.Component {
      playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drip%20Sound-22095-Free-Loops.com.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'green',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:1, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Arial Black',
        fontSize:20,
        fontWeight:'thick'}}>Press Me</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton3 extends React.Component {
       playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'https://soundbible.com/1739-Flute-Tone-.html'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'blue',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:1, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Cursive',
         fontStyle:'Italic',
        fontSize:25,
        fontWeight:'thick'}}>Press Me</Text>
      </TouchableOpacity>
         );
       }
}

class StopSound extends React.Component{
  stopSound = () => {
     Audio.setIsEnabledAsync(false)
   }
    
  render(){
      return(
         <TouchableOpacity style={{backgroundColor:'red',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:240, 
        height:70, 
        marginTop:1, 
        marginLeft:90}}>
       
          <Text style={{
           fontSize:20 
          }}
          >Stop Music</Text>   
         </TouchableOpacity>
      );
  }
}

export default class App extends React.Component {
 render() {
   return(
 
     <View style={styles.mainContainer}>
        <Text style={styles.text}>DJ WhiteHat</Text>
        <SoundButton/>
        <SoundButton1/>
        <SoundButton2/>
        <SoundButton3/>
        <StopSound/>
     </View>
   );
   
 }
}

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
  backgroundColor: 'white',
  },

  text:{
    backgroundColor:'blue',
    color:'white',
    fontWeight:'bold',
    marginBottom:-100,
    padding:20,
    marginTop:30,
    fontSize:20,
    textAlign:'center',
    
  }
})
