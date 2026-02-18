
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pb-20">
      <div className="w-full max-w-[960px] flex flex-col">
        {/* Page Heading */}
        <div className="w-full px-4 pt-12 pb-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-text-light text-4xl md:text-5xl font-black leading-tight tracking-tight">Contact & Careers</h1>
            <p className="text-text-muted text-lg font-normal leading-normal max-w-2xl font-noto">
              Get in touch with us for inquiries about our courses and instruments, or join our team of passionate music educators in Port Harcourt.
            </p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="w-full px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-border-light">
            <ContactInfoItem icon="location_on" label="Address" val="Atilantic Events Hall, League Hotel" sub="Okilton Ada George, Port Harcourt, Nigeria" />
            <ContactInfoItem icon="call" label="Phone" val="+234 813 939 1925" sub="Mon-Sat, 9am - 6pm" isPhone />
            <ContactInfoItem icon="mail" label="Email" val="krabel247@gmail.com" sub="For general inquiries and support" isLink />
            <ContactInfoItem icon="share" label="Socials" val="YouTube • Facebook • Instagram • LinkedIn • TikTok" sub="Follow us for updates and student performances" />
          </div>
        </div>

        {/* Map Location */}
        <div className="w-full px-4 py-6">
          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden relative group shadow-lg">
            <img 
              alt="Map view" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqafrE4go2UxIXlArN1ADgMqBATLl6bxjE-R3A4us8V9fyc9IT6tSlPkHOKbJtmykid35XNXWez9mGkMcAWeaumBPrJp6NJofAzgJ9GonywPd97OLQoy_96ztMdaNVB35O0sZftvPUg-FVTQk3ddW4BSZgRP1PgjZusQbL8CWptk-VhcFi4gCsmPw50UN7L47Z4sv_aTDWoyFglMXBDXTQQpVlLs83VyC7nwhlGYKGstKKpO_Otp1I049kc_O29kQr0pMaKjKRKW8E" 
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 bg-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-border-light">
              <span className="material-symbols-outlined text-primary text-2xl">my_location</span>
              <span className="text-base font-bold text-text-light">Visit our Studio</span>
            </div>
          </div>
        </div>

        {/* Social Action Panel */}
        <div className="w-full px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-border-light bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined">smart_display</span>
                <span className="text-xs font-bold uppercase tracking-wider">Online Presence</span>
              </div>
              <h3 className="text-text-light text-xl font-bold leading-tight">Watch Our Students Perform</h3>
              <p className="text-text-muted text-base font-normal font-noto leading-normal max-w-lg">
                See the progress of our students and behind-the-scenes content on our YouTube and TikTok channels.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-colors" href="https://youtube.com/@krabelmusicals9930" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube text-lg" /> YouTube
              </a>
              <a className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background-light text-text-light font-bold hover:bg-border-light transition-colors" href="https://www.tiktok.com/@krabelmusicals" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok text-lg" /> TikTok
              </a>
              <a className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background-light text-text-light font-bold hover:bg-border-light transition-colors" href="https://www.instagram.com/krabelmusicals" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-lg" /> Instagram
              </a>
              <a className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background-light text-text-light font-bold hover:bg-border-light transition-colors" href="https://www.facebook.com/share/1BicmudxNr/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f text-lg" /> Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div id="careers" className="w-full px-4 py-16 scroll-mt-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border-light pb-8">
              <div className="flex flex-col gap-4 max-w-[720px]">
                <h2 className="text-text-light text-3xl font-bold leading-tight tracking-tight">Join Our Team</h2>
                <p className="text-text-muted text-lg font-noto leading-relaxed">
                  We are always looking for talented music instructors to join our faculty. If you are passionate about teaching keyboard, violin, vocals, or other instruments, we want to hear from you. We also create employment opportunities for young music instructors.
                </p>
              </div>
              <a href="#careers" className="h-12 px-8 rounded-lg bg-primary text-white font-bold transform hover:scale-105 transition-all shadow-lg shadow-primary/30 shrink-0 flex items-center justify-center">
                Apply via Job Portal
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <CareerCard icon="favorite" title="Passionate Environment" text="Work with dedicated students and a supportive team of music lovers." />
              <CareerCard icon="trending_up" title="Professional Growth" text="Opportunities for training, certification, and skill development." />
              <CareerCard icon="music_note" title="Impactful Work" text="Help shape the next generation of talented musicians in Port Harcourt." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem: React.FC<{ icon: string; label: string; val: string; sub: string; isLink?: boolean; isPhone?: boolean }> = ({ icon, label, val, sub, isLink, isPhone }) => (
  <div className="flex flex-col gap-1 py-6 border-b border-border-light">
    <div className="flex items-center gap-2 mb-1">
      <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
      <p className="text-text-muted text-xs font-bold uppercase tracking-widest">{label}</p>
    </div>
    {isLink ? (
      <a className="text-text-light text-lg font-medium hover:text-primary transition-colors" href={`mailto:${val}`}>{val}</a>
    ) : isPhone ? (
      <a className="text-text-light text-lg font-medium hover:text-primary transition-colors" href={`tel:${val.replace(/\s/g, '')}`}>{val}</a>
    ) : (
      <p className="text-text-light text-lg font-medium">{val}</p>
    )}
    <p className="text-text-muted text-sm font-noto">{sub}</p>
  </div>
);

const CareerCard: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex flex-col gap-4 rounded-xl border border-border-light bg-white p-6 hover:border-primary/50 transition-colors group">
    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-text-light text-lg font-bold">{title}</h3>
      <p className="text-text-muted text-sm font-noto leading-relaxed">{text}</p>
    </div>
  </div>
);

export default Contact;
