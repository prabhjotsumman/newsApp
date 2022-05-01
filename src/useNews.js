import firestore from '@react-native-firebase/firestore';

const useNews = () => {
  async function fetchNews() {
    const news = await firestore().collection('news').get();
    const dataStore = news._docs;
    const newsDocs = dataStore.map(dataItem => dataItem._data);
    newsDocs.sort((a, b) => b.timestamp - a.timestamp);
    console.log(' NEWS: ', newsDocs.length);
    return newsDocs;
  }

  return {
    fetchNews,
  };
};

export default useNews;
