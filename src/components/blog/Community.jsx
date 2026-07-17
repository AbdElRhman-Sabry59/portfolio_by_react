import "./Blog.css";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function Community() {
  return (
    <section className="coming-soon" id="community">
      <div className="coming-soon-icon">
        <HiOutlineUserGroup />
      </div>
      <h2 className="head">Community</h2>
      <p>
        No talks or public contributions yet, but I'm looking to get more
        involved in the dev community soon — whether that's writing, mentoring,
        or joining local meetups.
      </p>
      <span className="badge">Coming Soon</span>
    </section>
  );
}
