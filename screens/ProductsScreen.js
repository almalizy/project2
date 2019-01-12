import React, { Component } from 'react';
import { ScrollView,View } from 'react-native';
import axios from 'axios';
import Details from './Details';
import Header from '../src/components/header';

class ProductsScreen extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://roawd-api.herokuapp.com/')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Details key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View >
                <Header  headerText='API Loading '
                    handleOnPress = {() =>this.props.navigation.openDrawer()}/>
                <ScrollView>
                   {this.renderAlbums()}
                </ScrollView>
      </View>
  
    );
  }
}

export default ProductsScreen;
