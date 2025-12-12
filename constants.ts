import { NavItem, LeadershipMember, ProgramStep, TrustPoint } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'Get Involved', path: '/get-involved' },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: 'Col. James Anderson (Ret.)',
    role: 'Executive Director',
    bio: 'Over 30 years of service in the US Army, specializing in logistics and community relations.',
    imageUrl: 'https://picsum.photos/400/400?random=1'
  },
  {
    name: 'Sgt. Sarah Miller (Ret.)',
    role: 'Director of Operations',
    bio: 'Former Police Sergeant with 20 years of experience in school resource management and safety protocols.',
    imageUrl: 'https://picsum.photos/400/400?random=2'
  },
  {
    name: 'Rev. David Williams',
    role: 'Community Liaison',
    bio: 'Bridging the gap between faith-based organizations and local law enforcement for over a decade.',
    imageUrl: 'https://picsum.photos/400/400?random=3'
  }
];

export const PROGRAM_STEPS: ProgramStep[] = [
  {
    title: '1. Vetting & Selection',
    description: 'Rigorous background checks and psychological screening to ensure the highest integrity.',
    iconName: 'ShieldCheck'
  },
  {
    title: '2. Specialized Training',
    description: 'Training in de-escalation, emergency response, and child-safe interactions.',
    iconName: 'GraduationCap'
  },
  {
    title: '3. Strategic Placement',
    description: 'Matching officers with schools and churches based on community needs and culture.',
    iconName: 'MapPin'
  },
  {
    title: '4. Ongoing Support',
    description: 'Continuous oversight, mental health support for volunteers, and regular safety audits.',
    iconName: 'HeartHandshake'
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    label: 'Years of Experience',
    value: '500+',
    description: 'Combined years of service among our volunteer base.'
  },
  {
    label: 'Communities Served',
    value: '12',
    description: 'Active pilot programs in local school districts and parishes.'
  },
  {
    label: 'Vetting Rate',
    value: '100%',
    description: 'Every volunteer undergoes federal and state background checks.'
  }
];

export const JARGON_DEFINITIONS = {
  SRO: 'School Resource Officer - A law enforcement officer responsible for safety and crime prevention in schools.',
  Deescalation: 'Techniques used to prevent conflict from becoming violent.',
  Perimeter: 'The outer boundary of a secured area.'
};