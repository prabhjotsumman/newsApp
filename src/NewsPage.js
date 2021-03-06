import React, { useEffect, useRef, useState } from 'react';

import { SafeAreaView } from 'react-native';
import { Carousel, Toast, ToastPresets } from 'react-native-ui-lib';

import BottomActionBar from './BottomActionBar/BottomActionBar';
import useBottomActionBar from './BottomActionBar/useBottomActionBar';

import refreshIcon from './assets/images/refresh-arrow.png';
import NewsCard from './NewsCard';
import ContactPage from './ContactPage/ContactPage';
import useNews from './useNews';

const NewsPage = () => {
  const ref = useRef();

  const { fetchNews } = useNews();
  const {
    showActionBar,
    setActionBar,
    homePressed,
    refreshPressed,
    showContactDialog,
    onContact,
  } = useBottomActionBar();

  const [news, setNews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState(false);

  async function getNews() {
    const news = await fetchNews();
    setNews([...news]);
    setTimeout(() => setRefresh(false), 800);
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
    ref.current?.goToPage(0);
  }, [refreshPressed]);

  const handleCardPress = () => setActionBar(!showActionBar);

  const handleSwipeNext = () => {
    const currentPage = ref?.current?.state?.currentPage;
    ref?.current?.goToNextPage();
    if (currentPage >= news?.length - 1) {
      setMessage(true);
    }
  };

  const handleSwipePrev = () => {
    const currentPage = ref?.current?.state?.currentPage;
    ref.current?.goToPage(currentPage - 1);
    if (currentPage < 1) {
      setRefresh(true);
      getNews();
      ref.current?.goToPage(0);
    }
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 4 }}>
      <ContactPage show={showContactDialog} onDismiss={onContact} />
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
        message={'??????????????? ?????????????????? ?????????????????? ?????????????????? ?????? ??????????????? ??????...'}
        showLoader
        centerMessage
        icon={refreshIcon}
        autoDismiss={2000}
        onDismiss={() => setRefresh(false)}
      />

      <Toast
        visible={message}
        position={'top'}
        message={'????????? ?????? ?????? ????????? ????????? ??????...'}
        preset={ToastPresets.SUCCESS}
        centerMessage
        autoDismiss={2000}
        onDismiss={() => setMessage(false)}
      />

      {showActionBar && <BottomActionBar />}
    </SafeAreaView>
  );
};

export default NewsPage;
