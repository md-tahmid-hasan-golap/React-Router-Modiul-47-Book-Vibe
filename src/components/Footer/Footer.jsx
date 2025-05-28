import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-neutral text-neutral-content mt-10 pb-10">
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <nav className="flex justify-center gap-8">
        <a href="https://www.facebook.com/g.lap.raj">
          <FaFacebookSquare size={25} />
        </a>
        <a href="https://www.youtube.com/@ProgrammingHeroCommunity">
          <IoLogoYoutube size={25} />
        </a>
        <a href="">
          <CiInstagram size={25} />
        </a>
        <a href="https://github.com/md-tahmid-hasan-golap">
          <FaGithub size={25} />
        </a>
      </nav>
    </div>
  );
};

export default Footer;
