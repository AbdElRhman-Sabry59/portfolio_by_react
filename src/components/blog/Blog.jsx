import "./Blog.css";
import { MdOutlineArticle } from "react-icons/md";

export default function Blog() {
  return (
    <section className="coming-soon" id="blog">
      <div className="coming-soon-icon">
        <MdOutlineArticle />
      </div>
      <h2 className="head">Blog</h2>
      <p>
        I'm working on writing up what I've learned building React projects —
        practical tips, debugging stories, and lessons from real code. First
        posts are on the way, so check back soon.
      </p>
      <span className="badge">Coming Soon</span>
    </section>
  );
}
