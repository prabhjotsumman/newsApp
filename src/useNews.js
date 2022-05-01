import firestore from '@react-native-firebase/firestore';

const useNews = () => {
  async function fetchNews() {
    const news = await firestore().collection('news').get();
    const dataStore = news._docs;
    const newsDocs = dataStore.map(dataItem => dataItem._data);
    console.log(' NEWS: ', newsDocs.length, newsDocs);
    return newsDocs;
  }

  return {
    fetchNews,
  };
};

export default useNews;
