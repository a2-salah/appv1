import React from "react";
import Card from "./Card";
import Headline from "./Headline";

const Services = () => {
  return (
    <section id="service" className="max-w-[1640px] mx-auto p-4 py-12">
      <Headline title="Services" />
      <div className="grid gap-6 px-20 py-16 lg:grid-cols-3 md:grid-cols-2 lg:">
        <Card image="/assets/settlement.jpg" title="Settlement Services" />
        <Card image="/assets/employ.jpg" title="Employment" />
        <Card image="/assets/housing.jpg" title="Housing" />
        <Card image="/assets/addservs.jpg" title="Additional Services" />
        <Card image="/assets/outreach.jpg" title="Outreach Services" />
        <Card image="/assets/donation.jpg" title="Donation" />
      </div>
    </section>
  );
};

export default Services;
