import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import YearList from '../components/navigation/YearList';
import YearContent from '../components/content/YearContent';

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="container-fluid content">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="title">Tech Timeline: Homepage</h1>
              <YearContent />
            </div>
            <div className="col-auto">
              <YearList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
