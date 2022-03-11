import "./Header.css";
import { connect } from "react-redux";

const Header = ({ totalPrice }) => {
  return (
    <header>
      <nav className="header">
        <div className="container-fluid">
          <div className="row justify-content-end align-items-center">
            <div className="col-4 d-flex flex-column align-items-center">
              <p className="mb-0 text-white side-brand">market</p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center">
              <div className="d-flex flex-row justify-content-between align-items-center  py-3 px-4 price-info">
                <i className="fa-solid fa-bag-shopping text-white"></i>
                <p className="mb-0 text-white ms-2">&#8378; {totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { totalPrice: state.selectedItems.totalPrice };
};
export default connect(mapStateToProps)(Header);
