import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import "../singlepage.css";

import { useParams } from "react-router-dom";
import Data from "./Cities";
function SinglePage() {
  const { id } = useParams();
  console.log("ID===========", id);
  console.log(Data);
  Data.filter((destination) => destination.id === id).map((destination) => {
    alert("YEAH");
  });

  Data.map((thing) => {
    console.log("ID + ", thing.id == id);
  });

  return (
    // <div>
    //   <Stack
    //     direction="column"
    //     justifyContent="center"
    //     alignItems="center"
    //     spacing={3}
    //   >
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //     <h1>hello</h1>
    //   </Stack>
    // </div>

    <section className="section cocktail-section">
      <Link className="btn btn-primary" to="/">
        Back Home
      </Link>
      {Data.filter((destination) => destination.id == id).map((destination) => (
        <>
          <h2 className="section-title">{destination.title}</h2>
          <div className="drink">
            <img src={destination.image} height={500} width={700} alt="" />
            <div className="drink-info">
              <p style={{ marginBottom: "10px" }}>
                <span className="drink-data">name:</span>
                {destination.title}
              </p>
              <p style={{ marginBottom: "10px" }}>
                <span className="drink-data">Description</span>
                {destination.description}
              </p>
              <p style={{ marginBottom: "10px" }}>
                <span className="drink-data">Best Hotels</span>
                {destination.hotels[0]}, {destination.hotels[1]},{" "}
                {destination.hotels[2]}
              </p>
              <p>
                <span className="drink-data">Best Sights</span>
                {destination.sightseing[0]}, {destination.sightseing[1]},{" "}
                {destination.sightseing[2]}
              </p>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}

export default SinglePage;
