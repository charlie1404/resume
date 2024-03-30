const jobsData = [
  {
    position: 'Senior Software Engineer (Backend)',
    company: 'Razorpay Software Private Limited',
    location: 'Bengaluru, KA',
    from: 'Oct, 2022',
    to: 'Present',
    logo: 'razorpay',
    bullets: [
      'Build Recon as SaaS from scratch <b>(in Golang)</b> with multi-tenancy support to provide recon capabilities to customers.',
      'Contributed to the development of Auto Recon Tool, processing <b>8+ million txn a day</b> including payments, refunds, chargebacks, payouts, and settlements.',
      'Reduced data fetching time from data lake from <b>2+ hours to under a few minutes</b>, thus reducing cloud cost by 90% for fetching.',
      'Developed Golang microservice for Reconciliation and Settlements module from scratch for the <b>ONDC network (Govt. of India initiative).</b>',
      "Increase the commission module's capacity to handle up to <b>3.6 lakhs txn/minute</b> and up to <b>18 lakh calculations/minute</b> without an increase in cost.",
      'Managed infra for our microservices using <b>Spinnaker, Terraform and Kubernetes.</b>',
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
      'Designed a fraud detection system to prevent losses and abuse in commission payouts, identifying losses up to <b>INR 35 lakhs monthly.</b>',
      'Automated commission generation for payment products like PaymentLinks, QR Codes, SmartCollect, E-Mandate, and CAW, reducing manual intervention by <b>40%.</b>',
      'Implemented automated disbursal of commission invoices, leading to an <b>increased NPS</b> score for the partnership module written in PHP.',
      'Established monitoring and alerting for async workers to enable early detection of organization-wide outages before customer impact leveraging Prometheus and Alert Managers.',
      'Successfully executed <b>zero-downtime migrations</b> for critical operations, such as user role migration, ensuring seamless transitions.',
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
      'Built a pipeline to dynamically add EXIF metadata (pre download) to MP4 files using <b>Node.js over a stream.</b>',
      'Integrated Vimeo-Create with partners like Constant Contacts and Facebook.',
      'Simplified code generation scripts for internal routing files.',
      'Fixed race condition in Vimeo-Create SDK to handle overlays issue with post-message communication.',
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
      'Developed internal workflow orchestration tool, built over <b>argo workflows</b>, to facilitate the data science team to build their models using a series of steps (DAG).',
      'Developed data connectors for <b>ETL pipelines</b> to fetch data from sources like <b>FTP and SFTP.</b>',
      'Contributed to authentication, authorization, and <b>RBAC</b> (role-based access control) flows across all services.',
      'Developed a TCP proxy for AWS Lambda and PostgreSQL communication. (Inhouse RDS proxy alternative)',
      'Improved frontend delivery by 50% through code splitting and implementing effective caching strategies and object expiration.',
      'Developed <b>serverless microservices</b> leveraging AWS services like Lambda, DynamoDB, S3, IAM, and SQS.',
      'Created custom <b>React UI components</b> to extract presentational logic from the core business application.',
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
      'Build data connector for ETL pipelines to fetch data from GCS and BigQuery (Export to GCS).',
    ],
  },
];

export default jobsData;
