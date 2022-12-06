import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: inline-block;
  height: 140px;
  width: 100%;
  padding: 25px 0;
  background-color: #3c5769;
  color: white;
`;

const HeaderTitleH1 = styled.h1`
  font-size: 48px;
  text-align: center;
`;

const HeaderDesc = styled.p`
  font-size: 16px;
  line-height: 20px;
  margin-top: 14px;
  text-align: center;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderTitleH1>Shailendra Gupta</HeaderTitleH1>
      <HeaderDesc>
        <i className="fa fa-phone-square" />
        &nbsp;&nbsp;+91 9602425641&nbsp;&nbsp;&nbsp;
        <span className="bold">|&nbsp;&nbsp;</span>
        &nbsp;
        <i className="fa fa-envelope" />
        &nbsp;&nbsp;gup.sg14@gmail.com&nbsp;&nbsp;&nbsp;
        <span className="bold">|&nbsp;&nbsp;</span>
        &nbsp;
        <i className="fa fa-map-marker" />
        &nbsp;&nbsp;Jaipur, Rajasthan
      </HeaderDesc>
    </StyledHeader>
  );
}

export default Header;
