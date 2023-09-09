import styled from '@emotion/styled';

import logos from './logos';
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

const Title = styled.p`
  display: flex;
  align-items: center;
`;

const Position = styled.span`
  font-weight: bold;
`;

const LocationDurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 14px;
  padding-left: 12px;
  font-style: italic;
`;

const CompanyHref = styled.a`
  text-decoration: none;
  color: #0000ff;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 20px;
`;

const DescUnOrderedList = styled.ul`
  padding-inline-start: 30px;
  padding-top: 4px;

  & li {
    text-align: justify;
    margin-top: 4px;
    font-size: 14px;
  }
`;

function JobSection({ jobName, position, company, website, location, from, to, desc }) {
  return (
    <JobExpArticle>
      <Title>
        <Position>{position}</Position>&nbsp;|&nbsp;
        <CompanyHref href={website}>
          {company}&nbsp;{logos[jobName]}
        </CompanyHref>
      </Title>
      <LocationDurationWrapper>
        <p>
          <i className="fa fa-map-marker" /> {location}
        </p>
        <p>
          <i className="fa fa-calendar"></i> {from} — {to}
        </p>
      </LocationDurationWrapper>
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
          jobName={e.jobName}
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
