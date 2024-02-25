const Footer = () => {
  return (
    <footer className="footer bg-body-secondary mt-5">
      <div className="p-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            <h5 className="blue">About Grade 8 Analysis</h5>
            <p>
              This platform provides a comprehensive view of Grade 8 student performance. Explore various charts that depict the overall performance of individual and all Grade 8 students.
            </p>
            <div>
              Copyright © ResultAnalysis | All rights reserved
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="blue">Information</h5>
            <ul className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
          <h5 className="blue">Subscription</h5>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Your email" />
            <button className="btn btn-primary ml-2" type="submit">Subscribe</button>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
