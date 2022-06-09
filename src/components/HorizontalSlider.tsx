import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
     title?: string,
     movies: Movie[]
}

const HorizontalSlider = ({ title, movies }: Props) => {

     return (

          < View style={{
               // backgroundColor: 'grey',
               height: (title) ? 210 : 180,

          }}>

               {
                    title && <Text style={{
                         fontSize: 18,
                         fontWeight: 'bold',
                         marginLeft: 10,
                    }}>{title}</Text>
               }

               <FlatList
                    data={movies}
                    renderItem={({ item }: any) => (
                         <MoviePoster movie={item} width={140} height={160} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
               />
          </View >

     );
};

export default HorizontalSlider;
