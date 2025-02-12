import TeamCard from "../../components/ui/teamCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Ashton Prince Mathias",
      role: "Developer",
      image: "/team/ashton.jpg",
      linkedin: "https://linkedin.com/in/ashtonmths",
      github: "https://github.com/subtilizer28",
      description: "your phone linging 📞",
      instagram: "https://instagram.com/_ashtonmathias_",
    },
    {
      name: "Ishan Shetty",
      role: "Developer",
      image: "/team/ishan.jpg",
      description: "I am  व्यंजनs 🦇",
      linkedin: "https://www.linkedin.com/in/ishan-shetty-0a889821a",
      github: "https://github.com/ishan-shetty",
      instagram: "https://instagram.com/ishanshetty_",
    },
    {
      name: "Gaurav Dhanraja",
      role: "Developer",
      image: "/team/gaurav.jpg",
      description: "I am the one who knocks (down my cgpa)",
      linkedin: "https://linkedin.com/in/gauravdhanraja",
      github: "https://github.com/gauravdhanraja",
      instagram: "https://instagram.com/gaurav.dhanraja",
    },
    {
      name: "Keerthan K",
      role: "Developer",
      description: "",
      image: "/team/keerthan.jpg",
      linkedin: "https://www.linkedin.com/in/keetha1011/",
      github: "https://github.com/keetha1011",
      instagram: "https://www.instagram.com/keetha_k11/",
    },
    {
      name: "Nandan R Pai",
      role: "Developer",
      description: "Enk Tulu Barpund!! Gottandaa??",
      image: "/team/nandan.jpg",
      github: "https://github.com/nandanpi",
      instagram: "https://instagram.com/nandanpi_",
    },
    {
      name: "Aryan Singh",
      role: "Designer",
      description: "Mujhe Ghar Jaana Hai 😭",
      image: "/team/aryan.jpg",
      github: "https://github.com/wizhill05",
      instagram: "https://instagram.com/just_aryansingh",
    },
    {
      name: "Mayur Shet",
      role: "Designer",
      description: "",
      image: "",
      instagram: "https://instagram.com/exposure._.studio",
      behance: "https://www.behance.net/mayurshet/",
    },
    {
      name: "Pavan C",
      role: "Designer",
      description: "",
      image: "",
      linkedin:
        "https://www.linkedin.com/in/pavan-c/",
      github: "https://github.com/PACHITRA",
      instagram: "https://www.instagram.com/pavan_chitrapura/",
      behance: "https://www.behance.net/pachitra/",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-bl from-emerald-950 to-emerald-800 py-20 overflow-y-scroll">
      <div className="mt-10 flex flex-wrap justify-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
