import { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import MovieDetailComponent from "./MovieDetail";
import SearchDataComponent from "./SearchDataComponent";
import TopBar from "./TopBar";

const Routes = () => {
  const [movieIdShow, setShowMovieId] = useState<any>(1);
  const [showSearchData, setShowSearchData] = useState([]);

  return (
    <>
      <Router>
        <>
          {" "}
          <div
            style={{
              height: "4rem",
              color: "#fff",
              padding: "0 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TopBar showSearchData={setShowSearchData} />
          </div>
          <div style={{ height: "calc(100vh - 8rem)", overflow: "scroll" }}>
            <Switch>
              <Route exact={true} path="/" render={() => <Redirect to="/home" />} />

              <Route exact={true} path="/search">
                <SearchDataComponent showSearchData={showSearchData} />
              </Route>
              <Route exact={true} path="/home">
                {/* {showSearchData.length > 0 ? (
                  <SearchDataComponent showSearchData={showSearchData} />
                ) : (
                  )} */}
                <Home movieId={setShowMovieId} />
              </Route>
              <Route exact={true} path="/movie-detail">
                {/* {showSearchData.length > 0 ? (
                  <SearchDataComponent showSearchData={showSearchData} />
                ) : (
                  )} */}
                <MovieDetailComponent movieIdShow={movieIdShow} />
              </Route>
            </Switch>
          </div>
          <div
            style={{ height: "4rem", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span style={{ fontSize: "18px", fontWeight: "600", cursor: "pointer" }}>All Rights Reserved</span>
          </div>
        </>
      </Router>
    </>
  );
};

export default Routes;
