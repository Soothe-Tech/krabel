
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col pb-20">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-10 py-10">
        <div className="mx-auto max-w-[1200px]">
          <div 
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center rounded-2xl items-center justify-center p-8 text-center relative overflow-hidden" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAh2IK8YgBeiav7RwGIn_9hHtJb-mn_QK9i79Ebd-riYpR9er5mv28Lvd37CvqGDWOBrE6W1iFMCxjHYWeVGjmqWKGZj70CuXx-hyvOP-CKtWGWzrvhpKYw-w9vCde-vyWHJx9XymBXLyDIJRbhz81GWJRmRWQA9ixU09BrHiF-hChi4YDBE8Ulbe3UiWp55B_90JsosxpotnCHqeakqkQ2AjQe7jzzMsi6hz3TOuqpDvu20Vd-EQOAdD9mbvYC4CWKRgXE9hiEUuiq")` 
            }}
          >
            <div className="flex flex-col gap-4 max-w-[700px] z-10">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Celebrating 10 Years of Musical Excellence
              </h1>
              <p className="text-white/90 text-lg font-normal leading-relaxed font-noto">
                From humble beginnings to Port Harcourt's premier music hub, discover the story behind Krabel Musicals. A decade of nurturing talent and building community.
              </p>
            </div>
            <button className="z-10 h-12 px-8 rounded-lg bg-primary text-white font-bold transition-transform hover:scale-105 shadow-xl">
              Read Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-auto px-4 md:px-10 py-16">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[720px]">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Purpose</span>
            <h2 className="text-text-light text-3xl font-bold leading-tight md:text-4xl">Our Mission</h2>
            <p className="text-text-muted text-lg font-normal leading-relaxed font-noto">
              Raising confident, excellent, and godly musicians through dedicated mentorship and world-class training. We create an environment where creativity flourishes alongside character.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AboutCard icon="mic" title="Confidence" text="Empowering students to perform boldly on any stage, overcoming stage fright through regular recitals." />
            <AboutCard icon="emoji_events" title="Excellence" text="Striving for mastery in every note and technique, guided by certified professional instructors." />
            <AboutCard icon="volunteer_activism" title="Values" text="Instilling character, integrity, and godly principles alongside technical musical skill." />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold text-text-light mb-10">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AchievementColumn icon="school" title="Student Awards">
              <AchievementItem icon="star" color="text-yellow-500" title="MUSON Festival Winner 2023" desc="Our advanced piano student clinched 1st place in the regional competition." />
              <AchievementItem icon="music_note" color="text-blue-500" title="ABRSM High Scorers" desc="Over 50 students achieved distinction in international theory exams." />
            </AchievementColumn>
            <AchievementColumn icon="piano" title="Studio Projects">
              <AchievementItem icon="album" color="text-green-500" title="'Voices of PH' Album" desc="A collaborative studio album produced entirely by our production students." />
              <AchievementItem icon="podium" color="text-purple-500" title="Annual Christmas Cantata" desc="Port Harcourt's largest student-led orchestra performance, hosted for 5 years running." />
            </AchievementColumn>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 px-4 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
            <div className="flex flex-col gap-4 max-w-[600px]">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Community Impact</span>
              <h2 className="text-text-light text-3xl font-bold leading-tight md:text-4xl">More Than Music</h2>
              <p className="text-text-muted text-lg font-noto">
                We believe in the power of music to transform lives beyond the classroom. Our philanthropic initiatives support underprivileged children and provide employment for skilled instructors.
              </p>
            </div>
            <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20 shrink-0 transform hover:scale-105 transition-all">
              Support Our Cause
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImpactCard 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAH72lRQzqCBICyx0G8z-strmTyLAusYpAQexPTdUhbiNYSI4Yqzx1VxfiXSzH3pXNLr8yj6XVyTX6q1Gq7IN-u-sWYLQExM6Hs4WblPt0D_FF0g-GlwuXf8gSILQYwBJxIS2M5vdRa31R5EWm_QfPfergvdLBkWIXg_5p07HoJ-sJyazP1aQc4_zcbCmAx1cT_Z1a5ShQvHT-VE6t7mCMjsxWyFR36gP-xteCYd-r_EmauZqiqtQL4R-d7F6kQO3pAQegEp0xoamHQ" 
              title="Philanthropy" 
              desc="Providing free musical education and instruments to underprivileged children in Port Harcourt, giving them a voice and a future." 
            />
            <ImpactCard 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuASJZQfotCZS2qhbRK9OWCxlRi1ZSvW-MEQL6wc4HRm-UFNitwp6NrWEtWQs47z247Ra0hPCqi_h6ZFwl3hnrKxp0YgHQ53Myk3mSX3FfYCt3yoihWNf9n2xhUSPbWQCxVjUOLCe_DSEv1X-tyMBHvygsVFQ8bjcBr6qMzkqbwIs89ZNUwIw1Nmf6gK-YOoF0qf0wqYAwjKIhTZ1Di8s6oo40_WL3QdoA1Bmyvkxwuz7Nys5RwYrFEIMUu0wSryIb3u7tAJioDuXaim" 
              title="Job Creation" 
              desc="Building a sustainable career path for talented music instructors in our community, fostering a local economy of creativity." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutCard: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex flex-col gap-4 rounded-xl border border-border-light bg-white p-6 hover:border-primary/50 transition-colors">
    <div className="text-primary bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <h3 className="text-text-light text-lg font-bold leading-tight">{title}</h3>
    <p className="text-text-muted text-sm font-noto leading-relaxed">{text}</p>
  </div>
);

const AchievementColumn: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
      <h3 className="text-xl font-bold text-text-light">{title}</h3>
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

const AchievementItem: React.FC<{ icon: string; color: string; title: string; desc: string }> = ({ icon, color, title, desc }) => (
  <div className="flex items-start gap-4 p-4 rounded-lg bg-background-light">
    <div className={`size-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm ${color}`}>
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </div>
    <div>
      <h4 className="font-bold text-text-light">{title}</h4>
      <p className="text-sm text-text-muted font-noto leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ImpactCard: React.FC<{ img: string; title: string; desc: string }> = ({ img, title, desc }) => (
  <div className="group flex flex-col gap-4 overflow-hidden">
    <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="px-2">
      <h3 className="text-xl font-bold text-text-light mb-2">{title}</h3>
      <p className="text-text-muted text-sm font-noto leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default About;
