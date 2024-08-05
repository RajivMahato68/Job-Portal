import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {FaGithub,FaSquareInstagram,FaFacebook,FaLinkedin} from "react-icons/fa6";
import logo from "../asset/logo.jpg";

function Footer() {
  const {isAuthenticated} = useSelector(state => state.user)
  return (
    <>
     <footer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Guwarko lalitpr,Nepal</li>
          <li>rajipmahato68@gmail.com</li>
          <li>+977 9824830624</li>
          </ul>
      </div>

      <div>
        <h4>Quick Link</h4>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/jobs"}>Jobs</Link></li>
          {
            isAuthenticated && <li><Link to={"/dashboard"}>Dashboard</Link></li>
          }
        </ul>
      </div>

      <div>
        <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"https://github.com/RajivMahato68"} target='_blank'>
              <span><FaGithub/></span>
              <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.facebook.com/rajipkumar.mahato.16/"} target='_blank'>
              <span><FaFacebook /></span>
              <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/rajivkumarmahato_/"} target='_blank'>
              <span><FaSquareInstagram/></span>
              <span>Instgram</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/rajiv-mahato-008b48270/"} target='_blank'>
              <span><FaLinkedin /></span>
              <span>Linkdin</span>
              </Link>
            </li>
            </ul>
      </div>
    </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved by 💖💖 Rajiv Mahato
      </div>

      
      </>
  )
}

export default Footer
