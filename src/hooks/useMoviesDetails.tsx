import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterface";


interface MovieDetails {
     cast: Cast[],
     isLoading: boolean,
     movieFull?: MovieFull,
}

const useMoviesDetails = (movieId: number) => {

     const [state, setState] = useState<MovieDetails>({
          isLoading: true,
          movieFull: undefined,
          cast: [],
     });

     const getMovieDetails = async () => {

          const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
          const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

          const [movieDetailsResp, castResp] = await Promise.all([
               movieDetailsPromise,
               castPromise,
          ]);

          setState({
               isLoading: false,
               movieFull: movieDetailsResp.data,
               cast: castResp.data.cast,
          });
     };

     useEffect(() => {
          getMovieDetails();
     }, []);

     return {
          ...state,
     };


};

export default useMoviesDetails;
