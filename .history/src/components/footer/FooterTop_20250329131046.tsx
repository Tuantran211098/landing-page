"use client";

import { Row, Col } from "antd";
export default function FooterTop() {
  return (
    <>
      <h4>Cửa hàng gần bạn</h4>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="footerTop">
        <Col xs={24} sm={12} md={12} lg={12} xl={12} className="footer__items">
          <h5>Bạch long gần bạn</h5>
          <ul>
            <li>Apple Center: 83 Trần Phú, P.4, Q.5</li>
            <li>Samsung Premium Store: 134 Trần Phú, P.4, Q.5</li>
            <li> 136 Trần Phú, P.4, Q.5</li>
            <li>225 Trần Quang Khải, P.Tân Định, Q.1</li>
            <li>251 - 253 Trần Hưng Đạo, P.Cô Giang, Q.1</li>
            <li>581 Nguyễn Thị Thập, P.Tân Phong, Q.7</li>
            <li>316 - 318 Ba Tháng Hai, P.12, Q.10</li>
            <li> 480 - 482 Quang Trung, P.10, Gò Vấp</li>
            <li>194 Võ Văn Ngân, P.Bình Thọ, Thủ Đức</li>
            <li>Trung tâm bảo hành: 81 Trần Phú, P.4, Q.5</li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12} className="footer__items">
          <h5>Bạch long care</h5>
          <ul>
            <li>TTBH ủy quyền: 81 Trần Phú, P.4, Q.5</li>
            <li>Care 1: 134 Trần Phú, P.4, Q.5 (SPS Samsung)</li>
            <li> Care 2: 136 Trần Phú, P.4, Q.5</li>
            <li>Care 3: 581C Nguyễn Thị Thập, P.Tân Phong, Q.7</li>
            <li>Care 4: 251-253 Trần Hưng Đạo, P. Cô Giang, Q.1</li>
            <li>Care 5: 225 Trần Quang Khải, P.Tân Định, Q.1</li>
            <li>Care 6: 316 Ba Tháng Hai, P.12, Q.10</li>
            <li>Care 7: 318 Ba Tháng Hai, P.12, Q.10</li>
            <li>Care 8: 194 Võ Văn Ngân, Thủ Đức</li>
            <li>Care 9: 480-482 Quang Trung, P.10, Gò Vấp</li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
