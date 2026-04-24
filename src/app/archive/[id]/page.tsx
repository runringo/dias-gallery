import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

import ProjectTabs from '@/components/ProjectTabs';

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow px-8 py-20">
        <div className="flex items-center gap-2 mb-12 font-mono text-[10px] tracking-[0.2em]">
          <Link href="/" className="text-white/40 hover:text-accent transition-colors">ARCHIVE</Link>
          <span className="text-white/20">/</span>
          <span className="text-accent">{project.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h1 className="text-huge font-black uppercase leading-none mb-20 break-words">
              {project.title.replace(/_/g, ' ')}
            </h1>
            
            <ProjectTabs 
              overview={project.description || ''} 
              brief={project.brief || ''} 
              processLog={project.processLog || []} 
            />

            {/* Project Images - Only for Sports Branding 2024 (ID 1) */}
            {project.id === '1' && (
              <section className="mt-40 space-y-40">
                <div className="space-y-8">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <h2 className="font-mono text-xs tracking-widest text-accent uppercase">01_IDENTITY_SYSTEM</h2>
                    <span className="font-mono text-[8px] text-white/20">FILE: IDENTITY_001.JPG</span>
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden border border-white/5 bg-white/5">
                    <Image src="/sports_branding_identity.png" alt="Identity System" fill className="object-cover" />
                  </div>
                  <p className="max-w-2xl text-sm text-white/40 leading-relaxed font-mono">
                    The identity system is built on a strict 8-column grid, allowing for modular asset generation across multiple platforms.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-8">
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <h2 className="font-mono text-xs tracking-widest text-accent uppercase">02_SOCIAL_ECOSYSTEM</h2>
                    </div>
                    <div className="relative aspect-square w-full overflow-hidden border border-white/5 bg-white/5">
                      <Image src="/sports_branding_social_media.png" alt="Social Media" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <h2 className="font-mono text-xs tracking-widest text-accent uppercase">03_3D_APPAREL</h2>
                    </div>
                    <div className="relative aspect-square w-full overflow-hidden border border-white/5 bg-white/5">
                      <Image src="/sports_branding_3d_apparel.png" alt="3D Apparel" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="font-mono text-[10px] tracking-widest flex flex-col gap-4 border-t border-white/10 pt-8">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40">CLIENT</span>
                  <span className="text-right uppercase">{project.client}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40">TYPE</span>
                  <span className="text-right uppercase">{project.type}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40">YEAR</span>
                  <span className="text-right">{project.year}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40">ROLE</span>
                  <span className="text-right uppercase">{project.role || 'DESIGNER'}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white/40">TECH_STACK</span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tech?.map((t) => (
                      <span key={t} className="border border-white/20 px-2 py-1 text-[8px]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                href="mailto:contact@rizkydias.com"
                className="block w-full bg-accent text-black text-center py-4 font-bold tracking-widest hover:bg-white transition-colors"
              >
                INQUIRE_ON_PROJECT_
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <section className="mt-40 pt-20 border-t border-white/10 grid grid-cols-2 gap-px bg-white/10">
          {prevProject ? (
            <Link 
              href={`/archive/${prevProject.id}`}
              className="bg-black py-20 px-8 flex flex-col items-start group hover:bg-white/[0.02] transition-colors"
            >
              <span className="font-mono text-[10px] text-white/30 mb-4 tracking-widest uppercase">PREVIOUS_PROJECT</span>
              <div className="text-8xl mb-4 group-hover:-translate-x-4 transition-transform duration-500 text-accent">←</div>
              <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">{prevProject.title}</span>
            </Link>
          ) : <div className="bg-black" />}

          {nextProject ? (
            <Link 
              href={`/archive/${nextProject.id}`}
              className="bg-black py-20 px-8 flex flex-col items-end text-right group hover:bg-white/[0.02] transition-colors"
            >
              <span className="font-mono text-[10px] text-white/30 mb-4 tracking-widest uppercase">NEXT_PROJECT</span>
              <div className="text-8xl mb-4 group-hover:translate-x-4 transition-transform duration-500 text-accent">→</div>
              <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">{nextProject.title}</span>
            </Link>
          ) : <div className="bg-black" />}
        </section>
      </main>

      <Footer />
    </div>
  );
}
