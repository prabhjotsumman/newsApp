import React from 'react';
import { ActionBar, Colors } from 'react-native-ui-lib';

// import homeIcon from '../assets/images/home.png';
import increaseFontSizeIcon from '../assets/images/resize-font.png';
import decreaseFontSizeIcon from '../assets/images/resize-font-decrease.png';
import shareIcon from '../assets/images/share.png';
import refreshIcon from '../assets/images/refresh-arrow.png';
import contactUsIcon from '../assets/images/contact_us.png';
import useBottomActionBar from './useBottomActionBar';

const BottomActionBar = () => {
  const { onFontDecrease, onFontIncrease, onContact, onShare, onRefresh } =
    useBottomActionBar();

  const actionBarIcons = [
    {
      iconSource: decreaseFontSizeIcon,
      // label: 'Decrease',
      onPress: onFontDecrease,
    },
    {
      iconSource: increaseFontSizeIcon,
      // label: 'Increase',
      onPress: onFontIncrease,
    },
    {
      iconSource: shareIcon,
      // label: 'Share',
      onPress: onShare,
    },
    {
      iconSource: refreshIcon,
      // label: 'Refresh',
      onPress: onRefresh,
    },
    {
      iconSource: contactUsIcon,
      // label: '',
      onPress: onContact,
    },
  ];

  return (
    <ActionBar
      centered
      actions={actionBarIcons.map(icon => ({
        iconStyle: {
          width: 20,
          height: 20,
          marginLeft: 10,
        },
        //   Align label and icon Top-Bottom
        style: {
          display: 'flex',
          flexDirection: 'column',
          fontSize: 14,
        },
        //   labelStyle: { fontSize: 12, marginTop: 2 },
        ...icon,
      }))}
      style={{
        borderTopColor: Colors.grey60,
        borderTopWidth: 1,
        paddingTop: 6,
        paddingHorizontal: 14,
      }}
      useSafeArea
    />
  );
};

export default BottomActionBar;
