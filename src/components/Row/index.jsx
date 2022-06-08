import React from "react";
import { getDate } from "../utils/helper";
import StyledRow from "./style";

const Row = ({ user }) => {
  return (
    <StyledRow>
      <td className="serial-num">{user.index}</td>
      <td className="name">{user.name}</td>
      <td className="location">{user.location}</td>
      <td className="email">{user.email}</td>
      <td className="dob">{getDate(user.dob)}</td>
    </StyledRow>
  );
};

export default Row;
