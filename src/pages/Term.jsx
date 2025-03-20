import React from "react";
import Nevbar from "../components/header/Nevbar";
import Footer from "../components/footer/Footer";    

function Term() {
  return (
    <div className="bg-white">
        <Nevbar />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h1 className="text-4xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Terms and Conditions
          </h1>

          {/* Terms and Conditions Card */}
          <div className="bg-[#e8f5e9] backdrop-blur-md rounded-lg shadow-2xl p-6 sm:p-8">
            {/* Intellectual Property Rights */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Crown Bankers maintains exclusive rights over non-material assets
              such as trademarks, logos, copyrights, patents, trade secrets, and
              proprietary software. Unauthorized use, reproduction,
              distribution, or exploitation of these assets without explicit
              consent is strictly prohibited.
            </p>

            {/* Use of Website */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Use of Website
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                License to Use
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Upon entering the Crown Bankers website, users are granted a
                restricted, non-exclusive, and non-transferable license for
                personal or internal business purposes, aligning with these
                Terms of Use. No rights for commercial exploitation are
                conferred.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Restrictions
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Users are prohibited from engaging in activities that might
                obstruct or disrupt the website's proper functioning. This
                includes unauthorized access attempts, the use of automated
                tools, or involvement in illegal or unethical behaviors.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Linking</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The website may contain links to third-party sites for
                informational purposes. However, Crown Bankers does not endorse
                these sites, and users navigate them at their own risk.
              </p>
            </div>

            {/* Registration Terms */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Registration Terms
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Eligibility
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                By registering with Crown Bankers, users affirm they are of
                legal age and possess the capacity to enter binding agreements.
                If registering on behalf of a company, users must be duly
                authorized to act on its behalf.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Accurate Information
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Users commit to providing accurate information during
                registration and promptly updating it in case of any changes.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Account Security
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Maintaining the confidentiality of account credentials is the
                user's responsibility. Any activities conducted under the
                account are the user's liability.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Prohibited Activities
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Users pledge not to engage in unauthorized or illegal activities
                on the Crown Bankers platform, including fraudulent activities,
                money laundering, or actions contravening relevant laws.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Verification Process
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                As part of registration, users may undergo a verification
                procedure for identity confirmation, agreeing to provide
                necessary documentation or information.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Acceptance of Risks
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                By registering with Crown Bankers, users acknowledge and accept
                the inherent risks associated with investment, understanding the
                potential for financial losses and gains.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Termination of Account
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Crown Bankers retains the right to terminate or suspend accounts
                at any time for reasons including but not limited to the breach
                of these Terms of Use or engagement in suspicious activities.
              </p>
            </div>

            {/* Charges */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Charges
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Fees Overview
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Users recognize that specific charges and fees may apply to
                transactions and services. These charges are subject to change
                and are detailed in the most recent fee schedule on the website.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Third-Party Payment Processors
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                For certain payment services, users may be directed to
                third-party processors. Crown Bankers is not responsible for the
                policies or practices of these processors.
              </p>
            </div>

            {/* Indemnity */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Indemnity
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Users agree to protect and indemnify Crown Bankers against claims,
              losses, or liabilities arising from their infringement of these
              terms or any activities on the website conducted under their
              account.
            </p>

            {/* Data Entry */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Entry
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Data provided on the website is retained by Crown Bankers
              according to the Privacy Policy for verification and operational
              purposes.
            </p>

            {/* Limitation of Liability */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Crown Bankers and its associates make no representations or
              warranties regarding the utilization or outcomes of using the
              website. They shall not be held liable for errors,
              misrepresentations, or losses incurred through platform
              utilization.
            </p>

            {/* Amendments */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Amendments
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Crown Bankers reserves the right to alter these terms without
              prior notice. Users' continued usage implies agreement to revised
              terms.
            </p>

            {/* Governing Law */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              These terms are subject to specified jurisdiction laws, with
              disputes falling under the exclusive jurisdiction of courts in
              that jurisdiction.
            </p>

            {/* Contact */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Users are encouraged to promptly reach out at{" "}
              <a
                href="mailto:support@crownbankers.com"
                className="text-green-600 hover:text-green-500 transition-colors"
              >
                support@crownbankers.com
              </a>{" "}
              to report issues and obtain solutions.
            </p>

            {/* Conclusion */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              These Terms of Use are designed to foster a transparent, secure,
              and equitable online environment for users on the Crown Bankers
              platform. Your commitment to understanding your rights and
              responsibilities ensures a mutually beneficial relationship
              between users and our organization.
            </p>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Term;
