import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';

import Header from './components/header';
import ResumeSection from './components/section';
import { Information, LinedInformation, SocialLinkHref } from './components/section-info';
import { RazorpayLogo, VimeoLogo, PeakLogo } from './components/logos';

import jobsData, { internshipData } from './jobs.mjs';
import projectsData from './projects.mjs';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Computer Modern Serif', serif;
    overscroll-behavior: none;
  }
  header,
  aside,
  section {
    box-sizing: border-box;
  }

  @media only screen {
    body {
      width: 225mm; /* A4 + margin */
      margin: 0 auto;
      padding-bottom: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
  }

  #root {
    width: 215mm;
    margin: 0 auto;
  }
`;

const logoMap = {
  razorpay: <RazorpayLogo />,
  vimeo: <VimeoLogo />,
  peak: <PeakLogo />,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Header />
    <ResumeSection title="Experience">
      {jobsData.map((job, i) => (
        <Information
          key={i}
          leftTitle={job.position}
          rightToTitle={`${job.from} — ${job.to}`}
          leftLine={[job.company, ' ', logoMap[job.logo]]}
          rightToLine={job.location}
          bullets={job.bullets}
        />
      ))}
    </ResumeSection>
    <ResumeSection title="Internship">
      {internshipData.map((job, i) => (
        <Information
          key={i}
          leftTitle={job.position}
          rightToTitle={`${job.from} — ${job.to}`}
          leftLine={[job.company, ' ', logoMap[job.logo]]}
          rightToLine={job.location}
          bullets={job.bullets}
        />
      ))}
    </ResumeSection>
    <ResumeSection title="Projects">
      {projectsData.map((project, i) => (
        <Information
          key={i}
          leftTitle={project.title}
          leftLine={project.link}
          rightToLine={project.nature}
        />
      ))}
    </ResumeSection>
    <ResumeSection title="Education">
      <Information
        leftTitle="Global Institute of Technology"
        rightToTitle="May, 2015 — Dropped Out (2018)"
        leftLine="B.Tech, Computer Science and Engineering"
        rightToLine="Jaipur, RJ"
      />
      <Information
        leftTitle="Rawat Public School (CBSE)"
        rightToTitle="Jul, 2012 — Apr, 2014"
        leftLine="Senior Secondary"
        rightToLine="Jaipur, RJ"
      />
      <Information
        leftTitle="Rawat Public School (CBSE)"
        rightToTitle="Jul, 2010 — Apr, 2012"
        leftLine="Secondary"
        rightToLine="Jaipur, RJ"
      />
    </ResumeSection>
    <ResumeSection title="Certifications">
      <Information
        leftTitle="AWS Developer Associate"
        rightToTitle="12th Aug, 2019"
        leftLine="PWYQS9G1MFE11RSL"
      />
    </ResumeSection>
    <ResumeSection title="Technical Skills">
      <LinedInformation
        lines={[
          ['Languages', 'NodeJS, Golang, PHP, Python'],
          ['Frameworks', 'React, Express, PySpark, Flask, Laravel, Django, Gin'],
          ['Developer Tools', 'Git, Docker, Spinnaker, Kubernetes, Jenkins, Jira, Postman'],
          ['Databases', 'MySQL, PostgreSQL, DynamoDB'],
          ['SaaS/Cloud Tech', 'S3, SQS, IAM, AWS Lambda, Auth0'],
        ]}
      />
    </ResumeSection>
    <ResumeSection title="Honors & Awards">
      <Information leftTitle="Razorpay Spot Award" leftLine="(Autonomy and Ownership)" />
      <Information leftTitle="Peak Value Award" leftLine="Most Valueable Contributor (2 times)" />
      <Information leftTitle="Deloitte Innovation Award" leftLine="Smart India Hackathon 2017" />
    </ResumeSection>
    <ResumeSection title="Social Links">
      <SocialLinkHref href="https://github.com/charlie1404">
        &emsp;<i className="fa fa-github"></i>
        &nbsp;https://github.com/charlie1404
      </SocialLinkHref>
      <SocialLinkHref href="https://www.linkedin.com/in/charlie1404">
        &emsp;<i className="fa fa-linkedin"></i>
        &nbsp;https://www.linkedin.com/in/charlie1404
      </SocialLinkHref>
      <SocialLinkHref href="https://twitter.com/charlie1404_sg">
        &emsp;<i className="fa fa-twitter"></i>
        &nbsp;https://twitter.com/charlie1404_sg
      </SocialLinkHref>
    </ResumeSection>
  </React.StrictMode>,
);
