import React, { useEffect, useState, useCallback } from "react";
import { createApi } from "unsplash-js";

const PictureBody = () => {
  const unsplash = new createApi({
    accessKey: "ikCcOOSUO28c0x8ec48KC1DZdT5GckI6VET5hJoYKpw",
  });
  const [images, setImages] = useState([]);

  const getPhotos = useCallback(() => {
    try {
      unsplash.photos
        .list({
          page: 1,
          perPage: 10,
        })
        .then((data) => setImages(data.response.results), console.log("data"));
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return (
    <div className="image-body images">
      <div id="image-grid" className="images-grid">
        <div key="index" className="image">
          <div className="image-img">
            {images &&
              images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className="pict-img"
                    id={index}
                    src={image.urls.full}
                    alt=""
                  />
                );
              })}
            {/* <p className="review"> image</p>
            <p className="overview">image</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureBody;
