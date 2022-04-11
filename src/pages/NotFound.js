import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import YearList from '../components/navigation/YearList';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container not-found">
        <div className="row">
          <div className="col">
            <h1 className="title">404 - Not found</h1>
            <h2 className="sub-title">Something went wrong with the space-time quantum entanglement communication...</h2>
          </div>
          <div className="col-auto">
            <YearList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
