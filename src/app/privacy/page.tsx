import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ToeBox",
  description: "ToeBox Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 13, 2026</p>

        <p className="mb-8 text-gray-700">
          This Privacy Policy describes how ToeBox (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
          and protects information when you use our AI agent builder platform for Shopify
          (&quot;the Service&quot;). By installing or using ToeBox, you agree to the practices
          described in this policy.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>

          <h3 className="text-lg font-medium mb-2">1.1 Account and Merchant Information</h3>
          <p className="text-gray-700 mb-2">
            When you install ToeBox from the Shopify App Store, we collect information
            provided by Shopify during the OAuth authorization process, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Your Shopify store name and domain</li>
            <li>Store owner name and email address</li>
            <li>Shopify access tokens for authorized API scopes</li>
            <li>Billing and subscription information</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">1.2 Shopify Store Data</h3>
          <p className="text-gray-700 mb-2">
            Depending on the API scopes you authorize, ToeBox may access:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-2 space-y-1">
            <li>Product catalog data (titles, descriptions, prices, images, inventory)</li>
            <li>Order information (order details, fulfillment status)</li>
            <li>Customer data (names, emails, order history) as authorized</li>
            <li>Checkout and cart information</li>
          </ul>
          <p className="text-gray-700 mb-4">
            This data is accessed via the Shopify API only to power your AI agent&apos;s
            responses and is not sold or shared with third parties.
          </p>

          <h3 className="text-lg font-medium mb-2">1.3 AI Conversation Data</h3>
          <p className="text-gray-700 mb-2">
            When your customers interact with ToeBox-powered chatbots, we collect:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Conversation messages and responses</li>
            <li>Conversation metadata (timestamps, session identifiers)</li>
            <li>Agent trace data for debugging and analytics</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">1.4 Data Warehouse Connections</h3>
          <p className="text-gray-700 mb-2">
            If you connect external data sources (e.g., Snowflake, PostgreSQL), we collect:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Connection credentials (encrypted at rest and in transit)</li>
            <li>Database schema metadata for query generation</li>
            <li>Query results used to power agent responses and analytics</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">1.5 Usage and Analytics Data</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Feature usage patterns and interaction metrics</li>
            <li>Agent performance and response quality metrics</li>
            <li>Error logs and diagnostic information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Provide, operate, and maintain the ToeBox platform</li>
            <li>Power AI agent responses using your authorized Shopify data</li>
            <li>Execute queries against your connected data warehouses</li>
            <li>Generate analytics dashboards and business insights</li>
            <li>Improve the reliability and performance of our Service</li>
            <li>Communicate with you about your account, updates, and support</li>
            <li>Detect, prevent, and address security issues and abuse</li>
            <li>Comply with legal obligations and Shopify partner requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. AI Data Usage and Model Training</h2>
          <p className="text-gray-700 mb-2">
            ToeBox uses third-party AI models (including Anthropic Claude and other
            providers) to generate agent responses.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Your conversation data, store data, and query results are NOT used to train AI models. Data is sent to AI providers solely for real-time inference (generating responses).</li>
            <li>We do not share your data with AI model providers for any purpose other than generating responses to your customers&apos; queries.</li>
            <li>Conversation logs are retained for your analytics and debugging purposes and are deleted upon account termination or at your request.</li>
            <li>AI model providers process data under their own data processing agreements. Anthropic&apos;s API terms prohibit using API inputs and outputs for model training.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Data Warehouse and Integration Security</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>All data warehouse credentials (Snowflake, PostgreSQL, etc.) are encrypted at rest using industry-standard encryption and are never exposed in logs or client-side code.</li>
            <li>Connections to external data sources use encrypted channels (TLS/SSL).</li>
            <li>We recommend granting read-only access to connected databases. ToeBox queries are read-only by design and do not modify your source data.</li>
            <li>Third-party integration credentials (Klaviyo, Gorgias, etc.) are stored with the same encryption standards and are only used to provide the features you configure.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Data Storage and Multi-Tenancy</h2>
          <p className="text-gray-700">
            ToeBox stores data in Supabase with strict multi-tenant isolation enforced
            through Row-Level Security (RLS). Each merchant&apos;s data is logically isolated
            and accessible only to authorized users within that merchant&apos;s account. No
            merchant can access another merchant&apos;s data, agent configurations, conversation
            logs, or connected credentials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Data Sharing and Third Parties</h2>
          <p className="text-gray-700 mb-2">We do not sell your personal information. We may share data with:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>AI Model Providers</strong> — Conversation content is sent to AI inference APIs (e.g., Anthropic) solely to generate responses. These providers do not retain your data for training.</li>
            <li><strong>Infrastructure Providers</strong> — We use cloud hosting, database, and CDN services that may process data on our behalf under strict data processing agreements.</li>
            <li><strong>Shopify</strong> — As a Shopify app partner, we comply with Shopify&apos;s Partner Program Agreement and API Terms of Service.</li>
            <li><strong>Legal Requirements</strong> — We may disclose information if required by law, regulation, legal process, or governmental request.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Embeddable Chatbot Widget</h2>
          <p className="text-gray-700 mb-2">
            ToeBox provides an embeddable chatbot widget that runs on your storefront. The widget:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Does not set tracking cookies on your customers&apos; browsers</li>
            <li>Collects only conversation content voluntarily submitted by visitors</li>
            <li>Does not collect personal information from visitors unless they voluntarily provide it in conversation</li>
            <li>Communicates with ToeBox servers over encrypted HTTPS connections</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Data Retention</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Account data is retained for the duration of your subscription and deleted within 30 days of account termination.</li>
            <li>Conversation logs are retained for up to 12 months for analytics purposes unless you request earlier deletion.</li>
            <li>Data warehouse credentials are deleted immediately upon disconnection or account termination.</li>
            <li>Backup copies may be retained for up to 90 days after deletion for disaster recovery purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Your Rights Under GDPR</h2>
          <p className="text-gray-700 mb-2">
            If you are located in the European Economic Area (EEA), United Kingdom, or
            Switzerland, you have the following rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Access</strong> — Request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification</strong> — Request correction of inaccurate personal data.</li>
            <li><strong>Erasure</strong> — Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
            <li><strong>Restriction</strong> — Request restriction of processing of your data.</li>
            <li><strong>Portability</strong> — Request your data in a structured, machine-readable format.</li>
            <li><strong>Objection</strong> — Object to processing based on legitimate interests.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            To exercise any of these rights, contact us at privacy@toebox.ai. We will respond within 30 days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Your Rights Under CCPA</h2>
          <p className="text-gray-700 mb-2">
            If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Right to Know</strong> — Request disclosure of the categories and specific pieces of personal information we have collected.</li>
            <li><strong>Right to Delete</strong> — Request deletion of your personal information.</li>
            <li><strong>Right to Opt-Out</strong> — We do not sell personal information, so this right does not apply.</li>
            <li><strong>Non-Discrimination</strong> — We will not discriminate against you for exercising your CCPA rights.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            To exercise your CCPA rights, contact us at privacy@toebox.ai.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">11. Security</h2>
          <p className="text-gray-700 mb-2">
            We implement industry-standard security measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Encryption of data at rest and in transit (TLS 1.2+)</li>
            <li>Row-Level Security for multi-tenant data isolation</li>
            <li>Encrypted storage of all third-party credentials and API keys</li>
            <li>Regular security reviews and dependency updates</li>
            <li>Access controls and authentication for all administrative functions</li>
          </ul>
          <p className="text-gray-700 mt-2">
            No method of transmission or storage is 100% secure. While we strive to
            protect your data, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">12. Children&apos;s Privacy</h2>
          <p className="text-gray-700">
            ToeBox is designed for use by Shopify merchants who are businesses. We do
            not knowingly collect personal information from children under 13 (or under
            16 in the EEA). If we learn that we have collected data from a child, we
            will delete it promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">13. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of
            material changes by posting the updated policy within the app and updating
            the &quot;Last updated&quot; date. Your continued use of ToeBox after changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">14. Contact Us</h2>
          <p className="text-gray-700 mb-2">
            If you have questions about this Privacy Policy or our data practices, contact us at:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Email: privacy@toebox.ai</li>
            <li>Website: https://toebox.ai</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
