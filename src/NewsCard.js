import React from 'react';
import { SafeAreaView, ScrollView, Linking } from 'react-native';
import { Text, Card, Button, View } from 'react-native-ui-lib';

import useBottomActionBar from './BottomActionBar/useBottomActionBar';
import styles from './NewsCard.styles';

const NewsCard = ({
  title,
  content,
  author,
  image,
  source,
  articleUrl,
  onCardPress,
}) => {
  const { fontSize } = useBottomActionBar();

  return (
    <SafeAreaView style={[styles.container]}>
      <Card flex center onPress={onCardPress} activeOpacity={1}>
        <Card.Image
          source={{
            uri: image,
          }}
          style={[styles.image]}
        />

        <ScrollView style={[styles.contentContainer]}>
          <Text style={[styles.highlight, { fontSize }]}>{title}</Text>
          <Text style={[styles.description, { fontSize: fontSize - 4 }]}>
            {content}
          </Text>
        </ScrollView>
        <View style={[styles.linkContainer]} flex>
          {author && author !== 'Null' && (
            <View style={[styles.shortenByContainer]}>
              <Text style={[styles.shortenBy]}>ਲੇਖਕ - </Text>
              <Text style={[styles.author]}>{author}</Text>
            </View>
          )}
          {source && source !== 'Null' && (
            <View style={[styles.shortenByContainer]}>
              <Text style={[styles.shortenBy]}>ਸਰੋਤ - </Text>
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
};

export default NewsCard;
