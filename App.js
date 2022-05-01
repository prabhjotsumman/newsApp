import React from 'react';

import { SafeAreaView } from 'react-native';
import ActionBarProvider from './src/BottomActionBar/Provider';

import NewsPage from './src/NewsPage';

const App = () => {
  return (
    <ActionBarProvider>
      <SafeAreaView>
        <NewsPage />
      </SafeAreaView>
    </ActionBarProvider>
  );
};

export default App;
