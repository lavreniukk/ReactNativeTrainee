import React from 'react';
import type {PropsWithChildren} from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import {Text, View} from 'react-native';

function GradientText({
  children,
  gradient,
}: {
  children: string;
  gradient: JSX.Element;
}): JSX.Element {
  return (
    <MaskedView
      style={{flex: 1, flexDirection: 'row', height: 100}}
      maskElement={
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 50,
              color: 'black',
              fontWeight: 'bold',
            }}>
            {children}
          </Text>
        </View>
      }>
      {gradient}
    </MaskedView>
  );
}

export default GradientText;
