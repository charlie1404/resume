const jobsData = [
  {
    position: 'Senior Software Engineer',
    company: 'Deel Company',
    location: 'Bengaluru, KA (Remote)',
    from: 'Jun, 2024',
    to: 'Present',
    logo: 'deel',
    bullets: [
      'Developed tax filing documents (W-2s, W-3s, W-2Cs, and W-3Cs), from generation to publishing, for all US clients in <b>under 45 days</b> from scratch.',
      'Enabled US payroll to have multiple payroll settings, allowing processing in different cycles for the same client, thus unblocking multiple client onboardings.',
      'Streamlined address-related workflows to reduce manual intervention by <b>50%</b> and improved address validation.',
      'Simplified subject taxes fetching and decoupled address codes from subject taxes.',
    ],
  },
  {
    position: 'Senior Software Engineer',
    company: 'Razorpay Software Private Limited',
    location: 'Bengaluru, KA',
    from: 'Oct, 2022',
    to: 'May, 2024',
    logo: 'razorpay',
    bullets: [
      'Built <a href="https://razorpay.com/blog/revolutionizing-financial-reconciliation-with-razorpay-recon/">Recon as SaaS</a> from scratch <b>(in Golang)</b> with multi-tenancy support to provide recon capabilities to customers.',
      'Implemented reconciliation strategies for several gateways for Auto Recon Tool, processing upto <b>8+ million txn a day</b>, using sparks and JAVA.',
      'Reduced data fetching time from datalake from <b>2+ hours to under a few minutes</b>, thus reducing cloud cost by 90% for fetching.',
      'Developed Golang microservice for Reconciliation & Settlements module from scratch for <b>ONDC network (Govt. of India initiative).</b>',
      "Increased commission module's capacity to handle up to <b>100 txn/sec</b> and up to <b>500 calculations/sec</b> by optimizing internal queries, resulting no increase in cost and additional infra need.",
      'Promoted to devops champion for managing infra for microservices using <b>Spinnaker, Terraform and Kubernetes.</b>',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'Razorpay Software Private Limited',
    location: 'Bengaluru, KA',
    from: 'Nov, 2021',
    to: 'Oct, 2022',
    logo: 'razorpay',
    bullets: [
      'Formulated fraud detection system to prevent losses and abuse in commission payouts, reduced losses upto <b>INR 35 lakhs monthly.</b>',
      'Automated commission generation for payment products like PaymentLinks, QR Codes, SmartCollect, E-Mandate, and CAW, reducing manual intervention by <b>40%.</b>',
      'Implemented automated disbursal of commission invoices, leading to an <b>increased NPS</b> score for the partnership module written in PHP.',
      'Automated <b>100%</b> monthly commission invoice generation for partners, reducing manual intervention and errors.',
      'Established monitoring and alerting for async workers to enable early detection of organization-wide outages before customer impact leveraging Prometheus and Alert Managers.',
      'Executed <b>zero-downtime migrations</b> for critical operations, such as user role migration, ensuring seamless transitions.',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'Vimeo Inc',
    location: 'Bengaluru, KA',
    from: 'March, 2021',
    to: 'Nov, 2021',
    logo: 'vimeo',
    bullets: [
      'Established pipeline to dynamically add EXIF data (pre download) to MP4 files using <b>Node.js (via streams).</b>',
      'Integrated Vimeo-Create with partners like Constant Contacts and Facebook.',
      'Simplified code generation scripts for internal routing files.',
      'Fixed race conditions in Vimeo-Create SDK to handle overlays issue with post-message communication.',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'Peak.ai',
    location: 'Jaipur, RJ',
    from: 'Aug, 2018',
    to: 'Jan, 2021',
    logo: 'peak',
    bullets: [
      'Hosted company wide multiple sessions on advanced concepts of javascript (<a href="https://www.youtube.com/watch?v=WW9fH6vBdHk">Public Link</a>).',
      'Engineered internal workflow orchestration tool written using spring boot, to facilitate the data science team to build their workflows using a series of steps (DAG).',
      'Produced data connectors for <b>ETL pipelines</b> to fetch data from sources like <b>FTP and SFTP.</b> using JAVA',
      "Structured <b>authN, authZ, and RBAC</b> to provide granular control over tenant's data.",
      'Developed a TCP proxy for AWS Lambda and PostgreSQL communication. (Inhouse RDS proxy alternative)',
      'Improved frontend delivery by 50% through code splitting and implementing effective caching strategies and object expiration.',
      'Created <b>serverless microservices</b> leveraging AWS services like Lambda, DynamoDB, S3, IAM, and SQS.',
      'Designed custom <b>React UI components</b> to extract presentational logic from the core business application.',
    ],
  },
];

export const internshipData = [
  {
    position: 'Software Engineer',
    company: 'Peak.ai',
    location: 'Jaipur, RJ',
    from: 'May, 2018',
    to: 'Jun, 2018',
    logo: 'peak',
    bullets: [
      'Formed data pipelines to automatically ingest data from sources like mintuk.bvdinfo.com and BigQuery.',
      'Built data connector for ETL pipelines to fetch data from GCS and BigQuery (Export to GCS).',
    ],
  },
];

export default jobsData;
