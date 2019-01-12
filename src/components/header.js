// Import libraries for making a component
import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
         <TouchableOpacity style={{  minWidth: 60,alignSelf:'flex-end'}}
              onPress={props.handleOnPress} >
            <Entypo name="grid" size={42} color="#e67e22" />
          </TouchableOpacity>
          <Text style={textStyle}>{props.headerText}</Text>
      <View style={{alignSelf:'flex-start',justifyContent:'center'}}>
    
      </View>

    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height:100,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
