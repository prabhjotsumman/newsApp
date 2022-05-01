import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Linking } from 'react-native';
import { Text, Card, Button, View } from 'react-native-ui-lib';

import useBottomActionBar from './BottomActionBar/useBottomActionBar';
import styles from './NewsCard.styles';

const NewsCard = ({
  title,
  description,
  imageUrl,
  source,
  timestamp,
  articleUrl,
  onCardPress,
  swipeNext,
  swipePrev,
}) => {
  const { fontSize } = useBottomActionBar();

  const [pressIn, setPressIn] = useState(0);

  return (
    <SafeAreaView style={[styles.container]}>
      <Card
        flex
        center
        onPress={onCardPress}
        activeOpacity={1}
        onPressIn={e => setPressIn(e.nativeEvent.pageY)}
        onPressOut={e => {
          const pressOut = e.nativeEvent.pageY;
          if (pressIn - pressOut > 3) swipeNext();
          if (pressOut - pressIn > 3) swipePrev();
        }}>
        <Card.Image
          source={{
            uri: imageUrl,
          }}
          style={[styles.image]}
        />

        <ScrollView style={[styles.contentContainer]} decelerationRate={0.5}>
          <Text style={[styles.highlight, { fontSize }]}>{title}</Text>
          <Text style={[styles.description, { fontSize: fontSize - 4 }]}>
            {description}
          </Text>
        </ScrollView>
        <View style={[styles.linkContainer]} flex>
          {source && (
            <View style={[styles.shortenByContainer]}>
              <Text style={[styles.shortenBy]}>ਸਰੋਤ - </Text>
              <Text style={[styles.author]}>{source}</Text>
            </View>
          )}
          {timestamp && (
            <View style={[styles.shortenByContainer]}>
              <Text style={[styles.timestamp]}>
                {new Date(timestamp).toDateString()}
              </Text>
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
