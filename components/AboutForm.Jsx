import React from "react";
import heroimage from "../public/heroimage.jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="grid max-w-6xl gap-12 mx-auto md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-lg font-semibold text-gray-600">ABOUT</p>
          <h2 className="mb-6 text-4xl font-bold">Who are We?</h2>
          <p className="mb-6 text-lg leading-relaxed">
            ReSet is a not-for-profit organization that is poised to assist
            emergency refugees from diverse backgrounds attain council and
            resources for integration purposes in Ontario.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Our staff provide clients with one-on-one consultations and referral
            services to help them achieve desired outcome in settling in
            Ontario. Reset has extensive experience servicing the Refugee
            population through research and innovative resource development that
            has helped provide effective customer service to individuals and
            families within this sector. Our team has provided our clients with
            access to affordable housing and utilizing various translation
            services in order to provide optimal services to refugee and
            newcomers within our community.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            With our key strategy, we are committed to delivering essential
            services to assist refugee clients with integrating in to their
            local community. ReSet marketing approach is further centered on
            higher performance in the following areas: value of customer
            services and resources, and access to qualified government
            affiliates.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={heroimage} alt="aboutimage" height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
