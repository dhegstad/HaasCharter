const crewMembers = [
  {
    role: "Captain",
    name: "James Haas",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    stats: ["12,000+ Flight Hours", "ATP Rated · G550 Type", "Former Naval Aviator"],
  },
  {
    role: "First Officer",
    name: "Sarah Mitchell",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    stats: ["6,500 Flight Hours", "G550 Qualified", "Certified Flight Instructor"],
  },
  {
    role: "Cabin Service",
    name: "Elena Vasquez",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    stats: ["8 Years Private Aviation", "IS-BAO Trained", "Culinary Certified"],
  },
];

export default function Crew() {
  return (
    <section id="crew" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">
            The Crew
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-end">
            <h3 className="text-4xl font-light text-white">
              Dedicated to One Aircraft.
            </h3>
            <p className="text-gray-400 mt-4 md:mt-0 text-sm tracking-wide border-l border-gold pl-4">
              Your crew flies together, every flight. No substitutions, no
              surprises.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {crewMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="h-96 bg-gray-800 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  className="w-full h-full object-cover object-top"
                  alt={member.role}
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-gold text-xs uppercase tracking-widest mb-1">
                    {member.role}
                  </p>
                  <p className="text-white text-xl font-light">{member.name}</p>
                </div>
              </div>
              <div className="border-l border-white/20 pl-4 space-y-1">
                {member.stats.map((stat) => (
                  <p key={stat} className="text-gray-400 text-sm">
                    {stat}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
