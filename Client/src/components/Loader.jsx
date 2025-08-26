import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return <BeatLoader loading={loading} size={10} color="gray"/>;
};

export default Loader;
