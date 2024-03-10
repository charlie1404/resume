import styled from '@emotion/styled';

const StyledSection = styled.section`
  margin: 0 auto;
  margin-top: 10px;
`;

const InnerSection = styled.section`
  padding: 0 10px;
`;

const FirstBigLetter = styled.p`
  font-size: 13px;
  &::first-letter {
    font-size: 20px;
  }
`;

const Hr = styled.hr``;

function ResumeSection(props) {
  return (
    <StyledSection>
      <FirstBigLetter>{props.title.toUpperCase()}</FirstBigLetter>
      <Hr />
      <InnerSection>{props.children}</InnerSection>
    </StyledSection>
  );
}

export default ResumeSection;
