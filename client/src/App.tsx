import './styles/App.scss';
import {
  Routes,
  Route,
  // useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
    const location = useLocation();
    const pathname = location.pathname;
    useEffect(() => {
      let title = "";
      let metaDescription = "";
  
      switch (pathname) {
        case "/":
          title = "";
          metaDescription = "";
          break;
      }
  
      if (title) {
        document.title = title;
      }
  
      if (metaDescription) {
        const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
          'head > meta[name="description"]'
        );
        if (metaDescriptionTag) {
          metaDescriptionTag.content = metaDescription;
        }
      }
    }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<div>Hello world!</div>} />
    </Routes>
  );
}

export default App;