import React,{Component} from 'react';
import DatePicker from 'react-native-datePicker';
import {Text,TouchableOpacity,View} from 'react-native';

export default class MyDatePicker extends Component{
    constructor(){
        super();
        this.state={
            date:'20/10/20'
        }
    }
    render(){
        return(
            <View></View>
        )
    }
}