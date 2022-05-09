import React, { useState } from 'react';

import Context from './Context';
import useShare from '../useShare';

const Provider = ({ children }) => {
  const [fontSize, setFontSize] = useState(21);
  const [homePressed, setHomePressed] = useState(0);
  const [refreshPressed, setRefreshPressed] = useState(0);
  const [showActionBar, setActionBar] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);

  const { takeScreenShot } = useShare();

  const handleFontIncrease = () => {
    if (fontSize < 23) setFontSize(fontSize + 1);
  };

  const handleFontDecrease = () => {
    if (fontSize > 20) setFontSize(fontSize - 1);
  };

  const handleHome = () => setHomePressed(homePressed + 1);

  const handleShare = () => {
    setActionBar(false);
    takeScreenShot();
  };

  const handleRefresh = () => setRefreshPressed(refreshPressed + 1);

  const handleActionBar = state => setActionBar(state);

  const handleOnContact = () => {
    setShowContactDialog(!showContactDialog);
  };

  return (
    <Context.Provider
      value={{
        onFontIncrease: handleFontIncrease,
        onFontDecrease: handleFontDecrease,
        onHome: handleHome,
        onShare: handleShare,
        onRefresh: handleRefresh,
        onContact: handleOnContact,
        setActionBar: handleActionBar,
        fontSize,
        homePressed,
        refreshPressed,
        showActionBar,
        showContactDialog,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
