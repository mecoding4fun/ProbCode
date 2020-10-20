import React,{Component} from 'react';
import DateTime from 'react-datetime';
import {Text,View,TouchableOpacity} from 'react-native';
import db from '../config'
export default class ChannelScreen extends Component{
     constructor(){
         super();
         this.state={
             Time:"00:00",
             Date:"6/10/2020"
         }
     }
     DateandTimeChange = (Time,Date)=>{
        this.setState({
            Time:'"'+Time+'"',
            Date:'"'+Date+'"',
        })
     }
     initiateActivity = async()=>{
      db.collection("SelectedDateTime").add({
        SelectedTime:this.state.Time,
      })      
    }
     render(){
         return(
           <View>
             <DateTime
             Format={'MM-DD-YY hh:mm:ss'}
             renderDay={
             this.renderDay
             }
             renderMonth={
              this.renderMonth
            }
            renderYear={
              this.renderYear
            }
             onChange={(Date,Time)=>{
                 this.DateandTimeChange(Date,Time)
             }}
             isCalenderOpen = {true}
             isClockOpen = {true}
             />
             <TouchableOpacity
             onPress={() => {
              this.initiateActivity()
            }}><Text>Confirm</Text></TouchableOpacity>
            </View>
         )
     }
 }