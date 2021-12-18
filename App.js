import React from "react";
import "./styles.css";
import { useState } from "react";

const books = {
  SciFi: [
    {
      name: "A Hitchiker's Guide Galaxy",
      description:
        "Centers on the adventures of the only man to survive the destruction of Earth while roaming outer space",
      rating: "3/5"
    },

    {
      name: "Dune",
      description:
        "Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world",
      rating: "4/5"
    },

    {
      name: "The Time Machine",
      description:
        " A captivating account of a Time Traveler's journey into the future",
      rating: "4/5"
    }
  ],

  Horror: [
    {
      name: "The Shining",
      description: "A psychological and supernatural thriller for the keeps",
      rating: "2/5"
    },

    {
      name: "It",
      description:
        "It's a study of children facing the uncanny, and overcoming their greatest fear: the fear of being alone in fright",
      rating: "3/5"
    },
    {
      name: "A Head Full Of Ghosts",
      description: "An edgy, eerie tale of posession and perception",
      rating: "4/5"
    }
  ],

  Romance: [
    {
      name: "The Notebook",
      description:
        "A story about two teenagers from opposite sides of the track who meet one fateful summer and fall in love for a lifetime",
      rating: "2/5"
    },

    {
      name: "Heartbreak For Hire ",
      description:
        "A smart, sexy, and witty romantic comedy—perfect for fans of Christina Lauren and Sally Thorne—about a twentysomething who",

      rating: "3/5"
    },

    {
      name: "99 Percent Mine",

      description: "The next Sophie Kinsella!",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Romance");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App" style={{ fontSize: "23px", color: "#5499C7" }}>
      <h1>📚 Readbooks </h1>
      <p style={{ fontSize: "20px", color: "black" }}>
        {" "}
        Check out my favorite books. Select a genre to get started
      </p>

      <div>
        {Object.keys(books).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              fontSize: "22px",

              cursor: "pointer",
              width: "140px",
              background: "#D4E6F1	",
              borderRadius: "0.5rem",
              padding: "1rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {
            /* {books[selectedGenre].map((book) =>(    */
            books[selectedGenre].map((book) => (
              <li
                style={{
                  listStyle: "none",
                  color: "black",
                  padding: "1rem",
                  border: "1px solid black",
                  width: "50%",
                  marginLeft: "23%",
                  borderRadius: "0.5rem",
                  marginTop: "3%"
                }}
                key={book.name}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {book.name} </div>
                <div style={{ fontSize: "15px" }}> {book.description} </div>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
