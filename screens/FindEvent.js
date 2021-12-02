import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import { ListItem } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';
import { Header, Icon, Avatar } from 'react-native-elements';


export default class FindEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      event: [],
      userSport: '',
      search: '',
      dataSource: [],
    };
    this.requestRef = null;
    this.sportRef = null;
  }

 

  getEvent = () => {
    this.requestRef = db.collection('events').onSnapshot((snapshot) => {
      var eventList = snapshot.docs.map((document) => document.data());
      this.setState({
        event: eventList,
      });
    });
  };

  componentDidMount = () => {
    this.getEvent();
  };

    SearchFilterFunction(text) {
    const newData = this.state.event.filter((item) => {
      const itemData = item.sport ? item.sport.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, i }) => {
    return (



<TouchableOpacity  style={{marginTop:2}} onPress={() => {
                    this.props.navigation.navigate('EventDetailScreen', {
                      details: item,
                    });
                  }}>
          <View style={{backgroundColor:'rgba(51, 50, 57, 0.5)',     flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    padding:10,
    paddingLeft:20,
    borderRadius:10,
}}>
            <Avatar rounded   size="large" source={{uri: item.image,}} />
           <View style={{flexDirection: 'column', marginLeft:20, alignContent:'center', justifyContent:'space-around'}}>
             <Text style={{color:'white', fontSize:16,}}>{item.eventName}</Text>
             <Text style={{color:'white',fontSize:15,}}>{item.venue}</Text>
              
           </View>
          </View>
         </TouchableOpacity>




    );
  };
  render() {
     const { search } = this.state;
    return (
     <View style={{ flex: 1, flexDirection: 'column' , backgroundColor:'black'}}>
        <ImageBackground
          style={{ flex: 1, resizeMode: 'cover', backgroundColor:'black' }}
          source={{
            uri:
              '',
          }}>
           <View style={{marginTop:0}}>
   <Header backgroundColor="black" 
  leftComponent={<Icon name='arrow-back' color='white' onPress={()=>this.props.navigation.navigate('HomeScreen')}/>  }  
  centerComponent={{ text: 'Find Events' , style: { color: 'white' } }}
/>
  </View>
           
          <View style={{marginTop:-5}}>
             <SearchBar
            round
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            cancelIconColor="#c6c6c6"
         
            searchIcon={{ size: 24 }}
            heightAdjust="0"
            placeholder="Type Sport name"
            onChangeText={(text) => this.SearchFilterFunction(text)}
            value={this.state.search}
          />

            {this.state.event.length === 0 ? (
              <View>
                <Text> List of Requested Items </Text>
              </View>
            ) : (
              <View>
                <ScrollView
                  style={{
                    backgroundColor: 'black',
                 
                  }}>
                  <FlatList
                    style={{
                      margin: 2,
                      borderRadius: 3,
                      padding: 2,
                      color: '#3498DB',
                    }}
                    keyExtractor={this.keyExtractor}
                    data={
                    this.state.search === ''
                      ? this.state.event
                      : this.state.dataSource
                  }
                    renderItem={this.renderItem}
                  />
                </ScrollView>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
