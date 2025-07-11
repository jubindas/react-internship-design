export interface TableRow {
  submitter: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitted: string;
  jobRequest: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  value: number;
}

const data: TableRow[] = [
  {
    submitter: 'Aisha Patel',
    status: 'In-process',
    submitted: '15-11-2024',
    jobRequest: 'Launch social media campaign for pr',
    url: 'www.aishapatel',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    value: 6200000,
  },
  {
    submitter: 'Irfan Khan',
    status: 'Need to start',
    submitted: '28-10-2024',
    jobRequest: 'Update press kit for company redesign',
    url: 'www.irfankhan',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    value: 3500000,
  },
  {
    submitter: 'Mark Johnson',
    status: 'In-process',
    submitted: '05-12-2024',
    jobRequest: 'Finalize user testing feedback for ap',
    url: 'www.markjohn',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    value: 4750000,
  },
  {
    submitter: 'Emily Green',
    status: 'Complete',
    submitted: '10-01-2025',
    jobRequest: 'Design new features for the website',
    url: 'www.emilygree',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    value: 5900000,
  },
  {
    submitter: 'Jessica Brown',
    status: 'Blocked',
    submitted: '25-01-2025',
    jobRequest: 'Prepare financial report for Q4',
    url: 'www.jessicabr',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    value: 2800000,
  },
];

export default data;
