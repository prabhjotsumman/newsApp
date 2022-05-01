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
  const { showActionBar, setActionBar, homePressed, refreshPressed } =
    useBottomActionBar();

  const [news, setNews] = useState([]);
  const [refresh, setRefresh] = useState(false);

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

  const handleCardPress = () => setActionBar(!showActionBar);

  const handleSwipeNext = () => ref?.current?.goToNextPage();

  const handleSwipePrev = () => {
    const currentPage = ref?.current?.state?.currentPage;
    ref.current?.goToPage(currentPage - 1);
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 4 }}>
      <Carousel horizontal={false} showCounter animated ref={ref}>
        {news.length &&
          [...news].map((item, index) => (
            <NewsCard
              key={index}
              description={item?.description}
              title={item?.title}
              imageUrl={item?.imageUrl}
              author={item?.author}
              source={item?.source}
              timestamp={item?.timestamp}
              articleUrl={item?.articleUrl}
              onCardPress={handleCardPress}
              swipeNext={handleSwipeNext}
              swipePrev={handleSwipePrev}
            />
          ))}
      </Carousel>

      <Toast
        visible={refresh}
        position={'top'}
        message={'Fetching latest news...'}
        showLoader
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
