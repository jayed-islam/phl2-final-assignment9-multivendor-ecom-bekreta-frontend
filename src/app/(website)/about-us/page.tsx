import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto py-12 px-5 2xl:px-0">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn more about our mission, vision, and the team behind our
            multivendor e-commerce platform.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mt-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                At our platform, we aim to connect buyers and sellers across the
                globe with ease. We strive to empower local businesses and
                provide customers with an unparalleled shopping experience by
                offering a wide range of products.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mt-16">
          <div className="flex flex-col lg:flex-row items-center lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Our Vision"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our vision is to become a leading multivendor marketplace that
                fosters innovation, builds trust, and creates opportunities for
                everyone involved. We envision a future where technology bridges
                the gap between buyers and sellers seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center mt-2">
            The people who make it all possible.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member */}
            {[
              {
                name: "John Doe",
                role: "CEO",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Jane Smith",
                role: "CTO",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "David Brown",
                role: "COO",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Emily White",
                role: "CMO",
                img: "https://via.placeholder.com/150",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full"
                />
                <h3 className="mt-4 text-lg font-medium text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Join Our Journey
          </h2>
          <p className="mt-4 text-gray-600">
            Together, we can revolutionize the e-commerce industry.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
