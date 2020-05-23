import React from 'react';
import '../scss/footer.scss'



function Footer() {
  return (
<div style={{background:"rgb(227, 242, 253)"}}>
    <footer className="page-footer font-small blue pt-4 container ">
    {/* Footer Links */}
    <div className="container-fluid text-center text-md-left">
      {/* Grid row */}
      <div className="row">
        {/* Grid column */}
        <div className="col-md-6 mt-md-0 mt-3">
          {/* Content */}
          <h5 className="text-uppercase">PhoneX</h5>
          <p>The Official Company </p>
        </div>
        {/* Grid column */}
        <hr className="clearfix w-100 d-md-none pb-3" />
        {/* Grid column */}
        <div className="col-md-3 mb-md-0 mb-3">
          {/* Links */}
          <h5 className="text-uppercase">Social NetWork</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="linkNetWorkSocial" ><img style={{width:16}}src="https://www.facebook.com/images/fb_icon_325x325.png" alt=""/> FaceBook</a>
            </li>
            <li>
              <a href="#!" className="linkNetWorkSocial"><img style={{width:16}}src="https://lh3.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw" alt=""/> Instagram</a>
            </li>
            <li>
              <a href="#!" className="linkNetWorkSocial"><img style={{width:16}}src="https://lh3.googleusercontent.com/fqYJHtyzZzA4vacRzeJoB93QNvA5-mvR-8UB5oVLxdYDSTpfLp_KgYD4IqVGJUgFEJo" alt=""/>  Linkedin</a>
            </li>
            <li>
              <a href="#!"className="linkNetWorkSocial"><img style={{width:16}}src="https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc" alt=""/> Youtube</a>
            </li>
          </ul>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 mb-md-0 mb-3">
          {/* Links */}
          <h5 className="text-uppercase">Payments</h5>
          <ul className="list-unstyled">
            <li>
              <img style={{width:16}}src="https://static.mservice.io/img/logo-momo.png" alt=""/> Momo
            </li>
            <li>
            <img style={{width:16}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt=""/> Master Card
            </li>
            <li>
            <img style={{width:16}}src="data:image/png;base64,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" alt=""/> Airpay
            </li>
            <li>
            <img style={{width:16}}src="https://resources.mynewsdesk.com/image/upload/c_limit,dpr_2.625,f_auto,h_700,q_auto,w_360/jchcpbfystf9jjbtinly.jpg" alt=""/> Visa
            </li>
          </ul>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
    {/* Footer Links */}
    {/* Copyright */}
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <a href="https://mdbootstrap.com/"> PhoneX</a>
    </div>
    {/* Copyright */}
  </footer>
  </div>


  );
}

export default Footer;
