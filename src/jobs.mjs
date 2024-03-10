const jobsData = [
  {
    position: 'Senior Software Engineer (Backend)',
    company: 'Razorpay Software Private Limited',
    location: 'Bengaluru, KA',
    from: 'Oct, 2022',
    to: 'Present',
    logo: 'razorpay',
    bullets: [
      'Developed Recon SAAS from scratch with multi-tenancy support.',
      'Developed features for internal reconciliation tool, processing millions of transactions daily including payments, refunds, chargebacks, payouts and settlements.',
      'Optimized internal data fetching to reduce run time from over 2 hours to under a few minutes, thus reducing costs by 90%.',
      'Developed the Reconciliation and Settlement module from scratch for the ONDC (Govt. of India initiative).',
    ],
  },
  {
    position: 'Software Engineer (Backend)',
    company: 'Razorpay Software Private Limited',
    location: 'Bengaluru, KA',
    from: 'Nov, 2021',
    to: 'Oct, 2022',
    logo: 'razorpay',
    bullets: [
      'Built a fraud detection system to prevent losses and abuse in commission payouts, identifying losses upto INR 35 lakh monthly.',
      'Scaled commissions module to handle upto 3.6 lakh tx per minute and upto 18 lakh calculations per minute.',
      'Automated commissions generation for payments products like PaymentLinks, QR Codes, SmartCollect, E-Mandate, and CAW.',
      'Implemented automated disbursals of commission invoices, leading to an increased NPS score for the partnership module.',
      'Established monitoring and alerting for async workers to enable early detection of organization-wide outages before customer impact.',
      'Successfully executed zero-downtime migrations for critical operations, such as user role migration, ensuring seamless transitions.',
    ],
  },
  {
    position: 'Software Engineer (Full Stack)',
    company: 'Vimeo Inc',
    location: 'Bengaluru, KA',
    from: 'March, 2021',
    to: 'Nov, 2021',
    logo: 'vimeo',
    bullets: [
      'Built a tagging pipeline to dynamically add EXIF metadata to MP4 files before download.',
      'Integrated Vimeo-Create with partners like Constant Contacts and Facebook.',
      'Enhanced code generation scripts for internal routing files.',
      'Fixed issues in Vimeo-Create SDK integration including overlays and post-message communication.',
    ],
  },
  {
    position: 'Software Engineer (Full Stack)',
    company: 'Peak.ai ',
    location: 'Jaipur, RJ',
    from: 'Aug, 2018',
    to: 'Jan, 2021',
    logo: 'peak',
    bullets: [
      'Developed internal workflow orchestration tool, built over argo workflows.',
      'Developed data connectors for ETL pipelines to fetch data from sources like FTP and SFTP.',
      'Contributed to authentication, authorization, and RBAC (role-based access control) flows across all services.',
      'Developed a TCP proxy for AWS Lambda and PostgreSQL communication. (Inhouse RDS proxy alternative)',
      'Improved frontend delivery through code splitting and implementing effective caching strategies and object expiration.',
      'Developed serverless microservices leveraging AWS services like Lambda, DynamoDB, S3, IAM, and SQS.',
      'Created a custom UI component library to extract presentational logic from the core business application.',
    ],
  },
];

export const internshipData = [
  {
    position: 'Software Engineer (Full Stack)',
    company: 'Peak.ai',
    location: 'Jaipur, RJ',
    from: 'May, 2018',
    to: 'Jun, 2018',
    logo: 'peak',
    bullets: [
      'Built data pipelines to automatically ingest data from sources like mintuk.bvdinfo.com and BigQuery.',
    ],
  },
];

export default jobsData;
