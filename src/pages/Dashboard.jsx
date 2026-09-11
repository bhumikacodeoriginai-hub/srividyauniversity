import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import DashboardHome from './DashboardHome';
import DashboardProfile from './DashboardProfile';
import DashboardCourses from './DashboardCourses';
import DashboardDownloads from './DashboardDownloads';
import DashboardCoursesOffered from './DashboardCoursesOffered';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/profile" element={<DashboardProfile />} />
                <Route path="/courses" element={<DashboardCourses />} />
                <Route path="/downloads" element={<DashboardDownloads />} />
                <Route path="/courses-offered" element={<DashboardCoursesOffered />} />
            </Routes>
        </DashboardLayout>
    );
};

export default Dashboard;