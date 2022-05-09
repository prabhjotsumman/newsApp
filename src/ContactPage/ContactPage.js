import React from 'react';
import { Text, View } from 'react-native';
import { Incubator, PanningProvider } from 'react-native-ui-lib';

import styles from './ContactPage.styles';

const { Dialog } = Incubator;

const ContactPage = ({ show, onDismiss }) => (
  <Dialog
    visible={show}
    onDismiss={onDismiss}
    style={[styles.container]}
    panDirection={PanningProvider.Directions.DOWN}>
    <View styles={[styles.container]}>
      <Text style={[styles.title]}>Contact Us</Text>
      <Text style={[styles.subtitle]}>Publisher Email</Text>
      <Text style={[styles.value]}>khangura.1994@gmail.com</Text>
      <Text style={[styles.value]}>+91-9915241671</Text>
      <Text></Text>
      <Text style={[styles.subtitle]}>Developer Email</Text>
      <Text style={[styles.value]}>prabhjotsumman@gmail.com</Text>
      <Text></Text>
    </View>
  </Dialog>
);

export default ContactPage;
