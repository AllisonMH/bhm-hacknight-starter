import Header from './components/Header';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import './scss/styles.scss';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Timeline />
      </main>
      <Footer />
    </>
  );
};

export default App;
