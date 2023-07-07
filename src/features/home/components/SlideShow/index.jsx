import { homeImages } from "assets/home";
import "./style.css";

const Card = (props) => {
  return (
    <div className="max-w-xs rounded-lg shadow-2xl">
      <img
        className="object-cover h-96 rounded-xl"
        src={props.img}
        alt={props.alt}
      />
    </div>
  );
};

const SlideShow = (props) => {
  const imgs = homeImages.slideShowImages;

  return (
    <div className="relative hidden md:block slideshow-container opacity-20 md:opacity-100">
      <div className="absolute top-16 left-96 transition-all duration-300 ">
        <Card img={imgs[1]} alt="Slideshow" />
      </div>
      <div className="absolute top-20 transition-all duration-300">
        <Card img={imgs[2]} alt="Slideshow" />
      </div>
      <div className="absolute left-48 transition-all duration-300">
        <Card img={imgs[0]} alt="Slideshow" />
      </div>
    </div>
  );
};

export default SlideShow;
