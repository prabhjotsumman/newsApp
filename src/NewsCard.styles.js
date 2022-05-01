import { StyleSheet } from 'react-native';

import { Colors } from 'react-native-ui-lib';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
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
    height: '24%',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 20,
    paddingVertical: 6,
    color: 'black',
  },
  description: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'justify',
    color: 'black',
    paddingBottom: 10,
    overflow: 'scroll',
  },
  readMore: {
    justifyContent: 'flex-end',
    fontWeight: '700',
    height: 30,
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 10,
    borderTopColor: Colors.grey50,
    marginHorizontal: 20,
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
  },
  author: {
    color: Colors.grey10,
    fontWeight: '600',
    flexGrow: 1,
  },
});

export default styles;
