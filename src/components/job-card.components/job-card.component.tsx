import { Job } from '../../types/job.types';

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className={`rounded-lg border p-6 ${job.color}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-white p-2 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={job.icon} />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.department}</p>
          </div>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-600 shadow-sm">
          {job.openPositions} {job.openPositions === 1 ? 'position' : 'positions'}
        </span>
      </div>

      <p className="mt-4 text-gray-600">{job.description}</p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          {job.location}
        </div>
        <button className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
          Apply Now
        </button>
      </div>
    </div>
  );
};
