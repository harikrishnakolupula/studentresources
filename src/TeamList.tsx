import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Instagram, Github, MessageCircle } from 'lucide-react';
import { teamMembers } from './data';

export function TeamList() {
  const { member } = useParams<{ member: string }>();
  const navigate = useNavigate();

  const socialLinks = member === 'Hari' ? {
    linkedin: 'https://www.linkedin.com/in/harikrishna-kolupula-b24a402b1',
    instagram: 'https://www.instagram.com/harikrishna_kolupula?igsh=MXRmbTFkcW9uOWZudA==',
    portfolio: 'https://hari-portfolio.com',
    whatsapp: 'https://wa.me/+916301416347'
  } : teamMembers[member as keyof typeof teamMembers];

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
          <h1 className="text-2xl font-bold text-center flex-1">{member}'s Profile</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{member}</h2>
          <div className="space-y-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors w-full"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram Profile
            </a>
            {member === 'Hari' ? (
              <a
                href={socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors w-full"
              >
                <Github className="w-5 h-5 mr-2" />
                Portfolio
              </a>
            ) : (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors w-full"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
            )}
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors w-full"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}