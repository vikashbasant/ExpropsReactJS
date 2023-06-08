import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";
import Sdata from "./Sdata";
import Cards from "./Cards";

const App = () => (
  <>
    <h1 className="heading_style">List of top 9 Netflix in 2020</h1>
    {Sdata.map((val) => {
      return (
        <Cards
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>
);

export default App;
