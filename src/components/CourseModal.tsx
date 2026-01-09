// src/components/CourseModal.tsx
'use client';
import { Course } from '@/lib/coursesData';

interface CourseModalProps {
    course: Course;
    isOpen: boolean;
    onClose: () => void;
}

export default function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
    if (!isOpen) return null;

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

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-400/20">
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 blur-xl opacity-60" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 mb-3">
                                {course.title}
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold border ${getLevelColor(course.level)}`}>
                                    {course.level}
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-blue-600/20 text-blue-400 border border-blue-400/30">
                                    ⏱️ {course.duration}
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-purple-600/20 text-purple-400 border border-purple-400/30">
                                    👨‍🏫 {course.instructor}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="ml-4 w-10 h-10 flex items-center justify-center bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-full border border-red-400/30 transition-all duration-300 hover:scale-110"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg mb-3">📖 Course Description</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {course.description}
                        </p>
                    </div>

                    {/* Video Player */}
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg mb-3">🎥 Course Video</h3>
                        <div className="relative w-full bg-black rounded-xl overflow-hidden border border-yellow-400/20 shadow-xl">
                            <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={course.videoUrl}
                                    title={course.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs mt-2 text-center">
                            If the video doesn&apos;t load, click the button below to open in YouTube
                        </p>
                    </div>

                    {/* YouTube Fallback Button */}
                    <div className="flex justify-center">
                        <a
                            href={course.videoUrl.replace('/embed/', '/watch?v=')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-xl">▶️</span>
                                Open in YouTube
                            </span>
                        </a>
                    </div>

                    {/* Course Details */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 p-4 rounded-xl border border-yellow-400/20">
                            <div className="text-yellow-400 font-semibold mb-2">📚 Technology</div>
                            <div className="text-white capitalize">{course.technology}</div>
                        </div>
                        <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 p-4 rounded-xl border border-yellow-400/20">
                            <div className="text-yellow-400 font-semibold mb-2">👨‍🎓 Instructor</div>
                            <div className="text-white">{course.instructor}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
