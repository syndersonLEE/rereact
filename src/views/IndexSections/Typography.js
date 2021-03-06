/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Experience extends React.Component {
  render() {
    return (
      <>
        <h3 className="h3 text-danger font-weight-bold mt-md">Experience</h3>
        <Row className="py-3 align-items-center">
          <Col className="mb-5" sm="3">
            <a href="http://sopt.org">
              <img className="img-fluid" alt="sopt" src={require("images/sopt.png")} width="150px"></img>
            </a>
          </Col>
          <Col sm="9">
            2018.09 ~ 2019.08
            <p><br/>대학생 연합 IT벤처 창업 동아리 S.O.P.T
            <br/>23,24기 서버파트</p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col className="mb-5" sm="3">
            <a href="https://swmaestro.org/">
              <img className="img-fluid" alt="swm" src="https://swmaestro.org/static/sw/images/logo_copy.png" width="150px"></img>
            </a>
          </Col>
          <Col sm="9">
            2019.06 ~ 2019.11
            <p><br/>10기 SW마에스트로 과정
            <br/>Team greyGlass</p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col className="mb-5" sm="3">
            <a href="https://neuroacs.com/">
              <img className="img-fluid" alt="nexters" src={require("images/nexters.png")} width="150px"></img>
            </a>
          </Col>
          <Col sm="9">
            2020.06 – NOW<br/>
            <p><br/>개발자와 디자이너를 위한 IT 연합동아리 Nexters
            <br/>17, 18기</p>
          </Col>
        </Row>
        <h3 className="h3 text-primary font-weight-bold mt-md">Work Experience</h3>
        <Row className="py-3 align-items-center">
          <Col className="mb-5" sm="3">
            <a href="https://neuroacs.com/">
              <img className="img-fluid" alt="neuroacs" src="https://neuroacs.com/img/logo_neuro_big.png" width="150px"></img>
            </a>
          </Col>
          <Col sm="9">
            2018.06 – 2018.08<br/>
            ㈜Neuro Associates 웹 개발 인턴<br/><br/>
            <p>
            D3.js를 이용한 데이터 시각화<br/>
            HTML / CSS / Javascript / D3.js<br/>
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col className="mb-5" sm="3">
            <a href="https://concat.kr/">
              <img className="img-fluid" alt="concat" src="https://concat.kr/images/concat-black-logo.png" width="150px"></img>
            </a>
          </Col>
          <Col sm="9">
            2018.12 – 2019.06<br/>
            CONCAT INC. React Native 개발 인턴<br/><br/>
            <p>
            미세먼지 정보 제공 및 제품 판매 어플 뷰 개발 ‘서울에어’<br/>
            React Native / Node.js / Google Cloud Service<br/>
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col className="mb-5" sm="3">
            <a href="https://www.hyundai-autoever.com/">
              <img className="img-fluid" alt="autoever" src="https://www.hyundai.co.kr/images/affiliates/others/img-autoever-logo.gif" width="150px"></img>
            </a>
          </Col>
          <Col sm="9">
            2020.03 – 2021.02<br/>
            현대오토에버 경영데이터분석팀<br/><br/>
            <p>
            현대-기아 판매법인 데이터 무결성 관리<br/>
            Oracle ExaDB / Informatica PowerCenter<br/>
            상용 차트 라이브러리 활용 대시보드 개발/운영<br/>
            JSP(전자정부프레임워크) / Javascript<br/>
            </p>
          </Col>
        </Row>
        <h2 className="h3 text-warning font-weight-bold mt-lg mb-5">
          <span>사이드 프로젝트 목록</span>
        </h2>
        <Row>
          <Col sm="3" xs="6">
            <p className="d-block text-uppercase font-weight-bold mb-4">
              Artoo
            </p>
            <p className="small">학생 예술 작가들의 작품 판매 앱</p>
            <a href="https://github.com/soptart/Server">
            <img
              alt="..."
              className="mt-3 img-fluid rounded shadow"
              src={require("images/Artoo.png")}
              style={{ width: "150px" }}
            />
            </a>
          </Col>
          <Col sm="3" xs="6">
            <p className="d-block text-uppercase font-weight-bold mb-4">
              LocAin
            </p>
            <p className="small">인천시 유휴 공간 대여 앱</p>
            <a href="https://github.com/syndersonLEE/LocAinServer">
            <img
              alt="..."
              className="mt-3 img-fluid rounded shadow"
              src={require("images/LocAin.png")}
              style={{ width: "150px" }}
            />
            </a>
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <p className="d-block text-uppercase font-weight-bold mb-4">
              전하
            </p>
            <p className="small">서울시의 전통체험 / 한옥 예약 앱</p>
            <a href="https://github.com/JeonHa/JeonHa-Server">
            <img
              alt="..."
              className="mt-3 img-fluid rounded shadow-lg"
              src={require("images/jeonha.png")}
              style={{ width: "150px" }}
              onMouseOver="this.innerHTML='test'"
            />
            </a>
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <p className="d-block text-uppercase font-weight-bold mb-4">
              올라
            </p>
            <p className="small">NH농협 카페 사이렌오더 / 생산지 추적 앱</p>
            <a href="https://github.com/OrlaProject/Orla_Server">
            <img
              alt="..."
              className="mt-3 img-fluid rounded shadow-lg"
              src={require("images/orla.png")}
              style={{ width: "150px" }}
            />
            </a>
          </Col>
        </Row>
        <br/><br/><br/>
        <Row>
          
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <p className="d-block text-uppercase font-weight-bold mb-4">
              쉬자
            </p>
            <p className="small">취준생을 위한 정보 제공 앱</p>
            <a href="https://github.com/soptrest/soptgetrestserver">
            <img
              alt="..."
              className="mt-3 img-fluid rounded-circle shadow-lg"
              src={require("images/get-rest.png")}
              style={{ width: "150px" }}
              onMouseOver="this.innerHTML='test'"
            />
            </a>
          </Col>
          <Col sm="3" xs="6">
            <p className="d-block text-uppercase font-weight-bold mb-4">
                짤내투어
            </p>
            <p className="small">간단하게 만드는 우리만의 짤 생성기 앱</p>
            <a href="https://github.com/amathon-2019/GodokChatting">
            <img
              alt="..."
              className="mt-3 img-fluid rounded shadow"
              src={require("images/zzal.png")}
              style={{ width: "150px" }}
            />
            </a>
          </Col>
          <Col sm="3" xs="6">
            <p className="d-block text-uppercase font-weight-bold mb-4">
              카툰월드
            </p>
            <p className = "small">사용자가 만들어가는 만화 앱</p>
            <a href="https://github.com/kcartoonworld/kcartoonserver">
            <img
              alt="..."
              className="mt-3 img-fluid rounded shadow"
              src={require("images/cartoon.png")}
              style={{ width: "150px" }}
            />
            </a>
          </Col>
          <Col sm="3" xs="6">
            <p className="d-block text-uppercase font-weight-bold mb-4">
              Lets-Touch
            </p>
            <p className="small">손 마디 압력 센서, 밴딩 센서 및 가속도 센서를 이용한 장갑 디바이스</p>
            <a href="https://github.com/syndersonLEE/LetsTouch">
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("images/letstouch.png")}
              style={{ width: "150px" }}
            />
            </a>
          </Col>
        </Row>
        <div className="py-3 align-items-center">
          <p className="font-weight-bold">LetsTouch 시연영상</p>
          <div>
            <video style={{width: "500px"}} src={require('images/letstouch_final.mp4')} muted autoplay controls>
              No support video in browser
            </video>
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
