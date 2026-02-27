export interface NavItem {
  id: number;
  label: string;
  defaultIcon: string;
  activeIcon: string;
  isSelected: boolean
}

export interface FormDetails {
  id: number;
  label: string;
  comments: string;
  count:number;
  avatar:string
}
export interface RecentFormDetails {
  id: number;
  label: string;
  comments: string;
  avatar:string;
}

export interface HomeDetails {
  commentsReceived: FormDetails[],
  recentForms: RecentFormDetails[]
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 1, label: 'Home', defaultIcon: 'assets/home.png', activeIcon: 'assets/homeselected.png', isSelected: true },
  { id: 2, label: 'BSC', defaultIcon: 'assets/bsc.png', activeIcon: 'assets/bscselected.png', isSelected: false },
  { id: 3, label: 'BSC Tracker', defaultIcon: 'assets/bsctracker.png', activeIcon: 'assets/bsctrackerselected.png', isSelected: false },
  { id: 4, label: 'Dashboard', defaultIcon: 'assets/dashboard.png', activeIcon: 'assets/dashboardselected.png', isSelected: false },
  { id: 5, label: 'Backup Calculation', defaultIcon: 'assets/backupcalculation.png', activeIcon: 'assets/backupcalculationselected.png', isSelected: false },
  { id: 6, label: 'KPI Management', defaultIcon: 'assets/kpimanagement.png', activeIcon: 'assets/kpimanagementselected.png', isSelected: false },
  { id: 7, label: 'BSCI & PSCI', defaultIcon: 'assets/bsci&psci.png', activeIcon: 'assets/bsci&psciselected.png', isSelected: false },
  { id: 8, label: 'Task Manager', defaultIcon: 'assets/taskmanager.png', activeIcon: 'assets/taskmanagerselected.png', isSelected: false },
  { id: 9, label: 'Profile', defaultIcon: 'assets/profile.png', activeIcon: 'assets/profileselected.png', isSelected: false },
];

export const HOME_DETAILS: HomeDetails = {
  commentsReceived: [
    {
      id: 1,
      label: 'Financial',
      comments: 'Commented by Anuv Jain',
      count:4,
      avatar:'F'
    }
  ],
  recentForms: [
    {
      id: 1,
      label: 'Customer & Stakeholders',
      comments: 'Opened on 23rd May, 12:30 pm',
      avatar:'CS'
    },
    {
      id: 2,
      label: 'Customer & Stakeholders',
      comments: 'Opened on 23rd May, 12:30 pm',
      avatar:'SS'
    },
    {
      id: 3,
      label: 'Customer & Stakeholders',
      comments: 'Opened on 23rd May, 12:30 pm',
      avatar:'LN'
    },
    {
      id: 4,
      label: 'Customer & Stakeholders',
      comments: 'Opened on 23rd May, 12:30 pm',
      avatar:'TT'
    },
    {
      id: 5,
      label: 'Customer & Stakeholders',
      comments: 'Opened on 23rd May, 12:30 pm',
      avatar:'PZ'
    },
    {
      id: 6,
      label: 'Customer & Stakeholders',
      comments: 'Opened on 23rd May, 12:30 pm',
      avatar:'HA'
    },
    {
      id: 7,
      label: 'Customer & Stakeholders',
      comments: 'Opened on 23rd May, 12:30 pm',
     avatar:'NS'
    },
  ]
};