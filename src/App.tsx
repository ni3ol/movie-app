import { MoviesPage } from "./movies/pages/movies-page";
import { Layout } from "./shared/components/layout";
import { NavBar } from "./shared/components/nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <Layout>
        <MoviesPage />
      </Layout>
    </>
  );
}

export default App;
