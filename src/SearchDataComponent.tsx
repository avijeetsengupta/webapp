import React from "react";
import { extractText } from "./util";
export interface IModalSearchDataComponent {
  showSearchData: Array<any>;
}
const SearchDataComponent: React.FC<IModalSearchDataComponent> = ({ showSearchData }: IModalSearchDataComponent) => {
  return (
    <>
      {showSearchData &&
        showSearchData.map((val, index) => (
          <div
            key={index}
            className="searchBox"
            style={{
              color: "#fff",
              display: "flex",
              marginBottom: "20px",
              gap: "20px",
              padding: "0 40px",
              cursor: "pointer",
            }}
          >
            <div className="searchImgBox">
              <img src={val.show.image && `${val.show.image.medium}`} alt="oops movieImg" />
            </div>
            <div className="desBox">
              <div className="searchHeader">{val.show.name}</div>
              <div className="searchDescription">{extractText(val.show)}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SearchDataComponent;
