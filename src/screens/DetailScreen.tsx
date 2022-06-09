import React from 'react';

import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import useMoviesDetails from '../hooks/useMoviesDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

// dentro del route es donde esta la informacion de la pelicula que estoy recibiendo
// como argumento desde MoviePoster

const screenHeight = Dimensions.get('window').height;


const DetailScreen = ({ route, navigation }: Props) => {

     const movie = route.params;
     const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

     const { isLoading, movieFull, cast } = useMoviesDetails(movie.id);

     console.log(movieFull);

     return (
          <ScrollView>

               <View style={styles.imageContainer}>
                    <Image
                         source={{ uri }}
                         style={styles.posterImage}
                    />
               </View>

               <View style={styles.marginContainer}>
                    <Text style={styles.subTitle}>{movie.original_title}</Text>
                    <Text style={styles.title}>{movie.title}</Text>
               </View>

               {
                    isLoading
                         ? <ActivityIndicator size={30} color="grey" style={{ marginTop: 10, opacity: 0.5 }} />
                         : <MovieDetails movieFull={movieFull!} cast={cast} />
               }

               {/* Boton para volver atras */}
               <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
               >
                    <Icon
                         color="white"
                         name="arrow-back-circle-outline"
                         size={50}
                    />
               </TouchableOpacity>

          </ScrollView >

     );
};

const styles = StyleSheet.create({
     imageContainer: {
          width: '100%',
          height: screenHeight * 0.7,
          // backgroundColor: 'red',
          borderRadius: 30,
          shadowColor: "#000",
          shadowOffset: {
               width: 5,
               height: 5,
          },
          shadowOpacity: 0.8,
          shadowRadius: 6,
          elevation: 9,
     },
     posterImage: {
          flex: 1,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
     },
     marginContainer: {
          marginHorizontal: 20,
          marginTop: 20,
     },
     subTitle: {
          fontSize: 16,
          opacity: 0.8,
     },
     title: {
          fontSize: 20,
          fontWeight: 'bold',
     },
     backButton: {
          position: 'absolute',
          zIndex: 999,
          elevation: 9,
          top: 5,
          right: 5,
          alignSelf: 'flex-end',
     },
});

export default DetailScreen;
