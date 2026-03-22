import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ToeBox",
  description: "ToeBox Terms of Service — the terms governing your use of our AI agent builder platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 13, 2026</p>

        <p className="mb-8 text-gray-700">
          These Terms of Service (&quot;Terms&quot;) govern your use of ToeBox (&quot;the Service&quot;),
          an AI agent builder platform for Shopify merchants, operated by ToeBox
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By installing, accessing, or using ToeBox, you
          (&quot;you&quot; or &quot;Merchant&quot;) agree to be bound by these Terms. If you do not agree,
          do not use the Service.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Service Description</h2>
          <p className="text-gray-700 mb-2">ToeBox is a Shopify application that enables merchants to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Build and deploy AI-powered chatbot agents for their Shopify stores</li>
            <li>Connect to Shopify APIs (products, orders, customers, checkout) to power agent responses</li>
            <li>Connect to external data warehouses (Snowflake, PostgreSQL, and others) for analytics and agent intelligence</li>
            <li>Embed conversational AI widgets on their storefronts</li>
            <li>Access analytics dashboards and conversation trace logs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Account and Eligibility</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>You must have an active Shopify store to use ToeBox. The Service is installed through the Shopify App Store and authenticated via Shopify OAuth.</li>
            <li>You must be at least 18 years old and have the legal authority to bind yourself or your organization to these Terms.</li>
            <li>You are responsible for maintaining the security of your account and all activities that occur under it.</li>
            <li>You agree to provide accurate and complete information during installation and to keep your account information current.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Subscription and Billing</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>ToeBox offers subscription plans with varying features and usage limits. Plan details and pricing are displayed within the app and on our website.</li>
            <li>Billing is processed through the Shopify App Billing API. By subscribing, you authorize Shopify to charge you on our behalf according to your selected plan.</li>
            <li>Usage-based charges (such as API credits for AI model usage) are billed in addition to your base subscription where applicable.</li>
            <li>You may cancel your subscription at any time through the Shopify admin. Cancellation takes effect at the end of your current billing period.</li>
            <li>We reserve the right to change pricing with 30 days&apos; prior notice. Price changes take effect at the start of your next billing cycle.</li>
            <li>Refunds are handled in accordance with Shopify&apos;s App Store refund policies.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Acceptable Use</h2>
          <p className="text-gray-700 mb-2">You agree not to use ToeBox to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Violate any applicable law, regulation, or Shopify&apos;s terms of service</li>
            <li>Generate or distribute harmful, misleading, defamatory, or illegal content through your AI agents</li>
            <li>Attempt to circumvent usage limits, rate limits, or access controls</li>
            <li>Use the Service to collect or process personal data in violation of applicable privacy laws (GDPR, CCPA, etc.)</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            <li>Interfere with or disrupt the Service or its infrastructure</li>
            <li>Resell, sublicense, or redistribute the Service without written permission</li>
            <li>Configure agents to impersonate real individuals or provide medical, legal, or financial advice without appropriate disclaimers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. AI-Generated Content</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>ToeBox uses third-party AI models (including Anthropic Claude and others) to generate agent responses. AI-generated content may occasionally be inaccurate, incomplete, or inappropriate.</li>
            <li>You are solely responsible for reviewing and monitoring the content your AI agents produce. You should configure agent instructions, system prompts, and guardrails to align with your business requirements.</li>
            <li>ToeBox does not guarantee the accuracy, reliability, or appropriateness of any AI-generated content.</li>
            <li>You are responsible for ensuring that AI-generated content complies with applicable advertising, consumer protection, and disclosure laws.</li>
            <li>We recommend including a disclosure on your storefront indicating that customers may be interacting with an AI assistant.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Data Warehouse and Integration Connections</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>You may connect external data sources (Snowflake, PostgreSQL, and other supported platforms) to enhance your AI agents and analytics.</li>
            <li>You are responsible for ensuring you have the right to connect and query the data sources you configure. ToeBox is not responsible for unauthorized access to third-party data.</li>
            <li>We strongly recommend providing read-only database credentials. ToeBox executes read-only queries by design, but granting write access is at your own risk.</li>
            <li>All credentials are encrypted at rest and in transit. We do not access your connected data sources for any purpose other than executing queries you or your agents initiate.</li>
            <li>You are responsible for the costs incurred on your data warehouse or third-party platform from queries executed by ToeBox on your behalf.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Shopify Data Access</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>ToeBox accesses your Shopify store data only through the API scopes you authorize during installation. You may review and modify these permissions at any time.</li>
            <li>We access your Shopify data solely to provide the Service (powering agent responses, analytics, etc.) and do not use it for any other purpose.</li>
            <li>We comply with the Shopify API Terms of Service and Partner Program Agreement at all times.</li>
            <li>You are responsible for ensuring that your use of ToeBox complies with Shopify&apos;s Acceptable Use Policy and your obligations to your customers.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Embeddable Chatbot Widget</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>ToeBox provides an embeddable JavaScript widget that you can add to your Shopify storefront. You are responsible for its placement and configuration.</li>
            <li>You are responsible for updating your store&apos;s privacy policy to disclose the use of an AI chatbot and the collection of conversation data from your visitors.</li>
            <li>The widget communicates with ToeBox servers over encrypted HTTPS connections. We do not inject advertisements, tracking pixels, or unrelated content through the widget.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>ToeBox and its original content, features, and functionality are owned by ToeBox and are protected by copyright, trademark, and other intellectual property laws.</li>
            <li>You retain ownership of your store data, agent configurations, custom prompts, and any content you create using the Service.</li>
            <li>You grant ToeBox a limited, non-exclusive license to use your data solely to provide and improve the Service for your account.</li>
            <li>AI-generated content produced by the Service does not transfer intellectual property rights from ToeBox or its AI model providers to you. You may use AI-generated content in connection with your store, subject to applicable laws.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Privacy and Data Protection</h2>
          <p className="text-gray-700 mb-2">
            Your use of the Service is also governed by our{" "}
            <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>, which
            describes how we collect, use, and protect your data. By using ToeBox, you
            acknowledge and agree to our Privacy Policy.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>If you process personal data of EU/EEA residents through the Service, you acknowledge your role as a data controller and ToeBox&apos;s role as a data processor under GDPR.</li>
            <li>You are responsible for obtaining any necessary consents from your customers before collecting their data through AI agents or chatbot widgets.</li>
            <li>If required, we will enter into a Data Processing Agreement (DPA) with you. Contact us at legal@toebox.ai to request one.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">11. Service Availability and Support</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>We strive to maintain high availability but do not guarantee uninterrupted access to the Service. Downtime may occur due to maintenance, updates, or circumstances beyond our control.</li>
            <li>We are not responsible for downtime or performance issues caused by Shopify platform outages, third-party AI model provider outages, or your data warehouse infrastructure.</li>
            <li>Support is provided via the channels indicated within the app and on our website, subject to your subscription plan.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">12. Limitation of Liability</h2>
          <p className="text-gray-700 mb-2 font-medium">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>TOEBOX IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</li>
            <li>IN NO EVENT SHALL TOEBOX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF REVENUE, PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.</li>
            <li>OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</li>
            <li>WE ARE NOT LIABLE FOR ANY DAMAGES RESULTING FROM AI-GENERATED CONTENT, INCLUDING INACCURATE PRODUCT INFORMATION, INCORRECT ORDER DETAILS, OR INAPPROPRIATE RESPONSES PROVIDED BY YOUR AI AGENTS.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">13. Indemnification</h2>
          <p className="text-gray-700 mb-2">
            You agree to indemnify, defend, and hold harmless ToeBox and its officers,
            directors, employees, and agents from any claims, damages, losses,
            liabilities, and expenses (including reasonable attorneys&apos; fees) arising from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Your use of the Service</li>
            <li>Content generated by your AI agents</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law or third-party rights</li>
            <li>Data you process through connected data warehouses or integrations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">14. Termination</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>You may terminate your use of ToeBox at any time by uninstalling the app from your Shopify admin.</li>
            <li>We may suspend or terminate your access if you violate these Terms, engage in abusive behavior, or fail to pay applicable fees.</li>
            <li>Upon termination, your right to use the Service ceases immediately. We will delete your data within 30 days of termination, except where retention is required by law or for legitimate business purposes (e.g., billing records).</li>
            <li>Sections relating to intellectual property, limitation of liability, indemnification, and governing law survive termination.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">15. Modifications to Terms</h2>
          <p className="text-gray-700">
            We may update these Terms from time to time. We will notify you of material
            changes by posting a notice within the app and updating the &quot;Last updated&quot;
            date. Your continued use of ToeBox after changes take effect constitutes
            acceptance of the updated Terms. If you do not agree to the updated Terms,
            you must stop using the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">16. Governing Law and Disputes</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.</li>
            <li>Any disputes arising under or in connection with these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in any court of competent jurisdiction.</li>
            <li>You agree to waive any right to participate in a class action lawsuit or class-wide arbitration against ToeBox.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">17. General Provisions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Entire Agreement</strong> — These Terms, together with our Privacy Policy, constitute the entire agreement between you and ToeBox regarding the Service.</li>
            <li><strong>Severability</strong> — If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force and effect.</li>
            <li><strong>Waiver</strong> — Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.</li>
            <li><strong>Assignment</strong> — You may not assign your rights or obligations under these Terms without our written consent. We may assign our rights and obligations without restriction.</li>
            <li><strong>Force Majeure</strong> — We are not liable for delays or failures caused by events beyond our reasonable control, including natural disasters, pandemics, or third-party service outages.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">18. Contact Us</h2>
          <p className="text-gray-700 mb-2">
            If you have questions about these Terms of Service, contact us at:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Email: legal@toebox.ai</li>
            <li>Website: https://toebox.ai</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
