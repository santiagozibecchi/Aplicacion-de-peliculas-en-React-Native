import { View, Text, FlatList } from 'react-native';
import React from 'react';
import currencyFormatter from 'currency-formatter';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';


interface Props {
     movieFull: MovieFull,
     cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {

     return (
          <>
               {/* Detalles */}
               <View style={{ marginHorizontal: 20 }}>

                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                         <Icon name="star-outline" color="grey" size={20} />
                         <Text style={{ fontSize: 16 }}> {movieFull.vote_average}</Text>

                         <Text style={{ marginLeft: 5, fontSize: 16 }}>
                              - {movieFull.genres.map(g => g.name).join(', ')}
                         </Text>
                    </View>
                    {/* Historia de la pelicula */}
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                         Historia
                    </Text>

                    <Text style={{ fontSize: 16, marginTop: 10 }}>
                         {movieFull.overview}
                    </Text>

                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                         Presupuesto</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>
                         {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                    </Text>

               </View>


               {/* Casting */}
               <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>Actores</Text>

                         <FlatList
                              data={cast}
                              keyExtractor={(item) => item.id.toString()}
                              renderItem={({ item }) => <CastItem actor={item} />}
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              style={{
                                   marginLeft: 3,
                                   marginTop: 10,
                                   // backgroundColor: 'green',
                                   height: 60,
                              }}
                         />
                    </View>

          </>
     );
};

export default MovieDetails;
