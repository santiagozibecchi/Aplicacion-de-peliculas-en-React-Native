import { View, Animated, Button } from 'react-native';
import React from 'react';
import useFade from '../hooks/useFade';

const FadeScreen = () => {

     const { fadeIn, fadeOut, opacity } = useFade();

     return (
          <View style={{
               flex: 1,
               backgroundColor: 'grey',
               justifyContent: 'center',
               alignItems: 'center',
          }}>

               <Animated.View
                    style={{
                         backgroundColor: '#084F6A',
                         width: 150,
                         height: 150,
                         borderColor: 'white',
                         borderWidth: 10,
                         opacity,
                         marginBottom: 10,
                    }}
               />

               <View style={{ flexDirection: 'row' }}>
                    <Button
                         title="fadeIn"
                         onPress={() => fadeIn}
                    />
                    <Button
                         title="fadeOut"
                         onPress={() => fadeOut}
                    />
               </View>

          </View>
     );
};

export default FadeScreen;
