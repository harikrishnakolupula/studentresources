import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Book, Youtube, ArrowLeft } from 'lucide-react';
import { additionalResources, additionalYoutubeLinks } from './data';

export function ResourceList() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  
  if (!type) return null;
  
  const decodedType = decodeURIComponent(type);
  const resources = additionalResources[decodedType as keyof typeof additionalResources] || [];
  const youtubeLinks = additionalYoutubeLinks[decodedType as keyof typeof additionalYoutubeLinks] || [];

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
          <h1 className="text-2xl font-bold text-center flex-1">{decodedType}</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => {
            const resourceName = Object.keys(resource)[0];
            const materialLink = Object.values(resource)[0];
            const youtubeLink = youtubeLinks[index];

            return (
              <div key={resourceName} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{resourceName}</h3>
                <div className="flex flex-col space-y-3">
                  <a
                    href={materialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Book className="w-4 h-4 mr-2" />
                    Study Material
                  </a>
                  <a
                    href={youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Video Lectures
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}