import { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import axios from "axios";

export default function IndexPage() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [newsHeadlines, setNewsHeadlines] = useState([]);

  useEffect(() => {
    axios.get("/daily-quote").then(async (response) => {
      const { data } = response;
      setContent(data.content);
      setAuthor(data.author);
    });
  }, []);

  useEffect(() => {
    axios.get("/news").then(async (response) => {
      const { data } = response;
      setNewsHeadlines(data.articles);
    });
  }, []);

  return (
    <div>
      <div className="gap-10 homepage">
        <div className="homepageheadingcontainer">
          <Bounce left>
            <h1 className="tagline text-6xl">
              Welcome to a Space of Understanding and Support
            </h1>
          </Bounce>
        </div>
        <div className="homepagepicontainer">
          <Zoom left>
            <img className="homepagepic" src="/images/homepagepic.jpg"></img>
          </Zoom>
        </div>
      </div>
      <div className="quotecontainer">
        <h2 className="quoteheading">
          Inspirational Morsels: A Quote Crafted for You
        </h2>
        <p className="quotecontent">{content}</p>
        <p className="quotecontent">- {author}</p>
      </div>
      <div className="quotecontainer">
        <h2 className="quoteheading">Latest Health News</h2>
        <ul>
          {newsHeadlines.map((headline, index) => (
            <li key={index}>
            <div className="headline">
              <a href={headline.url} target="_blank" rel="noopener noreferrer">
                <h2 className="newstitle">{headline.title}</h2>
              </a>
              <p>{headline.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
