import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

export default function IndexPage() {
  return (
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
  );
}
