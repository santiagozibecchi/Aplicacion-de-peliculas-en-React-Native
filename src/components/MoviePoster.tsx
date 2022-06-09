import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
     movie: Movie,
     height?: number,
     width?: number,
     top?: number,
}
// movie es ya una pelicula que se itero del arreglo nowPlaying a partir de item...
const MoviePoster = ({ movie, height = 320, width = 230, top = 9 }: Props) => {

     const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

     const navigation = useNavigation();

     return (

          <TouchableOpacity
               onPress={() => navigation.dispatch(CommonActions.navigate({
                    name: 'DetailScreen',
                    params: movie,
               }))}
               style={{
                    width,
                    height,
                    top,
                    // marginHorizontal: 2,
                    paddingBottom: 20,
                    paddingHorizontal: 8,
                    // backgroundColor: 'red',
                    borderRadius: 18,
               }}>{/* Este View controla la sombra de la imagen ya que la image no soporta  elevation */}
               <View style={styles.imageContainer}>
                    <Image
                         source={{ uri }}
                         style={styles.image}
                    />
               </View>
          </TouchableOpacity>
     );
};

export default MoviePoster;

const styles = StyleSheet.create({
     image: {
          flex: 1,
          borderRadius: 18,
     },
     imageContainer: {
          flex: 1,
          borderRadius: 18,
          // backgroundColor: 'green',
          shadowColor: "#000",
          shadowOffset: {
               width: 5,
               height: 5,
          },
          shadowOpacity: 0.8,
          shadowRadius: 6,
          elevation: 7,
     },
});
