import { useEffect, useState } from 'react';

import inshorts from './inshorts-api';

const useNews = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState(0);

  const categories = [
    'national',
    'business',
    'sports',
    'world',
    'politics',
    'technology',
    'startup',
    'entertainment',
    'miscellaneous',
    'hatke',
    'science',
    'automobile',
  ];

  const fetchMoreNews = () => {
    try {
      const options = {
        lang: 'en',
        category: categories[category],
        numOfResults: 25,
      };

      inshorts.get(options, function (result) {
        setNews([...news, ...result]);
        if (category < categories.length) {
          setCategory(category + 1);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoreNews();
  }, []);

  return {
    news,
    fetchMoreNews,
  };
};

export default useNews;
