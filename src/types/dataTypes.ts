export interface MainInfoCard {
  title: string;
  desc: string;
}

export interface CompanyContacts {
  title: string;
  address?: string;
  registrationNumber?: string;
  email: string;
  phone: string[];
}

export interface HistoryItem {
  year?: string;
  text: string;
  image: string;
}

export interface InfoCard {
  iconKey: string;
  text: string;
}

export interface Table1Item {
  ['Type']: string;
  No: string;
  ['Length(M)']: string;
  ['INNER WIDTH(M)']: string;
  ['MAX DRAFT(M)']: string;
  ['CRANES(T)']: string;
}

export interface Table2Item {
  NAME: string;
  ['Length(m)']: string;
  ['DEPTH(M)']: string;
  ['CRANES(T)']: string;
}

export interface TableCard {
  title: string;
  text: string;
}

export interface ServicesLists {
  list1: string[];
  list2: string[];
}
