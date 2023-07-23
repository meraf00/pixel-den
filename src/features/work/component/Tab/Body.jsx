import { FadeIn } from "components/Animations";

const Body = ({ children }) => {
  return <FadeIn> {children} </FadeIn>;
};

export default Body;
