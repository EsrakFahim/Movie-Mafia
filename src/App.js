import React, { useEffect, useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar/Navbar";

function App() {
      const apiKey = "d986c77daa4264752befefd790927f66";
      const [movieList, setMovieList] = useState([]);
      const [adultOpt, setAdultOpt] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [category, setCategory] = useState("");
      const [loading, setLoading] = useState(true);
      const {
            data: movies,
            isError,
            isLoading,
            refetch,
      } = useQuery({
            queryKey: ["movies"],
            queryFn: async () => {
                  try {
                        const response = await axios.get(
                              `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&include_adult=${adultOpt}&page=${currentPage}`
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
            refetch();
      }, [refetch, adultOpt, currentPage, category]);

      if (isLoading || loading) {
            return <p>Loading....</p>;
      }

      if (isError) {
            return <p>Something went wrong!!!</p>;
      }

      console.log(movies);

      return (
            <div>
                  <div className="w-full md:w-[90%] lg:w-[75%] mx-auto my-10">
                        <Navbar
                              setCurrentPage={setCurrentPage}
                              currentPage={currentPage}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                              {movies?.results?.map((movie) => (
                                    <React.Fragment key={movie.id}>
                                          <Cards movie={movie} />
                                    </React.Fragment>
                              ))}
                        </div>
                  </div>
            </div>
      );
}

export default App;
