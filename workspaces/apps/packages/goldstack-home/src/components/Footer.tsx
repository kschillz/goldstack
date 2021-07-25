import React from 'react';

import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="bg-navy">
        <div className="container space-2">
          <div className="row mb-9">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <span className={styles['brandtext']}>GOLDSTACK</span>
            </div>

            <div className="col-6 col-md-3 col-lg-2 mb-5 mb-lg-0">
              <h5 className="text-white font-weight-bold">Templates</h5>
              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/templates/nextjs">
                    Next.js
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/templates/nextjs-bootstrap">
                    Next.js + Bootstrap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/templates/express-lambda">
                    Express.js + Lambda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/templates/go-gin">
                    Go + Gin + Lambda
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3 col-lg-2 mb-5 mb-lg-0">
              <h5 className="text-white font-weight-bold">Learn More</h5>
              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={process.env.NEXT_PUBLIC_GOLDSTACK_DOCS}
                  >
                    Documentation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/terms-and-conditions">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-5" hidden>
              <form className="js-validate mb-2">
                <h5 className="text-white font-weight-bold mb-3">
                  Stay up to date
                </h5>
                <div className="form-row">
                  <div className="col">
                    <div className="js-form-message">
                      <label className="sr-only" htmlFor="subscribeSrEmail">
                        Email address
                      </label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="subscribeSrEmail"
                          placeholder="Email address"
                          aria-label="Email address"
                          required
                          data-msg="Please enter a valid email address."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>

              <p className="text-white-70 small mb-0">
                New templates or big discounts. Never spam.
              </p>
            </div>
          </div>

          <div className="row align-items-md-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="small text-white-70 mb-0">
                © 2020-2021 Pureleap Pty. Ltd. All rights reserved.
              </p>
            </div>

            <div className="col-md-6 text-md-right" hidden>
              <ul className="list-inline mb-0">
                <li className="list-inline-item mb-2 mb-sm-0">
                  <a className="btn btn-xs btn-icon btn-ghost-light" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item mb-2 mb-sm-0">
                  <a className="btn btn-xs btn-icon btn-ghost-light" href="#">
                    <i className="fab fa-google"></i>
                  </a>
                </li>
                <li className="list-inline-item mb-2 mb-sm-0">
                  <a className="btn btn-xs btn-icon btn-ghost-light" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item mb-2 mb-sm-0">
                  <a className="btn btn-xs btn-icon btn-ghost-light" href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item mb-2 mb-sm-0">
                  <a className="btn btn-xs btn-icon btn-ghost-light" href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
