import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Amazon = () => {
  return (
    <Card
      key={Sdata[8].id}
      imgsrc={Sdata[8].imgsrc}
      title={Sdata[8].title}
      sname={Sdata[8].sname}
      link={Sdata[8].link}
    />
  );
};

export default Amazon;
