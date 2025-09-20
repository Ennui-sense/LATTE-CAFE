import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Menu from "./sections/Menu/Menu";
import Info from "./sections/Info/Info";
import Interior from "./sections/Interior/Interior";
import Award from "./sections/Award/Award";

function App() {
  return (
    <>
      <Header></Header>

      <main>
				<Hero></Hero>
				<About></About>
				<Menu></Menu>
				<Info></Info>
				<Interior></Interior>
				<Award></Award>
      </main>
    </>
  );
}

export default App;
