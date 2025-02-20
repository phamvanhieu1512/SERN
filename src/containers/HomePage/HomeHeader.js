import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars icon-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div className="child-content-heading">
                  <b>Chuyên khoa</b>
                </div>
                <div className="child-content-subheading">
                  Tìm bác sĩ theo chuyên khoa
                </div>
              </div>

              <div className="child-content">
                <div className="child-content-heading">
                  <b>Cơ sở y tế</b>
                </div>
                <div className="child-content-subheading">
                  Chọn bệnh viện phòng khám
                </div>
              </div>

              <div className="child-content">
                <div className="child-content-heading">
                  <b>Bác sĩ</b>
                </div>
                <div className="child-content-subheading">Chọn bác sĩ giỏi</div>
              </div>

              <div className="child-content">
                <div className="child-content-heading">
                  <b>Gói khám</b>
                </div>
                <div className="child-content-subheading">
                  Khám sức khỏe tổng quát
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle icon-support"></i> Hỗ trợ
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>

        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">NỀN TẢNG Y TẾ</div>
            <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN </div>
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
                <div className="text-child">Khám Chuyên khoa</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt icon-in-option"></i>
                </div>
                <div className="text-child">Khám từ xa</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-notes-medical icon-in-option"></i>
                </div>
                <div className="text-child">Khám tổng quát</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-microscope icon-in-option"></i>
                </div>
                <div className="text-child">Xét nghiệm y học</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-head-side-mask icon-in-option"></i>
                </div>
                <div className="text-child">Sức khỏe tin thần</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-tooth icon-in-option"></i>
                </div>
                <div className="text-child">Khám nha khoa</div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
