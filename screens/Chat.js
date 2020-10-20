// import React,{Component} from "react";
// import { View, SafeAreaView,Text } from "react-native";
// // import { StreamChat } from "stream-chat";
// import {
//   Chat,
//   Channel,
//   MessageList,
//   MessageInput,
// } from "stream-chat-expo";

// const chatClient = new StreamChat('f8wwud5et5jd');
// const userToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic29saXRhcnktYnJlYWQtNCJ9.whVvSiepZQ_1VnCEdQcDwHtTxkYlpeR-G6TOKnPzFj8';

// const user = {
//   id: 'Tarun',
//   name: 'Tarun',
//   image:
//     'https://getstream.io/random_png/?id=solitary-bread-4&amp;name=Solitary+bread',
// };

// chatClient.setUser(user, userToken);

// class ChannelScreen extends React.Component {
//   render() {
//     const channel = chatClient.channel("messaging", "solitary-bread-4");
//     channel.watch();

//     return (
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           <Channel channel={channel}>
//             <View style={{ display: "flex", height: "100%" }}>
//               <MessageList />
//               <MessageInput />
//             </View>
//           </Channel>
//         </Chat>
//       </SafeAreaView>
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Chat</Text>
//       </View>
//     )
//   }
// }

import React,{Component} from 'react';
import DateTime from 'react-datetime';
import {Text,View,TouchableOpacity} from 'react-native';
import db from '../config'
 export default class ChannelScreen extends Component{
     constructor(){
         super();
         this.state={
             Time:"00:00",
             date:"6/10/2020"
         }
     }
     DateandTimeChange = (Time,date)=>{
        this.setState({
            Time:'"'+Time+'"',
            date:'"'+date+'"',
        })
     }
     initiateActivity = async()=>{
      //add a transaction
      db.collection("SelectedDateTime").add({
        SelectedTime:this.state.Time,
        SelectedDate:this.state.date
      })      
    }
     render(){
         return(
           <View>
             <DateTime
             Format={'MM-DD-YY hh:mm:ss'}
             onChange={(date,Time)=>{
                 this.DateandTimeChange(date,Time)
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