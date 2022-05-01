import React from 'react';

import { Carousel, LoaderScreen } from 'react-native-ui-lib';

import NewsCard from './NewsCard';
import useNews from './useNews';

const NewsPage = () => {
  const { news } = useNews();

  return (
    <Carousel horizontal={false}>
      {news.length ? (
        news.map((item, index) => (
          <NewsCard
            key={index}
            title={item?.title}
            image={item?.imageUrl}
            content={item?.description}
            author={item?.author}
            postedAt={item?.postedAt}
            source={item?.source}
            articleUrl={item?.articleUrl}
          />
        ))
      ) : (
        <LoaderScreen message="Loading..." overlay />
      )}
    </Carousel>
  );
};

export default NewsPage;
