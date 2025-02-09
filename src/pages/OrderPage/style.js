import { Checkbox } from "antd";
import styled from "styled-components";

export const WrapperStyleHeader = styled.div`
  background: rgb(255, 255, 255);
  padding: 9px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  span {
    color: rgb(36, 36, 36);
    font-weight: 400;
    font-size: 13px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
  }
`;

export const WrapperStyleHeaderDilivery = styled.div`
  background: rgb(255, 255, 255);
  padding: 9px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  span {
    color: rgb(36, 36, 36);
    font-weight: 400;
    font-size: 13px;
  }
  margin-bottom: 4px;
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const WrapperLeft = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WrapperListOrder = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }
`;

export const WrapperItemOrder = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  background: #fff;
  margin-top: 12px;
  @media (max-width: 768px) {
    padding: 12px 16px;
    margin-top: 10px;
  }
`;

export const WrapperPriceDiscount = styled.span`
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 4px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const WrapperCountOrder = styled.div`
  display: flex;
  align-items: center;
  width: 84px;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const WrapperRight = styled.div`
  width: 320px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WrapperInfo = styled.div`
  padding: 17px 20px;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const WrapperTotal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 17px 20px;
  background: #fff;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #38d7e7;
    border-color: #38d7e7;
  }
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: #38d7e7;
  }
`;
