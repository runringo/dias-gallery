import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBio from '@/components/AnimatedBio';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-8 font-mono text-[10px] tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-accent">IDENTITY_LOG // ARCHIVE_001</span>
            </div>
            
            <h1 className="text-huge font-black uppercase leading-none mb-20">
              RIZKY<br />DIAS
            </h1>
            
            <div className="max-w-2xl">
              <h2 className="font-mono text-xs tracking-widest text-accent mb-6 uppercase">BIO_GRAPH_</h2>
              <AnimatedBio />
            </div>

              <section className="pt-20 border-t border-white/10">
                <h2 className="font-mono text-xs tracking-widest text-accent mb-10 uppercase">CAPABILITIES_001</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 font-mono text-xs">
                  <div className="space-y-4">
                    <div className="text-white/40 pb-2 border-b border-white/10">DESIGN_SYSTEMS</div>
                    <div className="text-white/40 pb-2 border-b border-white/10">IDENTITY_DESIGN</div>
                    <div className="text-white/40 pb-2 border-b border-white/10">UI_ARCHITECTURE</div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-white/40 pb-2 border-b border-white/10">NEXT_JS_DEV</div>
                    <div className="text-white/40 pb-2 border-b border-white/10">WEBGL_ANIMATION</div>
                    <div className="text-white/40 pb-2 border-b border-white/10">TYPESCRIPT_ENV</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-20">
              <section className="font-mono text-[10px] tracking-widest space-y-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-white/20 mb-2">CURRENT_LOCATION</div>
                  <div className="text-white">SURABAYA, INDONESIA</div>
                </div>
                <div>
                  <div className="text-white/20 mb-2">TIMEZONE</div>
                  <div className="text-white">GMT+7 [WIB]</div>
                </div>
                <div>
                  <div className="text-white/20 mb-2">AVAILABILITY</div>
                  <div className="text-white text-accent">AVAILABLE_FOR_FREELANCE_</div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="font-mono text-[10px] tracking-widest text-white/20">CONNECT_</h3>
                <div className="flex flex-col gap-4 font-mono text-xs">
                  <a href="#" className="hover:text-accent transition-colors">[ INSTAGRAM ]</a>
                  <a href="#" className="hover:text-accent transition-colors">[ TWITTER_X ]</a>
                  <a href="#" className="hover:text-accent transition-colors">[ LINKEDIN ]</a>
                  <a href="#" className="hover:text-accent transition-colors text-accent underline underline-offset-8">[ DOWNLOAD_CV_PDF ]</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
