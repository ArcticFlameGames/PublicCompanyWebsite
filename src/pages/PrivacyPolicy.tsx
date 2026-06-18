import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const effectiveDate = 'June 17, 2026';
  const companyName = 'Arctic Flame Games Inc.';
  const contactEmail = 'support@arcticflamegames.com';
  const website = 'https://arcticflamegames.com';

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <a href="/" className="text-orange-400 hover:text-orange-300 text-sm mb-8 inline-block">
          ← Back to Home
        </a>
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">Effective date: {effectiveDate}</p>

        <p className="text-slate-300 mb-8">
          {companyName} ("we", "us", or "our") operates mobile and PC games including <em>Pack It!</em> and
          other titles published under the Arctic Flame Games brand. This Privacy Policy describes how we
          collect, use, and share information when you play our games or visit our website at{' '}
          <a href={website} className="text-orange-400 hover:text-orange-300">{website}</a>.
        </p>

        <Section title="1. Information We Collect">
          <p className="mb-3">We may collect the following types of information:</p>
          <SubSection title="Information you provide directly">
            <ul className="list-disc ml-6 space-y-1 text-slate-300">
              <li>Account registration details (username, email address) if the game supports accounts</li>
              <li>Support requests and correspondence sent to our team</li>
            </ul>
          </SubSection>
          <SubSection title="Information collected automatically">
            <ul className="list-disc ml-6 space-y-1 text-slate-300">
              <li>Device information (device model, operating system version, unique device identifiers)</li>
              <li>Gameplay data (levels completed, scores, session length, in-game events)</li>
              <li>App performance data (crash reports, error logs)</li>
              <li>Approximate location derived from IP address</li>
              <li>Advertising identifiers (e.g., Google Advertising ID) where permitted</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc ml-6 space-y-1 text-slate-300">
            <li>Provide, operate, and improve our games and services</li>
            <li>Diagnose technical issues and fix bugs</li>
            <li>Analyze gameplay to balance difficulty and improve player experience</li>
            <li>Respond to support requests</li>
            <li>Display relevant advertisements (where applicable)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="3. Third-Party Services">
          <p className="text-slate-300 mb-3">
            Our games may integrate third-party SDKs and services that have their own privacy practices.
            These may include:
          </p>
          <ul className="list-disc ml-6 space-y-1 text-slate-300">
            <li><strong>Google Play Services</strong> — leaderboards, achievements, in-app purchases</li>
            <li><strong>Google AdMob</strong> — advertising (if applicable)</li>
            <li><strong>Firebase / Google Analytics</strong> — crash reporting and usage analytics</li>
            <li><strong>Unity Analytics</strong> — gameplay analytics (if applicable)</li>
          </ul>
          <p className="text-slate-300 mt-3">
            We encourage you to review the privacy policies of these third parties. We do not control
            their data practices.
          </p>
        </Section>

        <Section title="4. Data Sharing">
          <p className="text-slate-300 mb-3">We do not sell your personal information. We may share data:</p>
          <ul className="list-disc ml-6 space-y-1 text-slate-300">
            <li>With service providers who assist in operating our games (subject to confidentiality obligations)</li>
            <li>When required by law or to protect the rights and safety of our users or the public</li>
            <li>In connection with a merger, acquisition, or sale of assets (users will be notified)</li>
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <p className="text-slate-300">
            We retain personal data only as long as necessary for the purposes described in this policy or
            as required by law. You may request deletion of your data at any time (see Section 9).
          </p>
        </Section>

        <Section title="6. Security">
          <p className="text-slate-300">
            We use industry-standard technical and organizational measures to protect your information.
            However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p className="text-slate-300">
            Our games are not directed to children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you believe a child under 13 has provided us with personal
            information, please contact us immediately at{' '}
            <a href={`mailto:${contactEmail}`} className="text-orange-400 hover:text-orange-300">{contactEmail}</a>{' '}
            and we will promptly delete it. For games rated for general audiences that may be played by
            children, we limit data collection and disable behavioural advertising in compliance with
            applicable laws including COPPA and Google Play's Families Policy.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p className="text-slate-300 mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc ml-6 space-y-1 text-slate-300">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of targeted advertising (via your device's ad settings)</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
        </Section>

        <Section title="9. Account and Data Deletion">
          <p className="text-slate-300">
            To request deletion of your account or personal data, email us at{' '}
            <a href={`mailto:${contactEmail}`} className="text-orange-400 hover:text-orange-300">{contactEmail}</a>{' '}
            with the subject line <strong>"Data Deletion Request"</strong>, including your registered email
            address and the game name. We will process your request within 30 days.
          </p>
          <p className="text-slate-300 mt-3">
            You can also visit our{' '}
            <a href="/account-deletion" className="text-orange-400 hover:text-orange-300">Account Deletion</a>{' '}
            page for more details.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p className="text-slate-300">
            We may update this Privacy Policy from time to time. The effective date at the top of this page
            will reflect the most recent revision. Continued use of our games after changes are posted
            constitutes acceptance of the updated policy. For significant changes, we will provide additional
            notice (e.g., via in-game notification or email).
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p className="text-slate-300">
            Questions or concerns about this Privacy Policy? Reach us at:
          </p>
          <div className="mt-3 text-slate-300">
            <p><strong>{companyName}</strong></p>
            <p>
              Email:{' '}
              <a href={`mailto:${contactEmail}`} className="text-orange-400 hover:text-orange-300">
                {contactEmail}
              </a>
            </p>
            <p>
              Website:{' '}
              <a href={website} className="text-orange-400 hover:text-orange-300">{website}</a>
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">{title}</h2>
    {children}
  </div>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-slate-200 font-medium mb-2">{title}</h3>
    {children}
  </div>
);

export default PrivacyPolicy;
