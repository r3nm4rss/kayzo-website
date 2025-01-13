import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-mesh text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: January 12, 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Important Notice */}
            <div className="glass p-6 rounded-lg border-l-4 border-l-yellow-500">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Important Notice</h3>
                  <p className="text-gray-400">
                    By using Kayzo Bot, you agree to these terms. Please read them carefully before adding the bot to your server.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">1. Usage Agreement</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  By inviting Kayzo Bot to your Discord server, you agree to these terms of service and privacy policy. You acknowledge that you have the authority to accept these terms on behalf of your server.
                </p>
                <p className="text-gray-300">
                  You may not use Kayzo Bot for any illegal or unauthorized purpose. You must comply with all Discord's Terms of Service and Community Guidelines.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">2. Service Availability</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  While we strive to provide uninterrupted service, Kayzo Bot is provided "as is" and we make no guarantees about its availability. We reserve the right to modify, suspend, or discontinue the service at any time without notice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">3. User Responsibilities</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Maintaining the security of your server</li>
                  <li>Properly configuring bot permissions</li>
                  <li>All content and activities that occur under your server</li>
                  <li>Ensuring compliance with Discord's Terms of Service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">4. Privacy & Data</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                Kayzo Bot collects and stores minimal data necessary for functionality. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Server IDs for configuration settings</li>
                  <li>Command usage statistics</li>
                  <li>Error logs for troubleshooting</li>
                </ul>
                <p className="text-gray-300">
                  We do not sell or share your data with third parties.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">5. Changes to Terms</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. Continued use of Kayzo Bot after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">6. Contact</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  For any questions about these terms, please contact us through:
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