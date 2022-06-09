import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
     actor: Cast
}

const CastItem = ({ actor }: Props) => {

     const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

     return (
          <View style={styles.container}>
               {
                    actor.profile_path && (
                         <Image
                              source={{ uri }}
                              style={{ width: 50, height: 50, borderRadius: 10 }}
                         />
                    )
               }

               <View style={styles.actorInfo}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                         {actor.name}
                    </Text>
                    <Text style={{ fontSize: 16, opacity: 0.8 }}>
                         {actor.character}
                    </Text>
               </View>

          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          borderRadius: 10,
          height: 50,
          // backgroundColor: 'red',
          shadowColor: "#000",
          shadowOffset: {
               width: 10,
               height: 10,
          },
          shadowOpacity: 0.2,
          shadowRadius: 6,

          elevation: 2,
          marginLeft: 15,
          marginHorizontal: 5,
          paddingRight: 15,
     },
     actorInfo: {
          marginLeft: 12,
          paddingTop: 3,
     },
});

export default CastItem;
