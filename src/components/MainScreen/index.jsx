import React, { useEffect, useState } from "react";
import useSearchAndSort from "../../hooks/useSearchAndSort";
import UserList from "../UserList";
import { getUserInfoList } from "../utils/helper";
import StyledMainScreen from "./style";

const MainScreen = () => {
  const { usersList, setUsersList, handleSort, handleSearch, setMainList } =
    useSearchAndSort();
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api?results=10")
      .then((res) => res.json())
      .then((list) => {
        const userList = getUserInfoList(list.results);
        setMainList(userList);
        setUsersList(userList);
      });
  }, []);

  useEffect(() => {
    if (searchKey === "") {
      
    }

  }, []);

  return (
    <StyledMainScreen>
      <section className="header-section">
        <h2 className="main-header">Random User List</h2>
        <div className="search-bar-wrapper">
          <input
            type="text"
            value={searchKey}
            onChange={(e) => {
              handleSearch(searchKey);
              setSearchKey(e.currentTarget.value);
            }}
            placeholder="search for a user"
            className="search-bar"
          />
        </div>
      </section>
      <section className="body-list-section">
        <UserList sort={(type) => handleSort(type)} usersList={usersList} />
      </section>
    </StyledMainScreen>
  );
};

export default MainScreen;
