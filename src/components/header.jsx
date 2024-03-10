import styled from '@emotion/styled';

const StyledHeader = styled.header`
  padding: 0;
`;

const HeaderTitleH1 = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const HeaderDesc = styled.div`
  margin-top: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3px;
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
        &nbsp;&nbsp;Bengaluru, Karnataka
      </HeaderDesc>
    </StyledHeader>
  );
}

export default Header;
