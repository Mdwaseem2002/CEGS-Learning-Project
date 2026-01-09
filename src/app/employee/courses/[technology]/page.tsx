// src/app/employee/courses/[technology]/page.tsx
'use client';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import EmployeeLayout from '@/components/EmployeeLayout';
import CourseModal from '@/components/CourseModal';
import { getCoursesByTechnology, technologyCategories, Course } from '@/lib/coursesData';

export default function TechnologyCoursesPage() {
    const router = useRouter();
    const params = useParams();
    const technology = params.technology as string;

    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const courses = getCoursesByTechnology(technology);
    const categoryInfo = technologyCategories.find(cat => cat.id === technology);

    const handleCourseClick = (course: Course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedCourse(null), 300);
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Beginner':
                return 'bg-green-600/20 text-green-400 border-green-400/30';
            case 'Intermediate':
                return 'bg-yellow-600/20 text-yellow-400 border-yellow-400/30';
            case 'Advanced':
                return 'bg-red-600/20 text-red-400 border-red-400/30';
            default:
                return 'bg-gray-600/20 text-gray-400 border-gray-400/30';
        }
    };

    if (!categoryInfo) {
        return (
            <ProtectedRoute>
                <EmployeeLayout>
                    <div className="min-h-screen bg-black flex items-center justify-center p-4">
                        <div className="text-center bg-red-900/20 backdrop-blur-lg p-8 rounded-2xl border border-red-500/30 max-w-md">
                            <div className="text-6xl mb-4">⚠️</div>
                            <h2 className="text-2xl font-bold text-red-300 mb-4">Category Not Found</h2>
                            <p className="text-red-200 mb-6">The requested technology category does not exist.</p>
                            <button
                                onClick={() => router.push('/employee/courses')}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
                            >
                                Back to Courses
                            </button>
                        </div>
                    </div>
                </EmployeeLayout>
            </ProtectedRoute>
        );
    }

    return (
        <ProtectedRoute>
            <EmployeeLayout>
                <div className="min-h-screen bg-black relative overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-yellow-300/8 to-yellow-600/8 rounded-full blur-3xl animate-pulse" />
                    </div>

                    {/* Golden Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255, 215, 0) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />

                    <div className="relative z-10 p-4 md:p-6 space-y-6">
                        {/* Breadcrumb Navigation */}
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <button
                                onClick={() => router.push('/employee')}
                                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                            >
                                🏠 Home
                            </button>
                            <span className="text-gray-500">›</span>
                            <button
                                onClick={() => router.push('/employee/courses')}
                                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                            >
                                Courses
                            </button>
                            <span className="text-gray-500">›</span>
                            <span className="text-gray-300">{categoryInfo.name}</span>
                        </div>

                        {/* Header */}
                        <div className="bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-yellow-400/20 overflow-hidden relative p-6 md:p-8">
                            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 blur-xl opacity-60" />

                            <div className="relative z-10 flex items-center gap-4">
                                <div className="flex items-center justify-center h-20 w-20 bg-white/10 rounded-xl p-2">
                                    <img
                                        src={categoryInfo.icon}
                                        alt={`${categoryInfo.name} logo`}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 mb-2">
                                        {categoryInfo.name} Courses
                                    </h1>
                                    <p className="text-yellow-300/80 text-base md:text-lg">
                                        {categoryInfo.description}
                                    </p>
                                    <div className="mt-3">
                                        <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold bg-yellow-600/20 text-yellow-400 border border-yellow-400/30">
                                            {courses.length} Courses Available
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Courses Grid */}
                        {courses.length === 0 ? (
                            <div className="bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow-400/20 p-12 text-center">
                                <div className="text-6xl mb-4">📚</div>
                                <h3 className="text-2xl font-bold text-yellow-400 mb-2">No Courses Available Yet</h3>
                                <p className="text-gray-400">Check back soon for new courses in this category.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                                {courses.map((course) => (
                                    <button
                                        key={course.id}
                                        onClick={() => handleCourseClick(course)}
                                        className="group bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow-400/20 overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/25 hover:border-yellow-400/40 text-left"
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-amber-500/10 to-yellow-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10 p-6">
                                            {/* Course Title */}
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                                {course.title}
                                            </h3>

                                            {/* Course Description */}
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                                {course.description}
                                            </p>

                                            {/* Course Meta */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-bold border ${getLevelColor(course.level)}`}>
                                                    {course.level}
                                                </span>
                                                <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-bold bg-blue-600/20 text-blue-400 border border-blue-400/30">
                                                    ⏱️ {course.duration}
                                                </span>
                                            </div>

                                            {/* Instructor */}
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm text-gray-400">
                                                    👨‍🏫 {course.instructor}
                                                </div>
                                                <div className="text-yellow-400 group-hover:translate-x-2 transition-transform duration-300">
                                                    →
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Course Modal */}
                {selectedCourse && (
                    <CourseModal
                        course={selectedCourse}
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                    />
                )}
            </EmployeeLayout>
        </ProtectedRoute>
    );
}
