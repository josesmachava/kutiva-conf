import React from 'react';
import { ScrollView, StyleSheet, FlatList, ActivityIndicator, Text, View } from 'react-native';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    title: 'Agenda',
  };
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  };

  componentDidMount(){
    return fetch('http://kutiva.herokuapp.com/api/talk/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  };


  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.title}>{item.title} </Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  title: {
    fontSize:14,
  }
});
