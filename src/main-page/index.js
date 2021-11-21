import { useEffect } from 'react';
import './main-page.css';
import Header from './header';

function App() {
  useEffect(() => {
    const fetchHouses = async () => {
      const res = await fetch('/houses.json');
      const houses = await res.json();
    };
    fetchHouses();
  }, []);
  return (
    <div className="container">
      <Header
        subtitle="Providing houses all over the world"
        title="Some title"
      />
    </div>
  );
}

export default App;
