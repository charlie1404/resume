import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';

import Header from './components/header';
import ResumeSection from './components/section';
import { Information, LinedInformation, SocialLinkHref } from './components/section-info';
import { RazorpayLogo, VimeoLogo, PeakLogo } from './components/logos';

import jobsData, { internshipData } from './jobs.mjs';
import projectsData from './projects.mjs';

const useLegal = false;
const pageWidth = useLegal ? '215.9mm' : '210mm';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Georgia', serif;
    overscroll-behavior: none;
  }
  header,
  aside,
  section {
    box-sizing: border-box;
  }

  @media only screen {
    body {
      width: calc(${pageWidth} + 20mm); /* page width + 20 (margin) */
      margin: 0 auto;
      padding-bottom: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    #root {
      width: ${pageWidth}; /* page width */
    }
  }

  #root {
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
    <ResumeSection title="Technical Skills">
      <LinedInformation
        lines={[
          ['Languages', 'NodeJS, Golang, PHP, Python, JAVA, TypeScript, Shell Scripting'],
          ['Frameworks', 'React, Express, PySpark, Flask, Laravel, Django, Gin'],
          ['Developer Tools', 'Git, Docker, Spinnaker, Kubernetes, Jenkins, Terraform, Postman'],
          ['Databases', 'MySQL, PostgreSQL, DynamoDB, MongoDB, Redis, Elasticsearch'],
          ['SaaS/Cloud Tech', 'S3, SQS, IAM, AWS Lambda, EC2, Auth0'],
        ]}
      />
    </ResumeSection>
    <ResumeSection title="Education">
      <Information
        leftTitle="B.Tech, Computer Science and Engineering"
        rightToTitle="May, 2015 — 2018 (Drop Out)"
        leftLine="Global Institute of Technology"
        rightToLine="Jaipur, RJ"
      />
      <Information
        leftTitle="Senior Secondary"
        rightToTitle="Jul, 2012 — Apr, 2014"
        leftLine="Rawat Public School (CBSE)"
        rightToLine="Jaipur, RJ"
      />
      <Information
        leftTitle="Secondary"
        rightToTitle="Jul, 2010 — Apr, 2012"
        leftLine="Rawat Public School (CBSE)"
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
    <ResumeSection title="Honors & Awards">
      <Information
        leftTitle="Razorpay Spot Award"
        rightToTitle="2022"
        leftLine="(Autonomy and Ownership)"
      />
      <Information
        leftTitle="Peak Value Award"
        rightToTitle="2019, 2020"
        leftLine="Most Valueable Contributor (2 times)"
      />
      <Information
        leftTitle="Deloitte Innovation Award"
        rightToTitle="2017"
        leftLine="Smart India Hackathon"
      />
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
