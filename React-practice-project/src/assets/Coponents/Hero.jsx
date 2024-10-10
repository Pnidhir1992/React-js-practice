import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="grid-columne-tow">
          <div className="contacnt-part">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <span className="divider-line"></span>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="btn-group">
              <button className="btn-primary">SHOP NOW</button>
              <button className="btn-secondary">Know More</button>
            </div>
          </div>
          <div className="image-contacnt">
            <img src="../public/shoe_image.png" alt="images" />
          </div>
        </div>
      </section>
    </>
  );
};
