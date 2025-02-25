import { Job } from '../types/job.types';

export const JOBS_DATA: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    openPositions: 3,
    description: 'We are looking for experienced Frontend Developers to join our growing team.',
    color: 'bg-blue-50 border-blue-200',
    icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z'
  },
  {
    id: 2,
    title: 'UX Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    openPositions: 2,
    description: 'Join our design team to create beautiful and intuitive user experiences.',
    color: 'bg-purple-50 border-purple-200',
    icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'London, UK',
    openPositions: 1,
    description: 'Looking for DevOps engineers to help scale our cloud infrastructure.',
    color: 'bg-green-50 border-green-200',
    icon: 'M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z'
  }
]; 