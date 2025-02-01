import { BookOpen, Brain, ChevronRight, Code, ExternalLink, FileQuestion, Map, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { PracticePlatforms } from './PracticePlatforms';
import { ResourceList } from './ResourceList';
import { SubjectList } from './SubjectList';
import { TeamList } from './TeamList';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-4xl font-bold animate-pulse">
          Educational Resources
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<YearPage />} />
      <Route path="/year/:year" element={<SubjectList />} />
      <Route path="/resource/:type" element={<ResourceList />} />
      <Route path="/team/:member" element={<TeamList />} />
      <Route path="/practice" element={<PracticePlatforms />} />
    </Routes>
  );
}

function YearPage() {
  const navigate = useNavigate();
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);

  const resourceButtons = [
    { name: 'DSA', icon: Code, bgHover: 'hover:bg-green-50', iconColor: 'text-green-600' },
    { name: 'Programming Languages', icon: Brain, bgHover: 'hover:bg-purple-50', iconColor: 'text-purple-600' },
    { name: 'Interview Questions', icon: FileQuestion, bgHover: 'hover:bg-orange-50', iconColor: 'text-orange-600' },
    { name: 'Roadmaps', icon: Map, bgHover: 'hover:bg-red-50', iconColor: 'text-red-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4">
        <h1 className="text-2xl font-bold text-center">Educational Resources</h1>
      </header>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => (
            <button
              key={year}
              onClick={() => navigate(`/year/${encodeURIComponent(year)}`)}
              className="bg-white hover:bg-blue-50 transition-colors p-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-between group"
            >
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-blue-600 mr-4" />
                <span className="text-lg font-medium text-gray-800">{year}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {resourceButtons.map((resource) => (
            <button
              key={resource.name}
              onClick={() => navigate(`/resource/${encodeURIComponent(resource.name)}`)}
              className={`bg-white ${resource.bgHover} transition-colors p-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-between group`}
            >
              <div className="flex items-center">
                <resource.icon className={`w-6 h-6 ${resource.iconColor} mr-4`} />
                <span className="text-lg font-medium text-gray-800">{resource.name}</span>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:${resource.iconColor} transition-colors`} />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => navigate('/practice')}
            className="bg-white hover:bg-blue-50 transition-colors p-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-between group"
          >
            <div className="flex items-center">
              <Code className="w-6 h-6 text-blue-600 mr-4" />
              <span className="text-lg font-medium text-gray-800">Practice Code</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </button>

          <a
            href="https://t.me/CSE_Helper_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-blue-50 transition-colors p-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-between group"
          >
            <div className="flex items-center">
              <MessageCircle className="w-6 h-6 text-blue-600 mr-4" />
              <span className="text-lg font-medium text-gray-800">CSE Chatbot</span>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </a>
        </div>

        <footer className="mt-12 text-center">
          <div className="text-gray-600 mb-4 flex items-center justify-center">
            <span>Developed by</span>
            <button
              onClick={() => navigate('/team/Hari')}
              className="text-blue-600 hover:text-blue-800 font-semibold mx-1"
            >
              Hari
            </button>
            <span>and</span>
            <div className="relative inline-block ml-1">
              <button 
                onClick={() => setShowTeamDropdown(!showTeamDropdown)}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                team
              </button>
              {showTeamDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={() => navigate('/team/Laxman')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Laxman
                  </button>
                  <button
                    onClick={() => navigate('/team/Sameer')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Sameer
                  </button>
                </div>
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;