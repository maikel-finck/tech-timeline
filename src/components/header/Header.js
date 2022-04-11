import { useState } from "react";
import * as Icons from "react-bootstrap-icons";

const Header = () => {
  const [state] = useState({
    logo192: 'assets/header/canada-avatar_64.jpg'
  });
  return (
    <>
      <div className="container-fluid header border-bottom shadow">
        <div className="container bar">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img src={state.logo192} alt="Maikel P C Finck" className="avatar" />
                </div>
                <div className="col-auto">
                  <div className="full-name">Maikel P C Finck</div>
                  <div className="job-description">Software Engineer &bull; Senior Software Architect</div>
                </div>
              </div>
            </div>
            <div className="col"></div>
            <div className="col-auto">
              <a href="https://ciandt.com/" className="external logos ciandt" target="_blank">
                <img src="https://ciandt.com/themes/custom/ciandt_theme/logo.svg" alt="CI&amp;T website" />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://www.linkedin.com/in/maikel-p-c-finck-85151a26" className="external icons linkedin" target="_blank">
                <Icons.Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid post-header">

      </div>
    </>
  );
};

export default Header;
