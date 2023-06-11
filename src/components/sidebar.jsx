import styled from '@emotion/styled';

const Sidebar = styled.aside`
  width: 265px;
  padding: 15px;
  padding-bottom: 0;
  background-color: #f5f5f5;
  height: calc(297mm - 130px);
`;

const SidebarTitle = styled.h2`
  font-family: 'Garamond';
  font-size: 18px;
  font-style: italic;
`;

const SidebarHeading = styled.p`
  margin-top: 10px;
  font-size: 15px;
`;

const SidebarInfo = styled.p`
  padding-inline-start: 10px;
  padding-top: 5px;
  font-size: 13px;
`;

const SidebarHypenList = styled.ul`
  padding-inline-start: 10px;
  list-style: none;

  & a {
    color: #0000ee;
    font-style: italic;
  }

  & li {
    padding-top: 5px;
    font-size: 13px;
    &:before {
      content: '- ';
    }
  }
`;

const EducationDuration = styled.span`
  font-size: 13px;
  font-style: italic;
`;

const Seperator = styled.hr`
  background-color: #c4c4c4;
  border: none;
  height: 1px;
  margin: 15px 0;
`;

const SocialLinkHref = styled.a`
  text-decoration: none;
  color: #0000ee;
  font-style: italic;
  padding-top: 6px;
  display: block;
  font-size: 14px;

  &:first-of-type {
    padding-top: 8px;
  }

  & i.fa {
    color: #000;
    display: inline-flex;
    width: 16px;
  }
`;

const OSSContributions = (
  <>
    <SidebarTitle>OSS Contributions</SidebarTitle>
    <SidebarHypenList>
      <li>
        <a href="https://github.com/charlie1404/vqs">VQS</a> SQS Compatible High performance Queue
        Server (in dev).
      </li>
      <li>
        <a href="https://github.com/facebook/react/pull/19054">Contribution</a> to react
      </li>
      <li>
        <a href="https://github.com/peak-ai/flashr">Flashr</a> notifications queue for redux.
      </li>
    </SidebarHypenList>
  </>
);

const Certifications = (
  <>
    <SidebarTitle>Certifications</SidebarTitle>
    <SidebarHeading>AWS Developer Associate</SidebarHeading>
    <SidebarInfo>12/08/2019 (PWYQS9G1MFE11RSL)</SidebarInfo>
  </>
);

const TechnicalSkillsExperienced = (
  <>
    <SidebarHeading>Experienced :</SidebarHeading>
    <SidebarInfo>
      React | Redux | NodeJS | PHP | Golang | ExpressJS | Javascript | AWS&nbsp;S3 |
      AWS&nbsp;DynamoDB | AWS&nbsp;Lambda | API&nbsp;Gateway
    </SidebarInfo>
  </>
);

const TechnicalSkillsHandsOn = (
  <>
    <SidebarHeading>Hands-On :</SidebarHeading>
    <SidebarInfo>
      CloudFormation (IAC) | AWS&nbsp;SNS | Microservice&nbsp;Infra | AWS&nbsp;SQS |
      Serverless&nbsp;Computing
    </SidebarInfo>
  </>
);

const TechnicalSkills = (
  <>
    <SidebarTitle>Technical Skills</SidebarTitle>
    {TechnicalSkillsExperienced}
    {TechnicalSkillsHandsOn}
  </>
);

const Education = (
  <>
    <SidebarTitle>Education</SidebarTitle>
    <SidebarHeading>
      B. Tech <EducationDuration>(2015 - Dropped in final year)</EducationDuration>
    </SidebarHeading>
    <SidebarInfo>Global Institute of Technology (RTU)</SidebarInfo>
    <SidebarHeading>
      Senior Secondary <EducationDuration>(2012 - 2014)</EducationDuration>
    </SidebarHeading>
    <SidebarInfo>Rawat Public School (CBSE)</SidebarInfo>
    <SidebarHeading>
      Secondary <EducationDuration>(2010 - 2012)</EducationDuration>
    </SidebarHeading>
    <SidebarInfo>Rawat Public School (CBSE)</SidebarInfo>
  </>
);

const HonorsAndAwards = (
  <>
    <SidebarTitle>Honors and Awards</SidebarTitle>
    <SidebarHypenList>
      <li>Razorpay Spot Award (Autonomy and Ownership)</li>
      <li>Peak Value Award (2 times)</li>
      <li>Deloitte Innovation Award, SIH 2017</li>
    </SidebarHypenList>
  </>
);

const SocialLinks = (
  <>
    <SidebarTitle>Social Links</SidebarTitle>
    <SocialLinkHref href="https://github.com/charlie1404">
      &emsp;<i className="fa fa-github"></i>
      &nbsp;charlie1404
    </SocialLinkHref>
    <SocialLinkHref href="https://www.linkedin.com/in/charlie1404">
      &emsp;<i className="fa fa-linkedin"></i>
      &nbsp;charlie1404
    </SocialLinkHref>
    <SocialLinkHref href="https://twitter.com/charlie1404_sg">
      &emsp;<i className="fa fa-twitter"></i>
      &nbsp;charlie1404_sg
    </SocialLinkHref>
  </>
);

function RightSidebar() {
  return (
    <Sidebar>
      {OSSContributions}
      <Seperator />
      {TechnicalSkills}
      <Seperator />
      {Certifications}
      <Seperator />
      {Education}
      <Seperator />
      {HonorsAndAwards}
      <Seperator />
      {SocialLinks}
    </Sidebar>
  );
}

export default RightSidebar;
