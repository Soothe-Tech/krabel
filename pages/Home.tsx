
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-10 py-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative overflow-hidden rounded-2xl bg-navy-brand shadow-2xl">
            <div className="absolute inset-0 z-0">
              <div 
                className="h-full w-full bg-cover bg-center opacity-40" 
                style={{ 
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3U0K5O_Mi8zkO1Z1jtOk-b_ESIHf3UzCkaLxBHJrgI2s8SynLlEzLSW4riQ-ylJWzcfMhi_Ais_dumLmlqhOB9KPJKRQhMEe1BqJfG44kCkuIgbXZ6m5MGcOIUkDxZzIU08qt5xumQz3h3MAMBnxA4ps2-ZwfE8JBEnkGXr5LO-KaXYRVsxN2_uZtMCzsg7c9HGOuQ_2A265loSYrELtDUM_T7hbzEV9bd5ZOsjk5SrfVE3njR4_6vyHJZDkROoQMrjZA6X9kyAId')` 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-brand via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 flex min-h-[580px] flex-col items-center justify-center px-4 py-20 text-center">
              <div className="mb-6 flex justify-center">
                 <img src="logo.png" alt="Logo" className="h-20 w-auto brightness-200" />
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                Raising Godly and <span className="text-primary italic">Skilled Musicians</span>
              </h1>
              <p className="mb-10 max-w-2xl text-lg font-medium text-gray-300 md:text-xl font-noto">
                Celebrating 10 years of excellence in music education, character building, and philanthropy in the heart of Port Harcourt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="https://www.instagram.com/krabelmusicals" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-14 px-10 flex items-center justify-center rounded-xl bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 md:px-10 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16 flex flex-col gap-4 text-center md:text-left">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl font-black text-navy-brand md:text-5xl">Professional Services</h2>
            <p className="text-lg text-text-muted max-w-2xl font-noto">Comprehensive music education and instrument solutions tailored for excellence and personal growth.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard 
              icon="piano" 
              title="Instrumental Training" 
              desc="Expert tuition in piano, guitar, violin, and drums tailored for all skill levels from beginner to advanced." 
            />
            <ServiceCard 
              icon="groups" 
              title="Boot Camps" 
              desc="Intensive music workshops designed to accelerate learning, performance skills, and band dynamics." 
            />
            <ServiceCard 
              icon="storefront" 
              title="Instrument Sales" 
              desc="High-quality musical instruments and accessories available for purchase at competitive prices." 
            />
            <ServiceCard 
              icon="handshake" 
              title="Mentorship" 
              desc="Guidance and career counseling for aspiring professional musicians to navigate the industry." 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full px-4 md:px-10 py-24 bg-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-black leading-tight text-navy-brand md:text-5xl">
                Why Krabel Musicals?
              </h2>
              <p className="text-lg text-text-muted font-noto leading-relaxed">
                We combine strict musical discipline with a profound sense of purpose, ensuring our students excel not just as performers, but as leaders.
              </p>
              <div className="flex flex-col gap-8 pt-4">
                <CheckItem icon="verified" title="Proven Excellence" desc="Over a decade of raising skilled musicians who excel on local and global stages." />
                <CheckItem icon="psychology" title="Holistic Approach" desc="We focus on both technical proficiency and character building, nurturing the whole person." />
                <CheckItem icon="diversity_3" title="Community Focus" desc="Deeply rooted in philanthropy and giving back to the Port Harcourt community through music." />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="overflow-hidden rounded-2xl h-56 w-full shadow-lg">
                  <img src="https://picsum.photos/seed/mus1/400/500" alt="Music" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden rounded-2xl h-72 w-full shadow-lg">
                  <img src="https://picsum.photos/seed/mus2/400/600" alt="Piano" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl h-72 w-full shadow-lg">
                  <img src="https://picsum.photos/seed/mus3/400/600" alt="Violin" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden rounded-2xl h-56 w-full shadow-lg">
                  <img src="https://picsum.photos/seed/mus4/400/500" alt="Guitar" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-10 py-24">
        <div className="mx-auto max-w-[1000px] rounded-[2.5rem] bg-navy-brand p-12 text-center text-white shadow-2xl md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <img src="logo.png" alt="Logo Icon" className="h-20 w-auto mx-auto mb-10 brightness-200" />
          <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Start Your Journey.
          </h2>
          <p className="mb-10 text-xl font-medium text-gray-400 font-noto">
            Join the Krabel family today and discover your full potential.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row relative z-10">
            <a 
              href="https://www.instagram.com/krabelmusicals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-14 min-w-[200px] flex items-center justify-center rounded-xl bg-primary px-8 text-lg font-bold text-white hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/30"
            >
              Enroll Now
            </a>
            <button className="h-14 min-w-[200px] rounded-xl border-2 border-white/20 px-8 text-lg font-bold text-white hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group flex flex-col rounded-2xl border border-border-light bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
      <span className="material-symbols-outlined text-4xl">{icon}</span>
    </div>
    <h3 className="mb-3 text-2xl font-bold text-navy-brand">{title}</h3>
    <p className="text-base text-text-muted font-noto leading-relaxed">{desc}</p>
  </div>
);

const CheckItem: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0 mt-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-navy-brand mb-1">{title}</h3>
      <p className="text-text-muted font-noto leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Home;
