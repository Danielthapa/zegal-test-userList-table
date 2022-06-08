import React from "react";
import HeaderButton from "../HeaderButton";
import StyledHeaderRow from "./style";

const headerList = ["S.N", "Name", "Location", "Email", "D.O.B"];

const HeaderRow = ({ sort }) => {
  return (
    <StyledHeaderRow>
      {headerList.map((header) => (
        <HeaderButton sort={sort} key={header} title={header} />
      ))}
    </StyledHeaderRow>
  );
};

export default HeaderRow;
