import React from "react";
import CatagorieSlider from "./CategorieSlider";
import Headline from "./Headline";

const Categorie = () => {
  return (
    <section id="categorie" className="bg-slate-200 min-h-[1280px] py-16">
      <div className="container mx-auto h-[1080px]">
        <Headline title="Programs" />
        <CatagorieSlider />
      </div>
    </section>
  );
};

export default Categorie;
