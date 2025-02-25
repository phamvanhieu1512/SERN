import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.png";
import { FormattedMessage } from "react-intl";

class HomeHeader extends Component {
  render() {
    console.log("Check props:", this.props);
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars icon-bars"></i>
              <img className="header-logo" src={logo} />
            </div>
            <div className="center-content">
              <div className="child-content">
                <div className="child-content-heading">
                  <b>
                    <FormattedMessage id="homeheader.specialty" />
                  </b>
                </div>
                <div className="child-content-subheading">
                  <FormattedMessage id="homeheader.searchdoctor" />
                </div>
              </div>

              <div className="child-content">
                <div className="child-content-heading">
                  <b>
                    <FormattedMessage id="homeheader.heath-facility" />
                  </b>
                </div>
                <div className="child-content-subheading">
                  <FormattedMessage id="homeheader.select-room" />
                </div>
              </div>

              <div className="child-content">
                <div className="child-content-heading">
                  <b>
                    <FormattedMessage id="homeheader.doctor" />
                  </b>
                </div>
                <div className="child-content-subheading">
                  <FormattedMessage id="homeheader.select-doctor" />
                </div>
              </div>

              <div className="child-content">
                <div className="child-content-heading">
                  <b>
                    <FormattedMessage id="homeheader.fee" />
                  </b>
                </div>
                <div className="child-content-subheading">
                  <FormattedMessage id="homeheader.check-heath" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle icon-support"></i>
                <FormattedMessage id="homeheader.support" />
              </div>
              <div className="language-vi active">VN</div>
              <div className="language-en active">EN</div>
            </div>
          </div>
        </div>

        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <FormattedMessage id="banner.title1" />
            </div>
            <div className="title2">
              <FormattedMessage id="banner.title2" />
            </div>
            <div className="search">
              <i className="fas fa-search icon-search"></i>
              <input
                className="search-input"
                type="text"
                placeholder="Tìm chuyên khoa khám bệnh"
              />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital icon-in-option"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child1" />
                </div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt icon-in-option"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child2" />
                </div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-notes-medical icon-in-option"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child3" />
                </div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-prescription-bottle-alt icon-in-option"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child4" />
                </div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md icon-in-option"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child5" />
                </div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-briefcase-medical icon-in-option"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.child6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
