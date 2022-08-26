import React, { useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Services = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box class="eventModal">
                <iframe
                  class="scribd_iframe_embed"
                  title="TASF TT2 1 Page"
                  src="https://www.scribd.com/embeds/587049838/content?start_page=1&view_mode=scroll&access_key=key-9Xj7jKoW5IG21sp7ouGk"
                  data-auto-height="false"
                  data-aspect-ratio="0.7729220222793488"
                  scrolling="no"
                  id="doc_23631"
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></iframe>
              </Box>
            </Modal>
          </div>
          <h2>Upcoming Events</h2>
        </div>
        <div className="row events-container">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 event" onClick={handleOpen}>
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <p>{d.date}</p>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
