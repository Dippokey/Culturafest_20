import React from 'react';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

function Contact() {
  return (
    <div className="Contact">
      <footer className="footer bg-dark text-white">
        <div className="container" id="foot">
          <div className="footer-row">
            {/* <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div> */}
            <div className="col-7 col-sm-5">
              <h5>Our Address</h5>
              <address>
                132, ITPL Main Rd, Brookefield, <br></br>
                Sri Nivasa Reddy Layout, Kundalahalli,<br></br>
                Bengaluru, Karnataka 560037<br></br>
                <br></br>
                For Registration Queries:<br></br>
                <i className="fa fa-phone fa-lg"></i> SHRAVAN SUNDAR : +91 96207 36801<br></br>
                <i className="fa fa-phone fa-lg"></i> KANYA NAYAK : +91 9110264655<br></br>
                <i className="fa fa-envelope fa-lg"></i> : 
                  <a href="mailto:cultura@cmrit.ac.in">
                   cultura@cmrit.ac.in
                  </a>
              </address>


            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/cmritcultura"><i className="fa fa-instagram"></i></a>
                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/culturacmrit"><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/cmritcultura"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-social-icon btn-google" href="http://youtube.com/Cultura'20"><i className="fa fa-youtube"></i></a>

              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright CMR Institute of Tecnology</p>
            </div>
          </div>
        </div>
      </footer>

    </div>

  );
}

export default Contact;
