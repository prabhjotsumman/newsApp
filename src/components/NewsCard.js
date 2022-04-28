import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Linking } from 'react-native';

import { Text, Card, Button } from 'react-native-ui-lib';

const NewsCard = ({ title, content, image, source }) => {
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
          {source && (
            <Button
              link
              fullWidth={false}
              style={[styles.readMore]}
              label={`Read More`}
              onPress={() => Linking.openURL(source)}
            />
          )}
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
  readMore: {
    justifyContent: 'flex-end',
    fontWeight: '700',
    marginTop: 4,
  },
});

export default NewsCard;
