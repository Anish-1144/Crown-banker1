import React from "react";
import Nevbar from "../components/header/Nevbar";
import Footer from "../components/footer/Footer";

function Privacy() {
  return (
    <div className="bg-green">
      <Nevbar />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h1 className="text-4xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Privacy Policy for Crown Bankers
          </h1>

          {/* Privacy Policy Card */}
          <div className="bg-[#e8f5e9] backdrop-blur-md rounded-lg shadow-2xl p-6 sm:p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Crown Bankers places a paramount emphasis on ensuring the privacy
              and security of our clients' information. This Privacy Policy
              outlines our commitment to protecting the confidentiality of
              personal and financial data and explains how we collect, use, and
              safeguard this information. By engaging with Crown Bankers, users
              implicitly consent to the practices described in this policy.
            </p>

            {/* Information Collection */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information Collection
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Personal Information
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Crown Bankers collects essential personal details such as name,
                contact information, and identification for account creation and
                verification.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Financial Information
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                To facilitate transactions, we may collect financial details,
                including investment amounts and payment information.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Usage Information
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Crown Bankers gathers data on user interactions with our
                platform, such as login times, page views, and investment
                history.
              </p>
            </div>

            {/* Data Usage */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Usage
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Operational Purposes
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Collected data is used for essential business operations,
                including account management, transaction processing, and
                customer support.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Communication
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Crown Bankers may use contact information to provide important
                updates, service announcements, and relevant promotional
                content.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Personalization
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We utilize user data to personalize the user experience,
                offering tailored investment recommendations and relevant
                content.
              </p>
            </div>

            {/* Security Measures */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Security Measures
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Encryption
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Crown Bankers employs industry-standard encryption protocols to
                protect data during transmission and storage.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Access Controls
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Access to user information is restricted to authorized personnel
                only, ensuring confidentiality and preventing unauthorized
                access.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Regular Audits
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Security measures are routinely audited and updated to mitigate
                potential vulnerabilities and uphold the highest security
                standards.
              </p>
            </div>

            {/* Information Sharing */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Third-Party Partners
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Crown Bankers may share necessary information with trusted
                third-party partners for service enhancement, fraud prevention,
                or regulatory compliance.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Legal Compliance
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We may disclose information as required by law, government
                authorities, or to protect our legal interests in response to a
                legal process or court order.
              </p>
            </div>

            {/* Cookies and Tracking Technologies */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cookies</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Crown Bankers employs cookies to enhance user experience, track
                preferences, and gather analytics for website optimization.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Opt-Out Options
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Users have the option to manage cookie preferences and may
                choose to disable them, although this might impact certain
                functionalities.
              </p>
            </div>

            {/* User Control */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              User Control
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Account Settings
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Users have control over their account settings, allowing them to
                update personal information, modify communication preferences,
                and manage privacy settings.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Opt-Out Options
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Crown Bankers respects users' choices. Users can opt out of
                promotional communications or withdraw consent for data
                processing.
              </p>
            </div>

            {/* Children's Privacy */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Crown Bankers does not knowingly collect or solicit personal
              information from individuals under the age of 18. If we become
              aware that we have collected personal information from a minor, we
              take immediate steps to delete the information.
            </p>

            {/* Changes to Privacy Policy */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to Privacy Policy
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Crown Bankers reserves the right to update this Privacy Policy
              periodically. Users will be notified of any significant changes,
              and continued use of our services after modifications constitutes
              acceptance of the revised policy.
            </p>

            {/* Investor Rights */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Investor Rights
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Access and Correction
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Users have the right to access their personal information and
                request corrections if inaccuracies are identified.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Data Portability
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Upon request, Crown Bankers facilitates the portability of user
                data in a commonly used and machine-readable format.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Account Deletion
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Users can request the deletion of their accounts, subject to
                legal and contractual obligations.
              </p>
            </div>

            {/* Investment Risks */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Investment Risks
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Crown Bankers acknowledges that all investments carry inherent
              risks. Users are encouraged to thoroughly review investment
              details and seek independent financial advice before making
              decisions.
            </p>

            {/* Contact Information */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              For privacy-related inquiries or to exercise any rights under this
              policy, users can contact Crown Bankers through the designated
              channels provided on our website.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Crown Bankers is dedicated to maintaining the privacy and security
              of our users' information. This comprehensive Privacy Policy aims
              to transparently communicate our practices and assure users of our
              commitment to safeguarding their data. By using Crown Bankers'
              services, users affirm their understanding and acceptance of this
              Privacy Policy. For any questions or concerns, we encourage users
              to contact our dedicated privacy support.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Privacy;
