export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-4">Omnimusha Crypto Dashboard</h1>
      <div className="text-center mt-8">
        <a href="/register" className="px-4 py-2 bg-blue-600 text-white rounded shadow mr-4">Register</a>
        <a href="/login" className="px-4 py-2 bg-green-600 text-white rounded shadow">Login</a>
      </div>
    </div>
  );
}