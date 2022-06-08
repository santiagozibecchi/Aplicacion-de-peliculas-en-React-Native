import React from 'react';
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windownWidth } = Dimensions.get('window');

const HomeScreen = () => {

     const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
     const { top } = useSafeAreaInsets();

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
                              itemWidth={220}
                              inactiveSlideOpacity={0.9}
                         />
                    </View>

                    {/* PELICULAS POPULARES */}
                    <HorizontalSlider title={"Peliculas populares"} movies={popular} />
                    <HorizontalSlider title={"Peliculas mas puntuadas"} movies={topRated} />
                    <HorizontalSlider title={"Peliculas que se vienen"} movies={upcoming} />




               </View >
          </ScrollView>

     );
};

export default HomeScreen;
