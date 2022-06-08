import React from "react";
import StyledHeaderButton from "./style";

const HeaderButton = ({ title, sort }) => {
  return (
    <StyledHeaderButton
      onClick={() => {
        console.log("sorting", title);
        sort(title);
      }}
    >
      {title}
    </StyledHeaderButton>
  );
};

export default HeaderButton;
