import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchSearchData } from "./api";
import firebase from "firebase/app";
import "./TopBar.scss";
export interface IModalTopBar {
  showSearchData: Function;
}
const TopBar: React.FC<IModalTopBar> = ({ showSearchData }: IModalTopBar) => {
  const history = useHistory();
  const [text, setText] = useState<string>("");
  const [searchData, setSearchData] = useState<any>();
  const handleLogout = () => {
    firebase.auth().signOut();
  };
  const handleChange = (val: string) => {
    setText(val);
    showSearchData(searchData);
    if (val === "") {
      showSearchData([]);
    }
  };
  useEffect(() => {
    fetchSearchData(text).then((response) => setSearchData(response));
  }, [text]);
  const handleResetHome = () => {
    history.push("/home");
    showSearchData([]);
  };
  return (
    <>
      <div onClick={handleResetHome} style={{ cursor: "pointer", fontSize: "28px", fontWeight: "700" }}>
        TV MAZE SHOW
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: "20px" }}>
        <div
          style={{ border: "none", fontSize: "20px", cursor: "pointer", fontWeight: "600" }}
          className="logBtn"
          onClick={handleLogout}
        >
          Log out
        </div>
        <input
          placeholder="Search"
          style={{ border: "none", borderRadius: "6px", padding: "6px 16px", fontSize: "16px", fontWeight: "500" }}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default TopBar;
