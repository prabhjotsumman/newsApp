import React, { useState } from 'react';

import Context from './Context';

const Provider = ({ children }) => {
  const [fontSize, setFontSize] = useState(20);
  const [homePressed, setHomePressed] = useState(0);
  const [refreshPressed, setRefreshPressed] = useState(0);

  const handleFontIncrease = () => {
    if (fontSize < 25) setFontSize(fontSize + 1);
  };

  const handleFontDecrease = () => {
    if (fontSize > 20) setFontSize(fontSize - 1);
  };

  const handleHome = () => setHomePressed(homePressed + 1);

  const handleShare = () => {};

  const handleRefresh = () => setRefreshPressed(refreshPressed + 1);

  return (
    <Context.Provider
      value={{
        onFontIncrease: handleFontIncrease,
        onFontDecrease: handleFontDecrease,
        onHome: handleHome,
        onShare: handleShare,
        onRefresh: handleRefresh,
        fontSize,
        homePressed,
        refreshPressed,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
