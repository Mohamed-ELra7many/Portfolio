import './App.css';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Pages from './components/pages/Pages';

function App() {
  useEffect(() => {     // to animation items page
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
