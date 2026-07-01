import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function TeamCard({ member, index = 0 }) {
  return (
    <article className="relative bg-[#121216]/50 border border-white/5 hover:border-primary/50 rounded-md p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(225,6,0,0.15)] group">
      {/* Top red bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transform-origin-left transition-transform duration-300" />

      {/* Driver card number overlay */}
      <span className="absolute top-3 right-4 font-display text-4xl font-black text-white/[0.02] group-hover:text-primary/5 transition-colors duration-300 select-none">
        {member.number}
      </span>

      {/* Avatar wrapper */}
      <div className="relative mb-4">
        <div className="absolute -inset-1 rounded-full border border-dashed border-primary/20 group-hover:border-primary group-hover:animate-spin-slow transition-all duration-500" />
        <img
          src={member.avatar}
          alt={member.name}
          className="w-20 h-20 rounded-full border-2 border-white/10 group-hover:border-primary relative z-10 transition-colors duration-300"
        />
      </div>

      {/* Info details */}
      <h3 className="font-display text-base font-extrabold uppercase italic tracking-wide text-white group-hover:text-primary transition-colors">
        {member.name}
      </h3>
      <p className="text-[10px] uppercase font-bold tracking-widest text-primary mt-1">
        {member.role}
      </p>
      <p className="text-gray-400 text-xs mt-3 leading-relaxed max-w-[200px] flex-grow">
        {member.bio}
      </p>

      {/* Skills tags */}
      <div className="flex flex-wrap gap-1.5 justify-center mt-4 mb-5">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="text-[8px] font-bold uppercase px-2 py-0.5 rounded-sm bg-white/[0.03] border border-white/5 text-gray-400"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Social links footer */}
      <div className="flex gap-3 pt-4 border-t border-white/5 w-full justify-center">
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-sm bg-white/[0.02] hover:bg-primary border border-white/5 hover:border-primary flex items-center justify-center text-gray-500 hover:text-white transition-all"
            aria-label={`${member.name} GitHub`}
          >
            <GithubIcon size={12} />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-sm bg-white/[0.02] hover:bg-primary border border-white/5 hover:border-primary flex items-center justify-center text-gray-500 hover:text-white transition-all"
            aria-label={`${member.name} LinkedIn`}
          >
            <LinkedinIcon size={12} />
          </a>
        )}
      </div>
    </article>
  );
}
