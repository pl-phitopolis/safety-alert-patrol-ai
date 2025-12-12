export interface NavItem {
  label: string;
  path: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ProgramStep {
  title: string;
  description: string;
  iconName: string;
}

export interface TrustPoint {
  label: string;
  value: string;
  description: string;
}

export enum UserRole {
  VOLUNTEER = 'volunteer',
  INSTITUTION = 'institution',
  DONOR = 'donor'
}