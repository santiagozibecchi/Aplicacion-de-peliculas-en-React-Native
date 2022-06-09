import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ImageColors from 'react-native-image-colors';

import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windownWidth } = Dimensions.get('window');

const HomeScreen = () => {

     const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
     const { top } = useSafeAreaInsets();
     const { setMainColors } = useContext(GradientContext);

     const getPosterColors = async (index: number) => {

          const movie = nowPlaying[index];
          const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

          const [primary = 'grey', secondary = 'orange'] = await getImageColors(uri);

          setMainColors({
               primary,
               secondary,
          });
     };

     useEffect(() => {
          // si si, significa que ya tenemos una pelicula
          if (nowPlaying.length > 0) {
               getPosterColors(0);
          }
     }, [nowPlaying]);


     if (isLoading) {
          return (
               <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
               }}>
                    <ActivityIndicator color="green" size={80} />
               </View>
          );
     }

     return (

          <GradientBackground>

               <ScrollView>

                    <View style={{
                         marginTop: top + 10,
                         // backgroundColor: 'red',
                    }}>

                         {/* CAROSEL PRINCIPAL */}
                         <View style={{ /* backgroundColor: 'red' */ height: 340 }}>
                              <Carousel
                                   data={nowPlaying}
                                   renderItem={({ item }: any) => <MoviePoster movie={item} />}
                                   sliderWidth={windownWidth}
                                   itemWidth={230}
                                   inactiveSlideOpacity={0.9}
                                   onSnapToItem={index => getPosterColors(index)}
                              />
                         </View>

                         {/* PELICULAS POPULARES */}
                         <HorizontalSlider title={"Peliculas populares"} movies={popular} />
                         <HorizontalSlider title={"Peliculas mas puntuadas"} movies={topRated} />
                         <HorizontalSlider title={"Peliculas que se vienen"} movies={upcoming} />

                    </View >
               </ScrollView>

          </GradientBackground>

     );
};

export default HomeScreen;
