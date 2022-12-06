import styled from '@emotion/styled';

import jobsData from '../data.json';

const StyledSection = styled.section`
  width: calc(100% - 265px);
`;

const JobExpArticle = styled.article`
  margin: 15px 20px 0;
  & i.fa {
    font-size: 14px;
    display: inline-flex;
    width: 16px;
    justify-content: center;
  }
`;

const Title = styled.p``;

const Position = styled.span`
  font-weight: bold;
`;

const Location = styled.p`
  margin-top: 5px;
  font-style: italic;
`;

const Duration = styled.p`
  margin-top: 5px;
  font-style: italic;
`;

const CompanyHref = styled.a`
  text-decoration: none;
  color: rgb(85, 26, 139);
  font-style: italic;
`;

const DescUnOrderedList = styled.ul`
  padding-inline-start: 30px;
  padding-top: 4px;

  & li {
    text-align: justify;
    margin-top: 6px;
    font-size: 14px;
  }
`;

function JobSection({ position, company, website, location, from, to, desc }) {
  return (
    <JobExpArticle>
      <Title>
        <Position>{position}</Position> | <CompanyHref href={website}>{company}</CompanyHref>
      </Title>
      <Location>
        <i className="fa fa-map-marker" /> {location}
      </Location>
      <Duration>
        <i className="fa fa-calendar"></i> {from} — {to}
      </Duration>
      <DescUnOrderedList>
        {desc.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </DescUnOrderedList>
    </JobExpArticle>
  );
}

function Jobs() {
  return (
    <StyledSection>
      {jobsData.map((e) => (
        <JobSection
          key={e.jobName}
          position={e.position}
          company={e.company}
          website={e.website}
          location={e.location}
          from={e.from}
          to={e.to}
          desc={e.desc}
        />
      ))}
    </StyledSection>
  );
}

export default Jobs;
