import React from "react";
import { NavLink } from "react-router-dom";
import { Movie } from "./Movie";
import "../Index.css";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two--cols">
            <div className="section-hero--content">
              <p className="hero-subheading">
                Explore the Latest in Tech Industries
              </p>
              <h1 className="hero-heading">
                Your Destination for Cutting-Edge Gadgets!
              </h1>
              <p className="hero-para">
                Welcome to Thapa eComStore, your ultimate destination for
                cutting-edge gadgets! Explore the latest in tech innovation and
                style with us. Shop now and discover a world of possibilities!
              </p>
              <div className="hero-btn mb-5">
                <NavLink to={Movie} className="btn">
                  Explore Now
                </NavLink>
              </div>
            </div>
            <div
              className="section-hero-image"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <figure>
                <img
                  src="./back-image.png"
                  alt="coding languages using html css js"
                  className="image-new"
                />
              </figure>
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1696038172">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            ></svg>
          </div>
        </section>
      </main>
    </>
  );
};
