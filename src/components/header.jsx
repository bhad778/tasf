export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>$10,538 donated</h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
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
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="G53CWKDTVBZDU"
                  />
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
