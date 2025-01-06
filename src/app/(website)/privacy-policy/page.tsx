import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto py-12 px-5 2xl:px-0">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your privacy is important to us. Read on to learn how we collect,
            use, and safeguard your information.
          </p>
        </div>

        {/* Introduction */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Welcome to our Privacy Policy page. This document explains how we
            handle your personal information when you use our website. By
            accessing our site, you agree to the terms outlined here.
          </p>
        </section>

        {/* Data Collection Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">
            Information We Collect
          </h2>
          <ul className="mt-4 space-y-4 text-gray-600 leading-relaxed">
            <li>
              <span className="font-semibold">Personal Information:</span> We
              may collect details like your name, email address, phone number,
              and shipping address when you register or make a purchase.
            </li>
            <li>
              <span className="font-semibold">Browsing Data:</span> Information
              about your browsing activities, such as visited pages, time spent
              on the site, and search queries.
            </li>
            <li>
              <span className="font-semibold">Cookies:</span> We use cookies to
              enhance your experience and track your preferences.
            </li>
          </ul>
        </section>

        {/* Usage of Information Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">
            How We Use Your Information
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The information we collect is used to:
          </p>
          <ul className="mt-4 space-y-4 text-gray-600 leading-relaxed list-disc pl-5">
            <li>Provide and improve our services.</li>
            <li>Process your orders and deliver products.</li>
            <li>Send updates, promotions, and notifications.</li>
            <li>Ensure site security and prevent fraud.</li>
          </ul>
        </section>

        {/* Data Protection Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">
            Protecting Your Information
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We implement strict security measures to protect your data. Access
            to personal information is restricted to authorized personnel only.
            While we strive to ensure data security, no method of transmission
            or storage is completely secure, and we cannot guarantee 100%
            security.
          </p>
        </section>

        {/* Third-Party Sharing Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">
            Sharing Information with Third Parties
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We do not sell or share your personal information with third
            parties, except for:
          </p>
          <ul className="mt-4 space-y-4 text-gray-600 leading-relaxed list-disc pl-5">
            <li>
              Service providers assisting with operations (e.g., payment
              processing).
            </li>
            <li>Compliance with legal obligations.</li>
            <li>Prevention of fraud or unauthorized activities.</li>
          </ul>
        </section>

        {/* Your Rights Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Your Rights</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            As a user, you have rights regarding your personal data:
          </p>
          <ul className="mt-4 space-y-4 text-gray-600 leading-relaxed list-disc pl-5">
            <li>Access, update, or delete your personal data.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request information on how your data is being used.</li>
          </ul>
        </section>

        {/* Footer Section */}
        <section className="mt-12 text-center">
          <p className="text-gray-600">
            If you have any questions or concerns regarding our Privacy Policy,
            please contact us at{" "}
            <a href="mailto:privacy@ecommerce.com" className="text-blue-600">
              privacy@ecommerce.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
