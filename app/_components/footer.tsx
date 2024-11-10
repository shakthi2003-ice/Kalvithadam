"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  return (
    <div className="flex gap-[850px] pt-10 pb-5">
      <div>© 2025 IGNITTE. All rights reserved</div>
      <div className="flex gap-2 justify-center items-center">
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
        <FaYoutube />
        <FaTwitter />
      </div>
    </div>
  );
}
