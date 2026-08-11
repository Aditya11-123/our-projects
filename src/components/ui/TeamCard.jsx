import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail } from 'lucide-react';

export default function TeamCard({ member }) {
  return (
    <article className="bg-[#0B1018] border border-white/10 rounded-[18px] p-6 lg:p-8 flex flex-col items-center text-center overflow-hidden transition-all duration-300 hover:shadow-[0_4px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1 hover:border-brand-primary/40 group h-full relative">
      
      {/* Numbering */}
      <div className="absolute top-6 left-6 text-brand-primary/60 font-display text-sm font-bold group-hover:text-brand-primary transition-colors flex items-center gap-2">
        <span className="w-px h-3 bg-brand-primary/40 group-hover:bg-brand-primary transition-colors"></span>
        {member.number}
      </div>

      {/* Avatar wrapper */}
      <div className="relative mt-8 mb-6 mx-auto w-[120px] h-[120px] lg:w-[130px] lg:h-[130px]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-full border border-brand-primary/40 object-cover shadow-[0_0_15px_rgba(37,99,235,0.05)] group-hover:border-brand-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] group-hover:scale-[1.03] transition-all duration-300"
        />
      </div>

      {/* Info details */}
      <h3 className="font-display text-[19px] lg:text-[20px] font-semibold text-white">
        {member.name}
      </h3>
      <p className="text-[14px] lg:text-[15px] font-medium text-brand-primary mt-1 mb-4">
        {member.role}
      </p>
      
      <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-400 mb-6 max-w-sm">
        {member.description}
      </p>

      {/* Focus areas */}
      <div className="mt-auto mb-8 text-[11px] lg:text-[12px] font-bold tracking-widest uppercase text-gray-500 group-hover:text-brand-primary/80 transition-colors leading-loose">
        {member.focus}
      </div>

      {/* Social links footer */}
      <div className="flex gap-4 pt-5 border-t border-white/5 w-full justify-center">
        {member.githubUrl && (
          <a
            href={member.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-brand-primary transition-colors"
            aria-label={`${member.name} GitHub`}
          >
            <GithubIcon size={18} />
          </a>
        )}
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-brand-primary transition-colors"
            aria-label={`${member.name} LinkedIn`}
          >
            <LinkedinIcon size={18} />
          </a>
        )}
        {member.emailUrl && (
          <a
            href={member.emailUrl}
            className="text-gray-500 hover:text-brand-primary transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </article>
  );
}
