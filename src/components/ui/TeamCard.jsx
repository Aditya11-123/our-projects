import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail } from 'lucide-react';

export default function TeamCard({ member }) {
  return (
    <article className="bg-white border border-gray-200 hover:border-brand-primary/30 rounded-2xl p-6 flex flex-col text-center overflow-hidden transition-all duration-300 hover:shadow-lg group">
      
      {/* Avatar wrapper */}
      <div className="relative mb-6 mx-auto w-24 h-24">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-full border-2 border-gray-100 object-cover group-hover:border-brand-primary transition-colors duration-300"
        />
        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white bg-green-500" title={member.availability}></div>
      </div>

      {/* Info details */}
      <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-brand-primary mt-1">
        {member.role}
      </p>
      
      <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500 font-medium">
        <span>{member.location}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
        <span>{member.experience}</span>
      </div>

      {/* Skills tags */}
      <div className="flex flex-wrap gap-1.5 justify-center mt-5 mb-6">
        {member.languages?.map((lang) => (
          <span
            key={lang}
            className="text-[10px] font-semibold uppercase px-2 py-1 rounded-full bg-gray-100 text-gray-600"
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Social links footer */}
      <div className="flex gap-3 pt-4 border-t border-gray-100 w-full justify-center mt-auto">
        {member.githubUrl && (
          <a
            href={member.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-brand-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
            aria-label={`${member.name} GitHub`}
          >
            <GithubIcon size={14} />
          </a>
        )}
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-brand-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
            aria-label={`${member.name} LinkedIn`}
          >
            <LinkedinIcon size={14} />
          </a>
        )}
        {member.emailUrl && (
          <a
            href={member.emailUrl}
            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-brand-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <Mail size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
