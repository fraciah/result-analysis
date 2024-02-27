const Footer = () => {
  return (
    <footer style={{backgroundColor: '#F5F5F5'}} className="footer mt-5 pt-2 d-flex flex-column justify-content-center align-items-center">
      <div className="p-4">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
            <h5 className="blue mb-3">About Grade 8 Analysis</h5>
            <p className="lh-5">
              This platform provides a comprehensive view of Grade 8 student performance. Explore various charts that depict the overall performance of individual and all Grade 8 students.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="blue mb-3">Information</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="blue mb-3">Follow Us</h5>
            <div className="d-flex gap-4 my-4">
              <i className="fab fa-facebook-f fs-4"></i>
              <i className="fa-brands fa-x-twitter fs-4"></i>
              <i className="fab fa-instagram fs-4"></i>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center border-top pt-2">
            Copyright © ResultAnalysis | All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
