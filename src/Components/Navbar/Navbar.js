import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Navbar = ({ activeGenre, setActiveGenre, movieList, setFiltered }) => {
      const apiKey = "d986c77daa4264752befefd790927f66";
      const [loading, setLoading] = useState(true);
      const {
            data: moviesGenres,
            isError,
            isLoading,
            refetch,
      } = useQuery({
            queryKey: ["moviesGenres"],
            queryFn: async () => {
                  try {
                        const response = await axios.get(
                              `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
                        );

                        setLoading(false); // Set loading to false once data is fetched

                        return response.data; // Return response data
                  } catch (error) {
                        console.error("Error fetching data:", error);
                        throw error; // Rethrow the error to let React Query handle it
                  }
            },
      });

      useEffect(() => {
            if (activeGenre === 0) {
                  setFiltered(movieList);
                  return;
            }

            const filterMovie = movieList?.filter(
                  (movie) => movie?.genre_ids.includes(activeGenre)
            );
            setFiltered(filterMovie);
      }, [activeGenre, setFiltered, movieList]);

      return (
            <div className="">
                  <ul className="w-full flex flex-wrap items-center gap-10  py-5">
                        <li
                              onClick={() => setActiveGenre(0)}
                              className={`w-fit cursor-pointer whitespace-nowrap border border-blue-800 px-2 py-1 rounded-full hover:bg-blue-800 hover:text-white font-medium duration-300 ${activeGenre === 0 ? 'bg-blue-800 text-white' : 'bg-transparent text-white'}`}
                        >
                              All
                        </li>
                        {moviesGenres?.genres?.map((genres) => (
                              <li
                                    onClick={() => setActiveGenre(genres?.id)}
                                    key={genres?.id}
                                    className={`w-fit cursor-pointer whitespace-nowrap border border-blue-800 px-2 py-1 rounded-full hover:bg-blue-800 hover:text-white font-medium duration-300 ${activeGenre === genres?.id ? 'bg-blue-800 text-white' : 'bg-transparent text-white'}`} 
                              >
                                    {genres?.name}
                              </li>
                        ))}
                  </ul>
            </div>
      );
};

export default Navbar;
