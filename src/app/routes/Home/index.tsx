import React from "react";
import { useHistory } from "react-router-dom";

const HomeRoute: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Home</h1>
      <button onClick={(): void => { history.push("/about"); }}>{"About"}</button>
    </>
  );
};

export default HomeRoute;
