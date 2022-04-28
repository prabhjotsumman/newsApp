import React, { useEffect, useState } from 'react';

import inshorts from 'inshorts-api';

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

var options = {
  lang: 'en',
  category: '',
  numOfResults: 25,
};

const useNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      inshorts.get(options, function (result) {
        setNews(result);
      });
    } catch (error) {
      console.log(error);
    }

    return () => {};
  }, []);

  return {
    news,
  };
};

export default useNews;
