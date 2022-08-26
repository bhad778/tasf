import React, { useState } from "react";

import Slider from "react-slick";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export const Header = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <h1 className="donated-text">$100,000</h1>
        <h6 className="donated-sub-text">Donated</h6>
        <button className="btn btn-custom btn-lg page-scroll" type="submit" form="myform">
          Donate Now
        </button>

        <h1 className="donation-letter-text" onClick={handleOpen}>
          View 2021 Cancer Research Institute Donation Letter
        </h1>

        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box class="eventModal">
            <iframe
              class="scribd_iframe_embed"
              title="TASF TT2 1 Page-1"
              src="https://www.scribd.com/embeds/589372448/content?start_page=1&view_mode=scroll&access_key=key-A0OxuXCcBgb7nYr1IcM8"
              data-auto-height="false"
              data-aspect-ratio="0.7729220222793488"
              scrolling="no"
              id="doc_10736"
              width="100%"
              height="600"
              frameborder="0"
            ></iframe>
          </Box>
        </Modal>

        <form action="https://www.paypal.com/donate" method="post" target="_top" id="myform">
          <input type="hidden" name="hosted_button_id" value="G53CWKDTVBZDU" />

          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <Slider {...settings}>
        <div className="intro pic1"></div>
        <div className="intro pic2"></div>
        <div className="intro pic3"></div>
        <div className="intro pic4"></div>
        {/* <div className="intro pic5"></div>
        <div className="intro pic6"></div>
        <div className="intro pic7"></div>
        <div className="intro pic8"></div>  */}
        {/* <div className="intro pic9"></div>
        <div className="intro pic10"></div>
        <div className="intro pic11"></div>
        <div className="intro pic12"></div> */}
      </Slider>
    </header>
  );
};
