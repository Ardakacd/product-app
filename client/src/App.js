import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Main/Content";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import MobileContent from "./components/MobileTablet/MobileContent";
import getInitialData from "./actions/getInitialData";
import { useMediaQuery } from "react-responsive";

const App = ({ getInitialData, items }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const loadingSpinner = () => {
    return (
      <div className="d-flex align-items-center justify-content-center mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  useEffect(() => {
    getInitialData();
  }, [getInitialData]);
  return (
    <React.Fragment>
      <Header />
      {isTabletOrMobile && (
        <React.Fragment>
          {items === null ? (
            loadingSpinner()
          ) : (
            <React.Fragment>
              <MobileContent />
              <Footer />
            </React.Fragment>
          )}
        </React.Fragment>
      )}

      {!isTabletOrMobile && (
        <React.Fragment>
          {items === null ? (
            loadingSpinner()
          ) : (
            <React.Fragment>
              <Content />
              <Footer />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps, { getInitialData })(App);
