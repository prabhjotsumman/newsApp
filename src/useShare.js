import Share from 'react-native-share';

import { captureScreen } from 'react-native-view-shot';

const useShare = () => {
  const takeScreenShot = () => {
    captureScreen({
      format: 'jpg',
      quality: 1,
    })
      .then(
        //callback function to get the result URL of the screenshot
        uri => {
          const message =
            'Download ShortNews app now to get the latest news.\nhttps://play.google.com/store/apps/details?id=com.shortkhabar';
          let shareImage = {
            title: message,
            message,
            url: uri,
          };
          Share.open(shareImage).catch(err => console.log(err));
        },
        error => console.error('Oops, Something Went Wrong', error),
      )
      .catch(error => console.log(error));
  };

  return {
    takeScreenShot,
  };
};

export default useShare;
