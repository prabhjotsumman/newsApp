import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Text from 'react-native-ui-lib/text';
import Card from 'react-native-ui-lib/card';

const NewsCard = ({ title, content, image }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Card flex center onPress={() => console.log('pressed')}>
        <Card.Image
          source={{
            uri: image,
          }}
          style={[styles.image]}
        />

        <ScrollView style={[styles.textContainer]}>
          <Text style={[styles.highlight]}>{title}</Text>
          <Text style={[styles.description]}>{content}</Text>
        </ScrollView>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '50%',
    paddingTop: 0,
    paddingBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  highlight: {
    fontWeight: '700',
    fontSize: 20,
    paddingVertical: 6,
    color: 'black',
  },
  description: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'justify',
    color: 'black',
  },
});

export default NewsCard;
