// const MinimalTemplate = ({ data, accentColor }) => {
//   const formatDate = (dateStr) => {
//     if (!dateStr) return "";
//     const [year, month] = dateStr.split("-");
//     if (!month) return dateStr; // not YYYY-MM format, return as-is
//     const date = new Date(year, month - 1);
//     if (isNaN(date)) return dateStr; // invalid date, return as-is
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light">
//       {/* Header */}
//       <header className="mb-10">
//         <h1 className="text-4xl font-thin mb-4 tracking-wide">
//           {data.personal_info?.full_name || "Your Name"}
//         </h1>

//         <div className="flex flex-wrap gap-6 text-sm text-gray-600">
//           {data.personal_info?.email && <span>{data.personal_info.email}</span>}
//           {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
//           {data.personal_info?.location && (
//             <span>{data.personal_info.location}</span>
//           )}
//           {data.personal_info?.linkedin && (
//             <span className="break-all">{data.personal_info.linkedin}</span>
//           )}
//           {data.personal_info?.website && (
//             <span className="break-all">{data.personal_info.website}</span>
//           )}
//         </div>
//       </header>

//       {/* Professional Summary */}
//       {data.professional_summary && (
//         <section className="mb-10">
//           <p className=" text-gray-700">{data.professional_summary}</p>
//         </section>
//       )}

//       {/* Experience */}
//       {data.experience && data.experience.length > 0 && (
//         <section className="mb-10">
//           <h2
//             className="text-sm uppercase tracking-widest mb-6 font-medium"
//             style={{ color: accentColor }}
//           >
//             Experience
//           </h2>

//           <div className="space-y-6">
//             {data.experience.map((exp, index) => (
//               <div key={index}>
//                 <div className="flex justify-between items-baseline mb-1">
//                   <h3 className="text-lg font-medium">{exp.position}</h3>
//                   <span className="text-sm text-gray-500">
//                     {formatDate(exp.start_date)} -{" "}
//                     {exp.is_current ? "Present" : formatDate(exp.end_date)}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 mb-2">{exp.company}</p>
//                 {exp.description && (
//                   <div className="text-gray-700 leading-relaxed whitespace-pre-line">
//                     {exp.description}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Projects */}
//       {data.projects && data.projects.length > 0 && (
//         <section className="mb-10">
//           <h2
//             className="text-sm uppercase tracking-widest mb-6 font-medium"
//             style={{ color: accentColor }}
//           >
//             Projects
//           </h2>

//           <div className="space-y-4">
//             {data.projects.map((proj, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col gap-2 justify-between items-baseline"
//               >
//                 <h3 className="text-lg font-medium ">{proj.name}</h3>
//                 <p className="text-gray-600">{proj.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Education */}
//       {data.education && data.education.length > 0 && (
//         <section className="mb-10">
//           <h2
//             className="text-sm uppercase tracking-widest mb-6 font-medium"
//             style={{ color: accentColor }}
//           >
//             Education
//           </h2>

//           <div className="space-y-4">
//             {data.education.map((edu, index) => (
//               <div key={index} className="flex justify-between items-baseline">
//                 <div>
//                   <h3 className="font-medium">
//                     {edu.degree} {edu.field && `in ${edu.field}`}
//                   </h3>
//                   <p className="text-gray-600">{edu.institution}</p>
//                   {edu.gpa && (
//                     <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>
//                   )}
//                 </div>
//                 <span className="text-sm text-gray-500">
//                   {formatDate(edu.graduation_date)}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Skills */}
//       {data.skills && data.skills.length > 0 && (
//         <section>
//           <h2
//             className="text-sm uppercase tracking-widest mb-6 font-medium"
//             style={{ color: accentColor }}
//           >
//             Skills
//           </h2>

//           <div className="text-gray-700">{data.skills.join(" • ")}</div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default MinimalTemplate;
import { Mail, MapPin, Phone, Linkedin, Globe } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    if (!month) return dateStr;
    const date = new Date(year, month - 1);
    if (isNaN(date)) return dateStr;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const imageSrc = data.personal_info?.image
    ? typeof data.personal_info.image === "string"
      ? data.personal_info.image
      : URL.createObjectURL(data.personal_info.image)
    : null;

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      <div className="grid grid-cols-3">
        {/* IMAGE COLUMN — background tinted with accentColor */}
        <div
          className="col-span-1 py-10 text-center flex items-start justify-center"
          style={{ backgroundColor: accentColor + "25" }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
              style={{ border: `3px solid ${accentColor}` }}
            />
          ) : (
            <div
              className="w-32 h-32 rounded-full mx-auto mt-4 flex items-center justify-center text-white text-3xl font-bold"
              style={{ backgroundColor: accentColor + "60" }}
            >
              {data.personal_info?.full_name?.[0] || "?"}
            </div>
          )}
        </div>

        {/* NAME + TITLE */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-8">
          <h1 className="text-4xl font-bold tracking-widest text-zinc-700">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest">
            {data.personal_info?.profession || ""}
          </p>
        </div>

        {/* LEFT SIDEBAR */}
        <aside className="col-span-1 border-r border-zinc-300 p-6 pt-0">
          {/* CONTACT */}
          <section className="mb-8">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm">
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  {data.personal_info.phone}
                </div>
              )}
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: accentColor }} />
                  {data.personal_info.email}
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  {data.personal_info.location}
                </div>
              )}
              {data.personal_info?.linkedin && (
                <div className="flex items-center gap-2">
                  <Linkedin size={14} style={{ color: accentColor }} />
                  <span className="break-all text-xs">
                    {data.personal_info.linkedin}
                  </span>
                </div>
              )}
              {data.personal_info?.website && (
                <div className="flex items-center gap-2">
                  <Globe size={14} style={{ color: accentColor }} />
                  <span className="break-all text-xs">
                    {data.personal_info.website}
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* EDUCATION */}
          {data.education?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                EDUCATION
              </h2>
              <div className="space-y-4 text-sm">
                {data.education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-semibold uppercase">{edu.degree}</p>
                    <p className="text-zinc-600">{edu.institution}</p>
                    <p className="text-xs text-zinc-500">
                      {formatDate(edu.graduation_date)}
                    </p>
                    {edu.gpa && (
                      <p className="text-xs text-zinc-500">GPA: {edu.gpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS */}
          {data.skills?.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                SKILLS
              </h2>
              <ul className="space-y-1 text-sm">
                {data.skills.map((skill, i) => (
                  <li key={i} className="text-zinc-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-span-2 p-8 pt-0">
          {/* SUMMARY */}
          {data.professional_summary && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                PROFILE
              </h2>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          {data.experience?.length > 0 && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                {data.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold text-zinc-900">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-zinc-500">
                        {formatDate(exp.start_date)} –{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: accentColor }}>
                      {exp.company}
                    </p>
                    {exp.description && (
                      <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {data.projects?.length > 0 && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-6">
                {data.projects.map((project, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-zinc-900">
                      {project.name}
                    </h3>
                    {project.type && (
                      <p
                        className="text-sm font-medium mb-1"
                        style={{ color: accentColor }}
                      >
                        {project.type}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-sm text-zinc-700 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
