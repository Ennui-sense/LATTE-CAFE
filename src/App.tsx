import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Menu from "./sections/Menu/Menu";

function App() {
  return (
    <>
      <Header></Header>

      <main>
				<Hero></Hero>
				<About></About>
				<Menu></Menu>
      </main>
    </>
  );
}

export default App;
