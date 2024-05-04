const jobsData = [
  {
    position: 'Senior Software Engineer (Backend)',
    company: 'Razorpay Software Private Limited',
    location: 'Bengaluru, KA',
    from: 'Oct, 2022',
    to: 'Present',
    logo: 'razorpay',
    bullets: [
      'Built <a href="https://razorpay.com/blog/revolutionizing-financial-reconciliation-with-razorpay-recon/">Recon as SaaS</a> from scratch <b>(in Golang)</b> with multi-tenancy support to provide recon capabilities to customers.',
      'Implemented reconciliation strategies for several gateways for Auto Recon Tool, processing upto <b>8+ million txn a day</b>.',
      'Reduced data fetching time from datalake from <b>2+ hours to under a few minutes</b>, thus reducing cloud cost by 90% for fetching.',
      'Developed Golang microservice for Reconciliation & Settlements module from scratch for <b>ONDC network (Govt. of India initiative).</b>',
      "Increased commission module's capacity to handle up to <b>100 txn/sec</b> and up to <b>500 calculations/sec</b> without any increase in cost.",
      'Promoted to devops champion for managing infra for microservices using <b>Spinnaker, Terraform and Kubernetes.</b>',
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
      'Formulated fraud detection system to prevent losses and abuse in commission payouts, reduced losses upto <b>INR 35 lakhs monthly.</b>',
      'Automated commission generation for payment products like PaymentLinks, QR Codes, SmartCollect, E-Mandate, and CAW, reducing manual intervention by <b>40%.</b>',
      'Implemented automated disbursal of commission invoices, leading to an <b>increased NPS</b> score for the partnership module written in PHP.',
      'Established monitoring and alerting for async workers to enable early detection of organization-wide outages before customer impact leveraging Prometheus and Alert Managers.',
      'Executed <b>zero-downtime migrations</b> for critical operations, such as user role migration, ensuring seamless transitions.',
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
      'Established pipeline to dynamically add EXIF data (pre download) to MP4 files using <b>Node.js (via streams).</b>',
      'Integrated Vimeo-Create with partners like Constant Contacts and Facebook.',
      'Simplified code generation scripts for internal routing files.',
      'Fixed race conditions in Vimeo-Create SDK to handle overlays issue with post-message communication.',
    ],
  },
  {
    position: 'Software Engineer (Full Stack)',
    company: 'Peak.ai',
    location: 'Jaipur, RJ',
    from: 'Aug, 2018',
    to: 'Jan, 2021',
    logo: 'peak',
    bullets: [
      'Engineered internal workflow orchestration tool, using <b>argo workflows</b>, to facilitate the data science team to build their models using a series of steps (DAG).',
      'Produced data connectors for <b>ETL pipelines</b> to fetch data from sources like <b>FTP and SFTP.</b>',
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
    position: 'Software Engineer (Full Stack)',
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
