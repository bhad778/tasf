import Slider from "react-slick";

export const Header = (props) => {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <header id="header">
      <div className="col-md-8 col-md-offset-2 intro-text">
        <h1 className="donated-text">$40,000</h1>
        <h6 className="donated-sub-text">Donated</h6>
        <button
          className="btn btn-custom btn-lg page-scroll"
          type="submit"
          form="myform"
        >
          Donate Now
        </button>
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
          id="myform"
        >
          <input type="hidden" name="hosted_button_id" value="G53CWKDTVBZDU" />
          {/* <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  /> */}
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
      <Slider {...settings}>
        <div class="intro pic3"></div>
        <div class="intro pic6"></div>
        <div class="intro pic2"></div>
        {/* <div class="intro pic4"></div> */}
        {/* <div class="intro pic5"></div> */}
        {/* <div class="intro pic7"></div> */}
      </Slider>
    </header>
  );
};
