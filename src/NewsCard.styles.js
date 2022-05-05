import { StyleSheet } from 'react-native';

import { Colors } from 'react-native-ui-lib';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '50%',
    paddingTop: 0,
    paddingBottom: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
    height: '40%',
    width: '100%',
  },
  highlight: {
    fontWeight: '700',
    paddingVertical: 6,
    color: 'black',
  },
  description: {
    marginTop: 8,
    fontWeight: '400',
    textAlign: 'justify',
    color: 'black',
    paddingBottom: 10,
    overflow: 'scroll',
  },
  readMore: {
    width: '100%',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreInfoContainer: {
    flexDirection: 'row',
  },
  shortenByContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  shortenBy: {
    color: Colors.grey30,
    textAlign: 'right',
    flex: 1,
    alignSelf: 'flex-end',
  },
  author: {
    color: Colors.grey10,
    fontWeight: '600',
    flexGrow: 1,
    textAlign: 'right',
    borderWidth: 2,
  },
  timestamp: {
    color: Colors.grey40,
    flexGrow: 1,
    textAlign: 'left',
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  tapToReadMore: {
    color: Colors.white,
    textAlign: 'right',
  },
  source: {
    color: Colors.white,
    fontWeight: '700',
    flex: 1,
  },
});

export default styles;
