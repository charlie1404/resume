import styled from '@emotion/styled';

const Sidebar = styled.aside`
  width: 265px;
  padding: 15px;
  padding-bottom: 0;
  background-color: #f5f5f5;
  /* height: calc(362mm - 141px); */
  height: calc(297mm - 141px);
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

const Certifications = (
  <>
    <SidebarTitle>Certifications</SidebarTitle>
    <SidebarHeading>AWS Developer Associate</SidebarHeading>
    <SidebarInfo>12/08/2019 (PWYQS9G1MFE11RSL)</SidebarInfo>
  </>
);

const OSSContributionsHref = styled.a`
  color: #0000ee;
  font-style: italic;
`;

const OSSContributions = (
  <>
    <SidebarTitle>OSS Contributions</SidebarTitle>
    <SidebarInfo>
      -{' '}
      <OSSContributionsHref href="https://github.com/facebook/react/pull/19054">
        Contribution
      </OSSContributionsHref>{' '}
      to react
    </SidebarInfo>
    <SidebarInfo>
      - <OSSContributionsHref href="https://github.com/peak-ai/flashr">Flashr</OSSContributionsHref>{' '}
      notifications queue for redux.
    </SidebarInfo>
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

const TechnicalSkillsRelevantCourses = (
  <>
    <SidebarHeading>Relevant Courses :</SidebarHeading>
    <SidebarInfo>
      Data&nbsp;Structures&nbsp;&amp;&nbsp;Algorithms |
      Design&nbsp;&amp;&nbsp;Analysis&nbsp;of&nbsp;Algorithms | Operating&nbsp;System |
      UNIX&nbsp;Programming | Computer&nbsp;Networks | Databases
    </SidebarInfo>
  </>
);

const TechnicalSkills = (
  <>
    <SidebarTitle>Technical Skills</SidebarTitle>
    {TechnicalSkillsExperienced}
    {TechnicalSkillsHandsOn}
    {/* TechnicalSkillsRelevantCourses */}
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
    <SidebarInfo>- Peak Value Award (2 times)</SidebarInfo>
    <SidebarInfo>- Deloitte Innovation Award, SIH 2017</SidebarInfo>
  </>
);

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
      {Certifications}
      <Seperator />
      {OSSContributions}
      <Seperator />
      {TechnicalSkills}
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
