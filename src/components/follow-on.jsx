import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.youtube.com/">
          <FaYoutube size={22} />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram size={22} />
        </a>
        <a href="https://www.twitter.com">
          <FaXTwitter size={22} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
