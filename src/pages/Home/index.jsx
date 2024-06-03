import React from "react";
import Hero from "./Hero";
import Why from "./Why";
import Testimonial from "./Testimonial";
import Stats from "./Stats";
import Order from "./Order";
import Medication from "./Medication";
import Consultation from "./Consultation";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Stats />
      <Order />
      <Medication />
      <Consultation />
      <Testimonial />
    </>
  );
}
