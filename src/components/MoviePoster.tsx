import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';

interface Props {
     movie: Movie,
     height?: number,
     width?: number,
     top?: number,
}

const MoviePoster = ({ movie, height = 320, width = 220, top = 9}: Props) => {

     const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

     return (

          <View style={{
               width,
               height,
               top,
               marginHorizontal: 5,
               // backgroundColor: 'red',
               borderRadius: 18,
          }}>{/* Este View controla la sombra de la imagen ya que la image no soporta  elevation */}
               <View style={styles.imageContainer}>
                    <Image
                         source={{ uri }}
                         style={styles.image}
                    />
               </View>
          </View>
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
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 10,
     },
});
