import React from 'react';

import { SafeAreaView, ScrollView, Linking } from 'react-native';

import { Text, Card, Button, View } from 'react-native-ui-lib';

import styles from './NewsCard.styles';

const NewsCard = ({ title, content, author, image, source, articleUrl }) => (
  <SafeAreaView style={[styles.container]}>
    <Card flex center>
      <Card.Image
        source={{
          uri: image,
        }}
        style={[styles.image]}
      />

      <ScrollView style={[styles.contentContainer]}>
        <Text style={[styles.highlight]}>{title}</Text>
        <Text style={[styles.description]}>{content}</Text>
      </ScrollView>
      <View style={[styles.linkContainer]} flex>
        {author && (
          <View style={[styles.shortenByContainer]}>
            <Text style={[styles.shortenBy]}>ਲੇਖਕ - </Text>
            <Text style={[styles.author]}>{author}</Text>
          </View>
        )}
        {source && (
          <View style={[styles.shortenByContainer]}>
            <Text style={[styles.shortenBy]}>ਖਬਰ ਸਰੋਤ - </Text>
            <Text style={[styles.author]}>{source}</Text>
          </View>
        )}
        {articleUrl && (
          <Button
            size="small"
            fullWidth={false}
            style={[styles.readMore]}
            label={`ਹੋਰ ਪੜ੍ਹੋ`}
            onPress={() => Linking.openURL(articleUrl)}
          />
        )}
      </View>
    </Card>
  </SafeAreaView>
);

export default NewsCard;
