import { useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';

const useNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const news = await firestore().collection('news').get();
      const dataStore = news._docs;
      const newsDocs = dataStore.map(dataItem => dataItem._data);
      console.log(' NEWS: ', newsDocs);
      setNews(newsDocs);
    }
    fetchNews();
  }, []);

  return {
    news,
  };
};

export default useNews;
