import Services from '../components/home/Services';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Website</h1>
            <p className="text-lg text-gray-700 mb-8">
              This is a completely redesigned website with a focus on simplicity and performance.
            </p>
          </div>
        </section>
        <Services />
      </main>
    </div>
  );
}
