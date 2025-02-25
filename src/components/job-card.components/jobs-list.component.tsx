import { JOBS_DATA } from '../../constants/jobs.constants';
import { JobCard } from './job-card.component';

export const JobsList = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA] py-20">
      <div className="w-[48rem] rounded-lg bg-white p-12 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Open Positions</h1>
          <p className="mt-2 text-gray-600">Join our team and help us build amazing products</p>
        </div>

        <div className="space-y-6">
          {JOBS_DATA.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};