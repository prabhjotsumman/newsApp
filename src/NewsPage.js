import React from 'react';

import { StyleSheet } from 'react-native';
import { Carousel, LoaderScreen } from 'react-native-ui-lib';

import NewsCard from './components/NewsCard';
import useNews from './useNews';

const NewsPage = () => {
  const { news } = useNews();

  const handlePageChange = (newPageIndex, OldPageIndex) => {};
  // console.log(news);

  return (
    <Carousel horizontal={false} onChangePage={handlePageChange}>
      {news.length ? (
        news.map((item, index) => (
          <NewsCard
            key={index}
            title={item?.title}
            image={item?.imageUri}
            content={item?.content}
            author={item?.author}
            postedAt={item?.postedAt}
            source={item?.sourceUrl}
          />
        ))
      ) : (
        <LoaderScreen message="Loading..." overlay />
      )}
    </Carousel>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: 'white',
    height: '100%',
  },
  index: {
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default NewsPage;
