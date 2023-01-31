import React, { useEffect, useState } from "react";
import { fetchCastMember, fetchMovieDetailById } from "./api";
import { extractText } from "./util";
import "./MovieDetail.scss";
export interface IModalMovieDetailComponent {
  movieIdShow: number;
}
const Star = ({ selected, half }: any) => <span>{selected ? "\u2605" : half ? "\u{1F31F}" : "\u2606"}</span>;
const StarRating = ({ rating }: any) => {
  let stars = [];
  const roundedRating = Math.round((rating / 2) * 2) / 2;
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} selected={i <= roundedRating} half={i === roundedRating && roundedRating % 1 !== 0} />);
  }
  return <div style={{ color: "yellow" }}>{stars}</div>;
};
const MovieDetailComponent: React.FC<IModalMovieDetailComponent> = ({ movieIdShow }: IModalMovieDetailComponent) => {
  const [movieDetail, setMovieDetail] = useState<any>();
  const [castNames, setCastNames] = useState<any>();
  useEffect(() => {
    fetchMovieDetailById(movieIdShow).then((response) => setMovieDetail(response));
    fetchCastMember(movieIdShow).then((response) => setCastNames(response));
  }, [movieIdShow]);
  return (
    <div style={{ color: "#fff", display: "flex", marginTop: "40px" }} className="detailContainer">
      {movieDetail && (
        <>
          <div className="imgBox">
            <img src={movieDetail.image.medium} alt="movieImg" style={{ height: "auto", width: "78%" }} />
          </div>

          <div className="detailBox">
            <div className="header">
              <span className="title">
                {movieDetail.name} ({movieDetail.rating.average})
              </span>
              <span style={{ fontSize: "2rem" }}>
                <StarRating rating={movieDetail.rating.average} />
              </span>
            </div>
            <div className="smallHeader">
              <span>
                {movieDetail.premiered} | Duration: {movieDetail.runtime} min | Director
              </span>
              <div>
                Cast:
                {castNames && castNames.map((val: any, index: number) => <span key={index}> {val.person.name} </span>)}
              </div>
            </div>
            <div className="description">{extractText(movieDetail)}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailComponent;
