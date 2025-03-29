"use client";

import { getProductDailySales } from "@/lib/graphqlClient";
import { useQuery } from "@tanstack/react-query";
import { Row, Col } from "antd";
export default function FooterCom() {
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      className="category__flex--items categoryApple__flex--items"
    ></Row>
  );
}
