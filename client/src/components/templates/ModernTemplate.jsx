import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
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
    <div className="max-w-4xl mx-auto bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <header
        className="px-10 py-8 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-4xl font-medium mb-4">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail size={15} />
              {data.personal_info.email}
            </div>
          )}

          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone size={15} />
              {data.personal_info.phone}
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin size={15} />
              {data.personal_info.location}
            </div>
          )}

          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin size={15} />
              {data.personal_info.linkedin}
            </div>
          )}

          {data.personal_info?.website && (
            <div className="flex items-center gap-2">
              <Globe size={15} />
              {data.personal_info.website}
            </div>
          )}
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="px-10 py-8 space-y-10">
        {/* ===== SUMMARY ===== */}
        {data.professional_summary && (
          <section>
            <h2 className="text-xl font-semibold mb-2 border-b">
              Professional Summary
            </h2>
            <p className="mt-2 text-gray-700">{data.professional_summary}</p>
          </section>
        )}

        {/* ===== EXPERIENCE ===== */}
        {data.experience?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b">Experience</h2>

            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: accentColor }}
                      >
                        {exp.company}
                      </p>
                    </div>

                    <span className="text-xs bg-gray-100 px-3 py-1 rounded">
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

        {/* ===== PROJECTS ===== */}
        {data.projects?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b">Projects</h2>

            <div className="space-y-6">
              {data.projects.map((proj, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <h3 className="font-semibold">{proj.name}</h3>

                  {proj.type && (
                    <p className="text-sm" style={{ color: accentColor }}>
                      {proj.type}
                    </p>
                  )}

                  {proj.description && (
                    <p className="mt-1 text-gray-700">{proj.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== EDUCATION + SKILLS ===== */}
        <div className="grid sm:grid-cols-2 gap-10">
          {/* EDUCATION */}
          {data.education?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b">Education</h2>

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

          {/* SKILLS */}
          {data.skills?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b">Skills</h2>

              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-white text-sm"
                    style={{ backgroundColor: accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
