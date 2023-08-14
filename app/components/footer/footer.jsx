import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 p-4 bg-white z-50">
      <div className="flex justify-between">
        <p>&copy; 2023 Bridging Barriers. All rights reserved.</p>
        <div className="flex space-x-4 mr-20">
          <a
            href="https://www.linkedin.com/company/bridging-barriers/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800 transform hover:scale-150 transition-transform"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/brdgingbarriers"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800 transform hover:scale-150 transition-transform"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/bridgingbarriersuk/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-600 hover:text-pink-800 transform hover:scale-150 transition-transform"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
