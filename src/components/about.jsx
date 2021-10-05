export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row img-text-container">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/logo.jpg"
              className="img-responsive logo-image-about"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
