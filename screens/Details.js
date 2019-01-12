import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../src/components/Card';
import CardSection from '../src/components/CardSection';
import Button from '../src/components/Button';

import styles from './styles';

const Details = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
 

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now ... اشتري الان
        </Button>
      </CardSection>
    </Card>
  );
};



export default Details;
