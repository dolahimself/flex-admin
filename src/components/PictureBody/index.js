import React, { useEffect, useState, useCallback } from "react";
import { createApi } from "unsplash-js";

const PictureBody = (props) => {
  const { searchResults } = props;
  const unsplash = new createApi({
    accessKey: "ikCcOOSUO28c0x8ec48KC1DZdT5GckI6VET5hJoYKpw",
  });
  const [images, setImages] = useState([]);
  if (searchResults.length > 0 && images.length === 0) {
    console.log(searchResults);
    setImages(searchResults);
  }

  const getPhotos = useCallback((page, perPage) => {
    try {
      unsplash.photos
        .list({
          page: page,
          perPage: perPage,
        })
        .then((data) => setImages(data.response.results), console.log("data"));
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    getPhotos(1, 10);
  }, [getPhotos, setImages]);

  return (
    <div className="image-body images">
      <div id="image-grid" className="images-grid">
        <div key="index" className="image">
          <div className="image-img">
            {images &&
              images.map((image, index) => {
                return (
                  <>
                    <img
                      key={index}
                      className="pict-img"
                      id={index}
                      src={image.urls.full}
                      alt=""
                    />
                    {/* <p key={index} id={index} className="review">
                      {image.user.first_name}, {image.user.total_photos}{" "}
                    </p> */}
                  </>
                );
              })}
            {/* <p className="review"> image</p> */}
            <div className="overview">
              <p className="review">{} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureBody;
