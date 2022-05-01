import React, { useEffect, useRef, useState } from 'react';

import { SafeAreaView } from 'react-native';
import { Carousel, Toast } from 'react-native-ui-lib';
import BottomActionBar from './BottomActionBar/BottomActionBar';
import useBottomActionBar from './BottomActionBar/useBottomActionBar';

import refreshIcon from './assets/images/refresh-arrow.png';
import NewsCard from './NewsCard';
import useNews from './useNews';

const NewsPage = () => {
  const ref = useRef();

  const { fetchNews } = useNews();
  const { homePressed, refreshPressed } = useBottomActionBar();

  const [news, setNews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [showActionBar, setActionBar] = useState(false);

  const handleCardPress = () => setActionBar(!showActionBar);

  async function getNews() {
    const news = await fetchNews();
    setNews([...news]);
    setRefresh(false);
  }

  useEffect(() => {
    if (homePressed > 0) ref.current?.goToPage(0);
  }, [homePressed]);

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    setRefresh(true);
    getNews();
  }, [refreshPressed]);

  return (
    <SafeAreaView style={{ marginHorizontal: 4 }}>
      <Carousel horizontal={false} showCounter animated ref={ref}>
        {news.length &&
          [...news].map((item, index) => (
            <NewsCard
              key={index}
              title={item?.title}
              image={item?.imageUrl}
              content={item?.description}
              author={item?.author}
              postedAt={item?.postedAt}
              source={item?.source}
              articleUrl={item?.articleUrl}
              onCardPress={handleCardPress}
            />
          ))}
      </Carousel>

      <Toast
        visible={refresh}
        position={'top'}
        message={'Fetching latest news...'}
        showLoader
        swipeable
        centerMessage
        icon={refreshIcon}
        autoDismiss={2000}
        onDismiss={() => setRefresh(false)}
      />

      {showActionBar && <BottomActionBar />}
    </SafeAreaView>
  );
};

export default NewsPage;
