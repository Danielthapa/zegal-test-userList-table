import { useState } from "react";

const useSearchAndSort = () => {
  const [usersList, setUsersList] = useState([]);
  const [sortState, setSortState] = useState({
    index: true,
    name: false,
    location: false,
    email: false,
    dob: false,
  });

  let mainList = [];

  const setMainList = (list) => {
    mainList = list;
  };

  const handleSearch = (key) => {
    if (!key) return;
    const filteredList = usersList.filter((user) => {
      const values = Object.values(user);
      console.log("key", key);
      const combinedValues = values.join(",");
      const result = combinedValues.match(key);
      if (result) return true;
    });
    setUsersList(filteredList);
  };

  const handleSort = (type) => {
    if (!usersList) return;
    switch (type) {
      case "S.N": {
        let sortedList = [];
        if (sortState.index) {
          sortedList = usersList.sort((a, b) => b.index - a.index);
        } else {
          sortedList = usersList.sort((a, b) => a.index - b.index);
        }
        setUsersList([...sortedList]);
        setSortState((prev) => ({ ...prev, index: !prev.index }));
        break;
      }
      case "Name": {
        let sortedList = [];
        if (sortState.name) {
          sortedList = usersList.sort((a, b) => b.name.localeCompare(a.name));
        } else {
          sortedList = usersList.sort((a, b) => a.name.localeCompare(b.name));
        }
        setUsersList([...sortedList]);
        setSortState((prev) => ({ ...prev, name: !prev.name }));
        break;
      }
      case "Location": {
        let sortedList = [];
        if (sortState.location) {
          sortedList = usersList.sort((a, b) =>
            b.location.localeCompare(a.location)
          );
        } else {
          sortedList = usersList.sort((a, b) =>
            a.location.localeCompare(b.location)
          );
        }

        setUsersList([...sortedList]);
        setSortState((prev) => ({ ...prev, location: !prev.location }));
        break;
      }
      case "Email": {
        let sortedList = [];
        if (sortState.email) {
          sortedList = usersList.sort((a, b) => b.email.localeCompare(a.email));
        } else {
          sortedList = usersList.sort((a, b) => a.email.localeCompare(b.email));
        }
        setUsersList([...sortedList]);
        setSortState((prev) => ({ ...prev, email: !prev.email }));
        break;
      }
      case "D.O.B": {
        let sortedList = [];
        if (sortState.dob) {
          sortedList = usersList.sort(
            (a, b) => new Date(b.dob) - new Date(a.dob)
          );
        } else {
          sortedList = usersList.sort(
            (a, b) => new Date(a.dob) - new Date(b.dob)
          );
        }
        setUsersList([...sortedList]);
        setSortState((prev) => ({ ...prev, dob: !prev.dob }));
        break;
      }
      default:
        return usersList;
    }
  };

  return {
    handleSort,
    usersList,
    setUsersList,
    handleSearch,
    setMainList,
  };
};

export default useSearchAndSort;
