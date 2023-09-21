import { Title } from "@/components";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <Title className="text-2xl md:text4xl" title="This Page Not Found :(" /> 
      <Link to={"/"}>Return to Home Page</Link>
    </section>
  );
};

export default NotFound;
