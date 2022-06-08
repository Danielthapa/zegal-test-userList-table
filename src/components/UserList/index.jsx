import React from "react";
import HeaderRow from "../HeaderRow";
import Row from "../Row";
import StyledUserList from "./style";

const UserList = ({ usersList, sort }) => {
  return (
    <StyledUserList>
      <HeaderRow sort={sort} />
      {usersList.map((user) => (
        <Row key={user.name} user={user} />
      ))}
    </StyledUserList>
  );
};

export default UserList;
