"use client";

import { getProductDailySales } from "@/lib/graphqlClient";
import { useQuery } from "@tanstack/react-query";
import { Row, Col } from "antd";
export default function FooterMid() {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="footerMid">
      <Col
        xs={24}
        sm={12}
        md={8}
        lg={6}
        xl={6}
        className="footer__items footer__items--about"
      >
        <ul>
          <li>Giới thiệu Bạch Long Mobile</li>
          <li>Giới thiệu Bạch Long Care</li>
          <li>Hướng dẫn mua hàng Online</li>
          <li>Hướng dẫn sử dụng Voucher</li>
          <li>Bmember</li>
          <li>Chính sách bảo hành</li>
          <li>Bmember</li>
          <li>Chính sách đổi trả</li>
          <li>Dịch vụ sửa chữa</li>
        </ul>
      </Col>
      <Col
        xs={24}
        sm={12}
        md={8}
        lg={6}
        xl={6}
        className="footer__items footer__items--policy"
      >
        <ul>
          <li>Quy Trình Giao Hàng</li>
          <li>Quy định sao lưu dữ liệu</li>
          <li>Khách hàng doanh nghiệp</li>
          <li>Khách hàng doanh nghiệp</li>
          <li>Trả góp 0% lãi suất</li>
          <li>Đổi cũ lấy mới</li>
          <li>Câu hỏi thường gặp</li>
          <li>Tuyển dụng</li>
          <li>Góp ý / Phản ánh</li>
          <li>Liên hệ</li>
        </ul>
      </Col>
      <Col
        xs={24}
        sm={12}
        md={8}
        lg={6}
        xl={6}
        className="footer__items footer__items--info"
      >
        <h5>THÔNG TIN LIÊN HỆ</h5>
        <ul className="">
          <li>
            <a href="tel:1900636469">
              Mua hàng <span>1900636469</span> ( 8h00 - 21h30 )
            </a>
            <a href="tel:1900636469">
              Bảo hành <span>1900.63.69.81 </span> ( 9h00 - 18h30 )
            </a>
            <a href="tel:1900636469">
              Hợp tác kinh doanh <span>0908.038.038 </span>
            </a>
            <a href="tel:1900636469">
              Email <span>director@bachlongmobile.com</span>
            </a>
          </li>
        </ul>
      </Col>
      <Col
        xs={24}
        sm={12}
        md={8}
        lg={6}
        xl={6}
        className="footer__items footer__items--social"
      >
        <h5>THÔNG TIN LIÊN HỆ</h5>
        <ul className="">
          <li>
            <a href="tel:1900636469">
              Mua hàng <span>1900636469</span> ( 8h00 - 21h30 )
            </a>
            <a href="tel:1900636469">
              Bảo hành <span>1900.63.69.81 </span> ( 9h00 - 18h30 )
            </a>
            <a href="tel:1900636469">
              Hợp tác kinh doanh <span>0908.038.038 </span>
            </a>
            <a href="tel:1900636469">
              Email <span>director@bachlongmobile.com</span>
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
}
