import Hero from './components/Hero';
import Sections from './components/Sections';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Sections />
      <Calculator />
      <FAQ />
    </div>
  );
}

export default App;
