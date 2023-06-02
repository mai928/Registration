import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../utils/globalStyle';

const Terms = () => {
  return (
    <View style={{...globalStyle.innerContainer}}>
      <Text style={{...globalStyle.terms}}>
        By proceeding, you agree to{' '}
        <Text style={{...globalStyle.termsUnderLine}}>our Terms of Use</Text> and confirm
      </Text>
      <Text style={{...globalStyle.terms}}>
        you have read our{' '}
        <Text style={{...globalStyle.termsUnderLine}}>
          Privacy and Cookie Statement.
        </Text>
      </Text>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({});
