import React from 'react';
import { Lock, AlertCircle, Shield, Database, Eye, Server, Trash2 } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-mesh text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
              <Lock className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: January 12, 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Important Notice */}
            <div className="glass p-6 rounded-lg border-l-4 border-l-blue-500">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Your Privacy Matters</h3>
                  <p className="text-gray-400">
                    We are committed to protecting your privacy and handling your data with transparency and care.
                  </p>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-500" />
                1. Information We Collect
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">We collect the following information:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Server ID and configuration settings</li>
                  <li>Command usage statistics</li>
                  <li>Error logs for troubleshooting</li>
                  <li>User IDs for moderation features</li>
                </ul>
                <p className="text-gray-300">
                  We only collect data that is necessary for the bot's functionality and to improve user experience.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-500" />
                2. How We Use Your Data
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">Your data is used for:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing and maintaining bot services</li>
                  <li>Improving bot features and performance</li>
                  <li>Responding to your requests and support inquiries</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-500" />
                3. Data Sharing and Disclosure
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  We do not sell, trade, or rent your personal information to third parties. We may share data only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>When required by law</li>
                  <li>To protect our rights and safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Server className="w-6 h-6 text-blue-500" />
                4. Data Security
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your data:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data storage facilities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-blue-500" />
                5. Data Retention and Deletion
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  We retain data only for as long as necessary to provide our services. You can request data deletion by:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Using the <code>/delete-data</code> command</li>
                  <li>Contacting our support team</li>
                  <li>Removing the bot from your server</li>
                </ul>
                <p className="text-gray-300">
                  When you remove the bot from your server, all associated data is automatically deleted within 30 days.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">6. Contact Us</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  For privacy-related questions or concerns, you can reach us through:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Discord Support Server</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}