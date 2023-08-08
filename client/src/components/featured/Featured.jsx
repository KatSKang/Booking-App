import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.tripsavvy.com/thmb/jK3TncsO17cxav9z70CxJxCy8ds=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-899489384-5bb3c80ec9e77c00260baa13.jpg"
          alt="featured city"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>San Francisco</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.tripsavvy.com/thmb/LVCHelFcmjHp7ygqdC4bMGBc17A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-560333851-59dad431c4124400118cea5c.jpg"
          alt="featured city"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Los Angeles</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.tripsavvy.com/thmb/TLs-GQ44gWS3O46VuLof4SOisyc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HowtogetfromDenvertoLasVegas-b8b5c80191144ee88a407210cb0395ae.jpg"
          alt="featured city"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Las Vegas</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
