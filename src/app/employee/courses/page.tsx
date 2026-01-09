// src/app/employee/courses/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import EmployeeLayout from '@/components/EmployeeLayout';
import { technologyCategories } from '@/lib/coursesData';

export default function CoursesPage() {
    const router = useRouter();

    const handleCategoryClick = (categoryId: string) => {
        router.push(`/employee/courses/${categoryId}`);
    };

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
                        {/* Header */}
                        <div className="bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-yellow-400/20 overflow-hidden relative p-6 md:p-8">
                            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 blur-xl opacity-60" />

                            <div className="relative z-10">
                                <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 mb-3">
                                    📚 Technology Courses
                                </h1>
                                <p className="text-yellow-300/80 text-base md:text-lg">
                                    Explore our comprehensive collection of technology training courses
                                </p>
                            </div>
                        </div>

                        {/* Technology Categories Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {technologyCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category.id)}
                                    className="group bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow-400/20 overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/25 hover:border-yellow-400/40"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-amber-500/10 to-yellow-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10 p-6 text-left">
                                        {/* Icon */}
                                        <div className="mb-4 flex items-center justify-center h-20">
                                            <img
                                                src={category.icon}
                                                alt={`${category.name} logo`}
                                                className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Category Name */}
                                        <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-2 group-hover:from-yellow-300 group-hover:to-amber-400">
                                            {category.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {category.description}
                                        </p>

                                        {/* Course Count Badge */}
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-yellow-600/20 text-yellow-400 border border-yellow-400/30">
                                                {category.courseCount} Courses
                                            </span>
                                            <span className="text-yellow-400 group-hover:translate-x-2 transition-transform duration-300">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Info Banner */}
                        <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 backdrop-blur-xl rounded-xl border border-blue-400/30 p-4 md:p-6">
                            <div className="flex items-start gap-3">
                                <span className="text-3xl">💡</span>
                                <div>
                                    <p className="text-blue-300 font-semibold text-base md:text-lg mb-1">
                                        Start Your Learning Journey
                                    </p>
                                    <p className="text-blue-200/70 text-sm md:text-base">
                                        Select a technology category above to explore available courses. Each course includes video tutorials, detailed descriptions, and is taught by industry experts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </EmployeeLayout>
        </ProtectedRoute>
    );
}
