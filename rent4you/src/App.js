import logo from './logo.svg';
import './App.css';
import HeroSection from './components/Herosection';
import BookSection from './components/Booksection';
import CarSection from './components/Carsection';
import AboutSection from './components/Aboutsection';
import BestSection from './components/Bestsection';
import RentSection from './components/Rentsection';
import BlogSection from './components/Blogsection';
import UsSection from './components/Ussection';
import ClientSection from './components/client_section';
import ContactSection from './components/contact_section';
import MapSection from './components/map_section';
import Footer from './components/Footers';
import Footers from './components/Footers';

function App() {
  return (
    <div className="App">
     <HeroSection/>
     <BookSection/>
     <CarSection/>
     <AboutSection/>
     <BestSection/>
     <RentSection/>
     <BlogSection/>
     <UsSection/>
     <ClientSection/>
     <ContactSection/>
     <MapSection/>
     <Footers/>

    </div>
  );
}

export default App;
