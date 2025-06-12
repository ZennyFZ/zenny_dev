"use client";

export function AboutSection() {
  return (
    <div className="space-y-6">
      <div className="text-2xl md:text-3xl text-green-400 mb-6">
        ◉ PERSONAL_PROFILE_DATA
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border-2 border-green-400 p-4 md:p-6 rounded-lg">
          <div className="text-green-400 text-lg md:text-xl mb-4">
            Personal Information
          </div>
          <div className="space-y-3 uppercase">
            <div className="flex justify-between text-sm md:text-base">
              <span>Date of birth:</span>
              <span className="text-cyan-400">July 19, 2002</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span>Phone:</span>
              <span className="text-green-400">+84703809061</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span>Email:</span>
              <span className="text-purple-400">nhandinhdo291@gmail.com</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span>Address:</span>
              <span className="text-pink-400">Ho Chi Minh, Vietnam</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span>Education:</span>
              <span className="text-yellow-400">
                FPT University (2020 - 2024)
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 border-2 border-pink-400 p-4 md:p-6 rounded-lg">
          <div className="text-pink-400 text-lg md:text-xl mb-4">
            Introduction
          </div>
          <div className="text-gray-300 leading-relaxed text-sm md:text-base">
            Software Engineer with a strong focus on front-end and mobile
            development, specializing in ReactJS, NextJS, React Native, and
            TypeScript. Experienced in full-stack development and blockchain
            integration, with hands-on project experience using modern
            frameworks and tools.
          </div>
        </div>
      </div>
    </div>
  );
}
