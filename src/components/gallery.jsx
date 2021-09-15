function Gallery(props) {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="portfolio-item">
                      <div className="hover-bg">
                        {" "}
                        <a
                          href={`${d.link}`}
                          title={`${d.title}`}
                          data-lightbox-gallery="gallery1"
                        >
                          <div className="hover-text">
                            <h4>{`${d.title}`}</h4>
                          </div>
                          <img
                            src={`${d.image}`}
                            className="img-responsive"
                            alt={`${d.title}`}
                          />{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
