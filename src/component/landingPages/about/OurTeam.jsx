import teamMember1 from "../../../images/p2.jpg";
import teamMember2 from "../../../images/p1.jpeg";
import teamMember3 from "../../../images/p3.jpeg"; // Add new image for the new member

export default function OurTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image: teamMember1,
      bio: "John leads our company with vision and integrity.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: teamMember2,
      bio: "Jane drives our technology strategy and innovation.",
    },
    {
      name: "Emily Johnson", // New team member
      role: "CFO",
      image: teamMember3,
      bio: "Emily oversees our financial operations with expertise and precision.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md w-72 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover  mb-4 border-4 border-gray-300"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {member.name}
              </h3>
              <p className="text-lg text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
