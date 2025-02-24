import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <Fragment>
            <nav className="bg-gradient-to-r from-[#2fb2fd] to-[#5dffae] p-4">
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-white text-2xl font-bold mb-4">My Practice App</h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        <Link to="/" className="text-white hover:text-blue-200">Home</Link>
                        <Link to="/one-user-card" className="text-white hover:text-blue-200">User Profile</Link>
                        <Link to="/two-search-box" className="text-white hover:text-blue-200">Search Box</Link>
                        <Link to="/three-collection-list" className="text-white hover:text-blue-200">Collection List</Link>
                        <Link to="/four-review-modal" className="text-white hover:text-blue-200">Review Modal</Link>
                        <Link to="/five-user-list" className="text-white hover:text-blue-200">User List</Link>
                        <Link to="/six-notification" className="text-white hover:text-blue-200">Notification</Link>
                        <Link to="/seven-subscription" className="text-white hover:text-blue-200">Subscription</Link>
                        <Link to="/eight-job-card" className="text-white hover:text-blue-200">Job Card</Link>
                        <Link to="/nine-company-list" className="text-white hover:text-blue-200">Company List</Link>
                        <Link to="/ten-landing-page" className="text-white hover:text-blue-200">Landing Page</Link>
                    </div>
                </div>
            </nav>
            <main className="p-4">
                <Outlet />
            </main>
        </Fragment>
    );
}