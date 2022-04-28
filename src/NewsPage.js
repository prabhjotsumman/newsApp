import React from 'react';

import { Carousel, LoaderScreen } from 'react-native-ui-lib';

import NewsCard from './NewsCard';
import useNews from './useNews';

const NewsPage = () => {
  const { news, fetchMoreNews } = useNews();

  const handlePageChange = (newPageIndex, OldPageIndex) => {
    if (newPageIndex + 5 === news.length) {
      fetchMoreNews();
    }
  };

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

export default NewsPage;
