
import Sale from '../assets/images/Sale.jpg';
import '../pages/home.css';
import Scrollbar from '../components/Scrollbar/scrollbar.jsx';

const Home = ({onSideBarOpen}) => {
  return (
    <div className={`home-container ${onSideBarOpen ? 'shifted' : ''}`}>
      
      <div className="content">
        <div className="bannerDiv">
          <img src={Sale} alt="Hero" className="banner" />
        </div>

        <div className="bestSeller">
          <h2>Best Seller</h2>
          <div className="bestSellerProducts">
            <Scrollbar />
          </div>
        </div>

        <div className="topBrand">
          <h2>Top Brand</h2>
          <div className="topBrandProducts">
            <Scrollbar />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
