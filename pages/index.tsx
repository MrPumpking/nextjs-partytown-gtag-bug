import { NextPage } from "next";
import { Menu } from "../components/Menu";

const Home: NextPage = () => {
  return (
    <div>
      <div>Home page</div>
      <Menu />
    </div>
  );
};

export default Home;
