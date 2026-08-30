export default function MemberCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-3">{member.role}</p>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{member.bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex gap-4 text-xs font-semibold text-slate-400">
          <a href={member.socials.github} className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href={member.socials.linkedin} className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href={member.socials.twitter} className="hover:text-blue-600 transition-colors">Twitter</a>
        </div>
      </div>
    </div>
  );
}