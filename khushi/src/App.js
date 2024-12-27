import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from  "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from 'react-reveal/Tada';

function App() {
  const [theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <Layout />
      <div className="container">
      <About />
      <Education />
      <Techstack />
      <Projects />
      <WorkExp />
      <Contact />
      </div>
      <div className='footer pb-3 ms-3'>
        <Tada>
        <h4 className='cr'>
          Copyright &copy; 2024 Designed by KHUSHI
        </h4>
        </Tada>
      </div>
      </div>
      <ScrollToTop smooth 
      color="rgb(52, 84, 74)"
      style={{backgroundColor:"coral", borderRadius:"80px"}} />
    </>
  );
}

export default App;
