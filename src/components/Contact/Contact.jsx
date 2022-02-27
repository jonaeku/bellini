import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="app__contact section__padding">
      <h1 className="app__h1">KONTAKT</h1>
      <hr className="app__hr" />
      <div className="app__wrapper">
        <div className="app__contact-info">
          <h2>
            Eiscafé Bellini <br />
            Familie Vitanza <br />
            Frantzplatz <br />
            67487 Maikammer <br /> <br />
            Telefon: 06321 6790131
          </h2>
        </div>
        <div className="app__wrapper_info">
          <iframe
            className="app__contact-card"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Frantzpl.%20Maikammer+(Eiscaf%C3%A9%20Bellini)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=5722c9ab26a8a2b5be051cd9bd48633a715b6c49"
          ></script>
        </div>
      </div>
    </div>
  );
};

export default Contact;
