import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectList from '@/components/ProjectList';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="px-8 py-20 border-b border-white/10">
          <div className="flex items-center gap-2 mb-8 font-mono text-[10px] tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-accent">DATABASE_ACCESS // FULL_PROJECT_LIST</span>
          </div>
          <h1 className="text-huge font-black uppercase leading-none">
            PROJECT<br />CATALOGUE
          </h1>
        </section>

        <ProjectList />
      </main>

      <Footer />
    </div>
  );
}
