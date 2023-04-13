import React from "react";
//API
import API from "../../API";
//config

import { useAuth0 } from "@auth0/auth0-react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";

//components
import HeroImage from "../HeroImage";
import Grid from "../Grid";
import Thumb from "../Thumb";
import Spinner from "../Spinner";
import SearchBar from "../SearchBar";
import Button from "../Button";
//Hook
import { useHomeFetch } from "../../hooks/useHomeFetch";

//image
import NoImage from "../../images/no_image.jpg";
import Signin from "../Signin";

const Home = () => {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();
  const { state, loading, error, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  console.log(state);

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "20px",
    borderRadius: "5px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  if (error) return <div>something went wrong.....</div>;
  return (
    <>
    {isAuthenticated ? (
      <>
        <button
        style={buttonStyle}
          onClick={
            () =>
              logout({
                logoutParams: { returnTo: "https://rmdb-signin-with-socials.vercel.app/signin" },
              })
            // console.log(window.location.origin)
          }
        >
          Log Out
        </button>
        {state.results[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
        ) : null}
        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header="Popular Movies">
          {state.results.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          ))}
        </Grid>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (
          <Button text="Load More" callback={() => setIsLoadingMore(true)} />
        )}
      </>
    ):(
      <Signin/>
    )}
    </>
  );
};

export default Home;
