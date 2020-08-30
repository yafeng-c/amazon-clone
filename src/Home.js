import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/Lucifer_S5/LUCIF_S5_GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_de-DE._CB407853206_.jpg"
      />
      <div className="home_row">
        <Product
          id="1"
          title="Homemory Realistic and Bright Flickering Bulb Battery Operated Flameless LED Tea Light for Seasonal & Festival Celebration"
          image="https://images-na.ssl-images-amazon.com/images/I/51aJaF1EDhL._AC_SL1098_.jpg"
          price={9.59}
          rating={4}
        />
        <Product
          id="2"
          title="CeraVe Moisturizing Cream for Normal to Dry Skin | 19 Ounce | Fragrance Free | Packaging May Vary"
          image="https://images-na.ssl-images-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg"
          price={16.08}
          rating={4}
        />
      </div>

      <div className="home_row">
        <Product
          id="3"
          title="Homemory Realistic and Bright Flickering Bulb Battery Operated Flameless LED Tea Light for Seasonal & Festival Celebration"
          image="https://images-na.ssl-images-amazon.com/images/I/51aJaF1EDhL._AC_SL1098_.jpg"
          price={9.59}
          rating={4}
        />
        <Product
          id="4"
          title="CeraVe Moisturizing Cream for Normal to Dry Skin | 19 Ounce | Fragrance Free | Packaging May Vary"
          image="https://images-na.ssl-images-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg"
          price={16.08}
          rating={4}
        />
        <Product
          id="5"
          title="CeraVe Moisturizing Cream for Normal to Dry Skin | 19 Ounce | Fragrance Free | Packaging May Vary"
          image="https://images-na.ssl-images-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg"
          price={16.08}
          rating={4}
        />
      </div>

      <div className="home_row">
        <Product
          id="6"
          title="Homemory Realistic and Bright Flickering Bulb Battery Operated Flameless LED Tea Light for Seasonal & Festival Celebration"
          image="https://images-na.ssl-images-amazon.com/images/I/51aJaF1EDhL._AC_SL1098_.jpg"
          price={9.59}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
