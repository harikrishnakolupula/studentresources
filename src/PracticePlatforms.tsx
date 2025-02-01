import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code } from 'lucide-react';
import { codingPlatforms } from './data';

const platformColors = {
  yellow: {
    border: 'border-yellow-200',
    text: 'text-yellow-600',
  },
  green: {
    border: 'border-green-200',
    text: 'text-green-600',
  },
  brown: {
    border: 'border-orange-200',
    text: 'text-orange-600',
  },
};

export function PracticePlatforms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={() => navigate('/')}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-center flex-1">Practice Platforms</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="space-y-4">
          {codingPlatforms.map((platform) => {
            const colors = platformColors[platform.color as keyof typeof platformColors];
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${colors.border} group`}
              >
                <div className="flex items-center">
                  <Code className={`w-6 h-6 ${colors.text} mr-4`} />
                  <span className="text-lg font-medium text-gray-800">{platform.name}</span>
                </div>
                <ArrowLeft className={`w-5 h-5 ${colors.text} transform rotate-180 group-hover:translate-x-1 transition-transform`} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}