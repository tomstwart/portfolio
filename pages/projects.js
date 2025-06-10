import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-600">Description of project 1</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-600">Description of project 2</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-600">Description of project 3</p>
          </div>
        </div>
      </main>
    </div>
  );
} 