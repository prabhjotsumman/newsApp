import React from 'react';

import { SafeAreaView, ScrollView, Linking } from 'react-native';

import { Text, Card, Button } from 'react-native-ui-lib';

import styles from './NewsCard.styles';

const NewsCard = ({ title, content, image, source }) => (
  <SafeAreaView style={[styles.container]}>
    <Card flex center>
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

export default NewsCard;
