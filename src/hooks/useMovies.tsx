import { useState, useEffect } from "react";
import { api } from '../utility/api';

interface movie {
    id:String;
    title:String;
    releaseYear:String
  }

const useMovies = () => {

  const [movies, setMovies] = useState<movie[]>([]);
  const [error,setError]= useState<String>("")
  const [loading,setLoading]= useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const responseData = await api.get('movies.json');
          setMovies(responseData.movies);
        } catch (err:any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
  }, []);

  return [movies,error,loading];
};

export default useMovies;