import { StyleSheet } from 'react-native';

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
  textContainer: {
    paddingHorizontal: 20,
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
    paddingBottom: 4,
  },
  readMore: {
    justifyContent: 'flex-end',
    fontWeight: '700',
    marginTop: 4,
  },
});

export default styles;
