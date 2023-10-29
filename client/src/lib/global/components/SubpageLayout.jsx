import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SubpageLayout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button className="subpage-goback-fixed" onClick={goBack}>
        {"<"}
      </button>
      <div className="center-top">
        <Outlet />
      </div>
    </>
  );
};

export default SubpageLayout;
