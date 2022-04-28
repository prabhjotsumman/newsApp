import React, { useEffect, useState } from 'react';

import inshorts from 'inshorts-api';

var options = {
  lang: 'en',
  category: '',
  numOfResults: 5,
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
  }, []);

  return {
    news,
  };
};

export default useNews;
