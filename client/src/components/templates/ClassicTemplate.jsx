import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  BriefcaseBusiness,
} from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    if (!month) return dateStr; // not YYYY-MM format, return as-is
    const date = new Date(year, month - 1);
    if (isNaN(date)) return dateStr; // invalid date, return as-is
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <header className="text-center">
        <h1 className="text-4xl font-semibold" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        {/* Contact Row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-3 text-sm text-gray-600">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <Mail size={14} /> {data.personal_info.email}
            </div>
          )}

          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone size={14} /> {data.personal_info.phone}
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} /> {data.personal_info.location}
            </div>
          )}

          {data.personal_info?.profession && (
            <div className="flex items-center gap-1">
              <BriefcaseBusiness size={14} /> {data.personal_info.profession}
            </div>
          )}

          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={14} /> {data.personal_info.linkedin}
            </div>
          )}

          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <Globe size={14} /> {data.personal_info.website}
            </div>
          )}
        </div>

        <hr className="mt-6 border-t" style={{ borderColor: accentColor }} />
      </header>

      {/* ================= SUMMARY ================= */}
      {data.professional_summary && (
        <section className="mt-8">
          <h2
            className="uppercase text-sm font-semibold mb-2"
            style={{ color: accentColor }}
          >
            Professional Summary
          </h2>

          <p className="text-gray-700">{data.professional_summary}</p>
        </section>
      )}

      {/* ================= EXPERIENCE ================= */}
      {data.experience?.length > 0 && (
        <section className="mt-8">
          <h2
            className="uppercase text-sm font-semibold mb-4"
            style={{ color: accentColor }}
          >
            Professional Experience
          </h2>

          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="pl-4 border-l-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{exp.position}</h3>

                    <p className="text-sm font-medium">{exp.company}</p>
                  </div>

                  <span className="text-sm text-gray-600">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                {exp.description && (
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= PROJECTS ================= */}
      {data.projects?.length > 0 && (
        <section className="mt-8">
          <h2
            className="uppercase text-sm font-semibold mb-4"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-4">
            {data.projects.map((proj, index) => (
              <div
                key={index}
                className="pl-4 border-l-4"
                style={{ borderColor: accentColor }}
              >
                <h3 className="font-semibold">{proj.name}</h3>

                {proj.type && (
                  <p className="text-sm" style={{ color: accentColor }}>
                    {proj.type}
                  </p>
                )}

                {proj.description && (
                  <p className="text-gray-700">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= EDUCATION ================= */}
      {data.education?.length > 0 && (
        <section className="mt-8">
          <h2
            className="uppercase text-sm font-semibold mb-4"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold">{edu.degree}</h3>

                <p style={{ color: accentColor }}>{edu.institution}</p>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>{formatDate(edu.graduation_date)}</span>
                  {edu.gpa && <span>GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= SKILLS ================= */}
      {data.skills?.length > 0 && (
        <section className="mt-8">
          <h2
            className="uppercase text-sm font-semibold mb-3"
            style={{ color: accentColor }}
          >
            Core Skills
          </h2>

          <div className="flex flex-wrap gap-x-3 gap-y-2 text-gray-700">
            {data.skills.map((skill, index) => (
              <span key={index}>• {skill}</span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
