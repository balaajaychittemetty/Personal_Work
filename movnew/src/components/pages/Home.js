import React, { Component } from "react";
import Movie from "./Movie";
import "../../App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          mvId: 1,
          mvName: "KGF",
          mvLanguage: "Telugu",
          mvImage:
            "https://4.bp.blogspot.com/-wltpacXvjDQ/W-RYuNnF_9I/AAAAAAAApJA/AThbWbbGNMoLpEn5PgWr8WN4_Lq1LFXoACLcBGAs/s1600/KGF-Poster-8.jpg",
          movieList: [
            
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Yash, Srinidhi Shetty",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Action",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2018",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★★☆",
            },
          ],
        },
        {
          mvId: 2,
          mvName: "Soorarai Pottru",
          mvLanguage: "Tamil",
          mvImage:
            "https://th.bing.com/th/id/OIP.3s1YLSNMFvBR2XpIl5d9YgHaLP?pid=ImgDet&rs=1",
          movieList: [
            
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Suriya,Aparna Balamurali",
            },
            {
              mId: 3,
              mName: "GENRE",
              mName1: "biopic",
            },
            {
              mId: 4,
              mName: "YEAR",
              mName1: "2020",
            },
            {
              mId: 5,
              mName: "RATING",
              mName1: "★★★★★",
            },
          ],
        },
        {
          mvId: 3,
          mvName: "24",
          mvLanguage: "Tamil",
          mvImage:
            "https://images-na.ssl-images-amazon.com/images/I/71IUL9fWHZL._RI_.jpg",
          movieList: [
            
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Suriya, Samantha",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Sci-fiction",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2016",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★★☆",
            },
          ],
        },
        
        {
          mvId: 4,
          mvName: "MASTER",
          mvLanguage: "Tamil",
          mvImage:
            "https://th.bing.com/th/id/OIP.9ECvVNuwzZaLQRwyItObsQHaJ4?pid=ImgDet&rs=1",
          movieList: [
            
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Vijay & Vijay Sethupathi",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Action",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★★☆",
            },
          ],
        },
        {
          mvId: 5,
          mvName: "The CONJURING",
          mvLanguage: "English",
          mvImage:
            "https://th.bing.com/th/id/OIP.k-gNPzlVM9VslktklUlyNgAAAA?pid=ImgDet&rs=1'",
          movieList: [
           
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Patrick Wilson & more",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Horror",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★☆☆",
            },
          ],
        },
        {
          mvId: 6,
          mvName: "BLACK WIDOW",
          mvLanguage: "English",
          mvImage:
            "https://th.bing.com/th/id/OIP.ERTq50RNKQLp6qlZUYwAZQHaK-?pid=ImgDet&rs=1",
          movieList: [
           
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Scarlett.J & more",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Adventure",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★★★",
            },
          ],
        },
        {
          mvId: 7,
          mvName: "TRANCE",
          mvLanguage: "Malayalam",
          mvImage:
            "https://m.media-amazon.com/images/M/MV5BYjJhYmM3MWQtMWM3NC00MWQyLTliZWItNDI3NGYwZTU0MDAyXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
          movieList: [
           
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Fahadh Faasil,Dileesh",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Action",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2020",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★☆☆",
            },
          ],
        },
        {
          mvId: 8,
          mvName: "AVENGERS ENDGAME",
          mvLanguage: "English",
          mvImage:
            "https://th.bing.com/th/id/OIP.DZ6cdDbQStoBcl7VeJi3WgHaK9?pid=ImgDet&rs=1",
          movieList: [
            
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Robert Downey Jr & more",
            },
            {
              mId: 3,
              mName: "GENRE",
              mName1: "Sci- fiction",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2019",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★★☆",
            },
          ],
        },
        
        {
          mvId: 9,
          mvName: "M.S. Dhoni: The Untold Story",
          mvLanguage: "Hindi",
          mvImage:
            "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          movieList: [
           
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Sushant Singh,Kiara",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Biopic",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2016",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★★★",
            },
          ],
        },
        {
          mvId: 10,
          mvName: "Drishyam 2",
          mvLanguage: "Malayalam",
          mvImage:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNqhWqGb1KTBYX3cUVCk_Y5IlAwY7sL4MI2jcQpMLMUToV6Vm4",
          movieList: [
            
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Mohanlal, Meena",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Action",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★★★",
            },
          ],
        },
        {
          mvId: 11,
          mvName: "13B: Fear Has a New Address",
          mvLanguage: "Hindi",
          mvImage:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_Xyh4g8wGMHI8KFJo3MeE4ECj5tupYVOkDsShdwKI3PYBwCfe",
          movieList: [
           
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Madhavan,Neetu Chandra",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Horror",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2009",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "★★★★☆",
            },
          ],
        },
      ],
    };
  }

  mapMovies() {
    const card = this.state.movies.map((movie, index) => (
      <Movie key={movie.rId} movie={movie} />
    ));

    return card;
  }

  render() {
    return (
      <>
        <p className="h1 text-white my-3 mx-2" id="heading">TRENDING NOW!!</p>
        <div className="carousal w-100 h-50 mx-1">
          <div className="carousel">
            <div
              className="my-image"
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://th.bing.com/th/id/OIP.aZC5aOgIFQa2ZTn1sPCbpwHaEK?pid=ImgDet&rs=1"
                    class="d-block w-100 h-30 "
                    alt="..."
                    style={{ height: 350, width: 350 }}
                  ></img>
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://techiwala.com/wp-content/uploads/2020/03/MASTER.jpg"
                    class="d-block w-100"
                    alt="..."
                    style={{ height: 350, width: 300 }}
                  ></img>
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://th.bing.com/th/id/OIP.e9dQiaAz8Aawz_onQ_iyCwHaEK?pid=ImgDet&rs=1
"
                    class="d-block w-100"
                    alt="..."
                    style={{ height: 350, width: 300 }}
                  ></img>
                  <div class="carousel-caption d-none d-md-block">
                    <p class="fw-bold">Coming on theaters soon..</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <p className="h1 text-white my-3 mx-2" id="heading">TOP RATED MOVIES</p>
        <div className="row">{this.mapMovies()}</div>
      </>
    );
  }
}

export default App;
