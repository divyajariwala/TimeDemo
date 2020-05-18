import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,axios} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datasource:[],
      numberHolder:1,
      // //seconds_Counter: '00',
      //  totalDuration: 0,
      
    };
    
  }

componentDidMount() {

 fetch("https://jsonplaceholder.typicode.com/users")
 .then((response)=>response.json())
 .then((responseJson)=>{
   this.setState({
     datasource:responseJson
   })
   console.log(responseJson.result)
 })
  this.interval = setInterval(
    () => this.setState((prevState)=> ({numberHolder:prevState.numberHolder-1})),
    10000
  );
  this.generateRandomNumber()
//  var that = this;
//     //We are showing the coundown timer for a given expiry date-time
//     //If you are making a quize type app then you need to make a simple timer
//     //which can be done by using the simple like given below
//     //that.setState({ totalDuration: 30 }); //which is 30 sec
//     var date = moment()
//       .utcOffset('+05:30')
//       .format('YYYY-MM-DD hh:mm:ss');
//     //Getting the current date-time with required formate and UTC   
//     var expirydate = '2018-08-23 04:00:45';//You can set your own date-time
//     //Let suppose we have to show the countdown for above date-time 
//     var diffr = moment.duration(moment(expirydate).diff(moment(date)));
//     //difference of the expiry date-time given and current date-time
//     var hours = parseInt(diffr.asHours());
//     var minutes = parseInt(diffr.minutes());
//     var seconds = parseInt(diffr.seconds());
//     var d = hours * 60 * 60 + minutes * 60 + seconds;
//     //converting in seconds
//     that.setState({ totalDuration: d });
//     //Settign up the duration of countdown in seconds to re-render
//    // this.onButtonStart()
}
componentDidUpdate(){
  if(this.state.numberHolder === 1){ 
    clearInterval(this.interval);
  }
}

componentWillUnmount(){
 clearInterval(this.interval);
}

generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random()*20) + 1;
    this.setState({numberHolder:randomNumber })
  }
//   decrementClock = () => {      
//  this.setState((prevstate) => ({ randomNumber: prevstate.randomNumber-1 }));
// }
timerdata = ({item}) => {  
        return (  
            <View style={styles.box}>
            <Text style={styles.text1}>
            Name:{item.name}
            </Text>
            <Text style={styles.text1}>
            Addresss:{item.address.street}
            </Text>
            <Text style={styles.text1}>
            {item.address.suit}
            </Text>
            <Text style={styles.text1}>
            {item.address.city}
            </Text>
             <Text style={styles.text1}>
            {item.address.zipcode}
            </Text>
             <Text style={styles.text1}>
            {item.address.geo.lat}
            </Text>
            <View 
            style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>
            {item.address.geo.lng}
            </Text>
            <Text style={styles.text2}>
            Timeleft:{this.state.numberHolder}
            </Text>
            </View>
             
            </View>  
                
             
        );  
};  
     
  render() {
   
    return (
      <View style={styles.container}>
         <FlatList  
                    data={this.state.datasource}
                    renderItem={this.timerdata}  
                   
                />  
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:
  {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  box:
  {
    height:hp('25%'),
    width: wp('80%') ,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
     marginTop:hp('2%'),
     marginBottom:hp('2%'),
    
  },
  text1:
  {
    fontSize: hp('2.5%') ,
     marginLeft:hp('2%')
  },
   text2:
  {
    fontSize: hp('2.5%') ,
     marginLeft:hp('5%')
  }
})