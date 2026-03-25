"use client";

import Image from "next/image";
import {
  IconRobot,
  IconMessageChatbot,
  IconPlug,
  IconDatabase,
  IconChartBar,
  IconLock,
  IconBolt,
  IconApps,
  IconRocket,
  IconPalette,
  IconBrandShopee,
  IconTerminal2,
  IconClock,
  IconAlertTriangle,
  IconEye,
  IconCoin,
  IconServer,
  IconApi,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neo-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neo-cream neo-border-thick border-t-0 border-l-0 border-r-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image
                src="/toebox-logo.svg"
                alt="ToeBox"
                width={40}
                height={36}
                className="h-9 w-auto"
              />
              <span className="font-black text-xl">ToeBox</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#problem" className="font-bold hover:text-neo-pink transition-colors">Problem</a>
              <a href="#features" className="font-bold hover:text-neo-pink transition-colors">Platform</a>
              <a href="#pricing" className="font-bold hover:text-neo-pink transition-colors">Pricing</a>
              <a href="#integrations" className="font-bold hover:text-neo-pink transition-colors">Integrations</a>
              <a href="#how-it-works" className="font-bold hover:text-neo-pink transition-colors">How It Works</a>
              <a href="#demo" className="neo-btn bg-neo-yellow">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block neo-border neo-shadow bg-neo-pink px-4 py-2 mb-6">
                <span className="font-bold">AI Agent Builder for Shopify</span>
              </div>
              <h1 className="neo-heading text-5xl md:text-6xl lg:text-7xl mb-6">
                Build AI agents
                <br />
                <span className="bg-neo-yellow px-2">for your store.</span>
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Create custom AI agents, deploy chatbot widgets, connect 30+ integrations, and query all your data from one platform. Built natively for Shopify and TikTok Shop.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#demo" className="neo-btn bg-neo-yellow text-lg">
                  Get Started Free
                </a>
                <a href="#features" className="neo-btn bg-neo-white text-lg">
                  See Platform
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="neo-border-thick neo-shadow-xl bg-neo-white p-8 rotate-2">
                <div className="neo-border bg-neo-blue p-6 -rotate-1">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="neo-card p-4">
                      <div className="text-4xl font-black text-neo-pink">30+</div>
                      <div className="text-sm font-bold mt-2">Integrations ready</div>
                    </div>
                    <div className="neo-card p-4">
                      <div className="text-4xl font-black text-neo-green">5m</div>
                      <div className="text-sm font-bold mt-2">Setup to live</div>
                    </div>
                    <div className="neo-card p-4">
                      <div className="text-4xl font-black text-neo-purple">MCP</div>
                      <div className="text-sm font-bold mt-2">Protocol native</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 bg-neo-black text-neo-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block neo-border bg-neo-red px-4 py-2 mb-6 text-neo-black">
              <span className="font-bold">The Problem</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6 text-neo-white">
              Your store data is scattered across dozens of tools.
              <br />
              <span className="text-neo-yellow">Your team shouldn&apos;t need to be engineers to use AI.</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-neo-cream">
              Klaviyo, Gorgias, Recharge, your warehouse, your Shopify admin. AI could connect all of it, but building agents from scratch costs months and a dev team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Data lives in silos",
                desc: "Orders in Shopify, support in Gorgias, marketing in Klaviyo, revenue in Stripe. No single view of your business.",
                color: "bg-neo-pink",
                icon: IconClock,
              },
              {
                num: "02",
                title: "AI setup is too complex",
                desc: "Connecting LLMs to your store data requires API keys, prompt engineering, and infrastructure most merchants don't have.",
                color: "bg-neo-blue",
                icon: IconAlertTriangle,
              },
              {
                num: "03",
                title: "Generic chatbots fail",
                desc: "Off-the-shelf chat widgets don't know your catalog, can't check inventory, and give wrong answers that hurt your brand.",
                color: "bg-neo-green",
                icon: IconEye,
              },
              {
                num: "04",
                title: "No way to automate",
                desc: "Repetitive tasks like answering sizing questions, checking order status, or recommending products still require manual work.",
                color: "bg-neo-orange",
                icon: IconCoin,
              },
            ].map((item) => (
              <div key={item.num} className="neo-border bg-neo-white text-neo-black neo-shadow-lg neo-card-hover transition-all">
                <div className={`${item.color} neo-border-thick border-t-0 border-l-0 border-r-0 p-4`}>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-2xl">{item.num}</span>
                    <item.icon size={32} stroke={2.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-xl mb-3">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block neo-border neo-shadow bg-neo-blue px-4 py-2 mb-6">
              <span className="font-bold">The Platform</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6">
              Agents, chatbots, data,
              <br />
              <span className="bg-neo-yellow px-2">all in one place.</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              ToeBox gives you the building blocks to create AI-powered experiences for your Shopify store without writing code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: IconRobot,
                title: "AI Agent Builder",
                desc: "Create custom agents for customer support, product recommendations, order management, and more. Choose your model, set the system prompt, and deploy.",
                color: "bg-neo-yellow",
              },
              {
                icon: IconMessageChatbot,
                title: "Chatbot Widgets",
                desc: "Embed branded chat widgets on your storefront. Customize colors, behavior, suggested prompts, and connect any agent to power the conversation.",
                color: "bg-neo-pink",
              },
              {
                icon: IconDatabase,
                title: "Data & Analytics",
                desc: "Query your connected data warehouses with SQL. Build dashboards with drag-and-drop charts, KPIs, and filters. Share with your team.",
                color: "bg-neo-blue",
              },
              {
                icon: IconPlug,
                title: "30+ Integrations",
                desc: "Connect Klaviyo, Gorgias, Stripe, Recharge, Zendesk, Snowflake, BigQuery, and more. Each integration becomes queryable by your agents.",
                color: "bg-neo-green",
              },
              {
                icon: IconTerminal2,
                title: "MCP Server",
                desc: "Expose your agents as MCP tools for Claude, Cursor, VS Code, and any MCP-compatible client. Your store data, accessible from any AI tool.",
                color: "bg-neo-orange",
              },
              {
                icon: IconLock,
                title: "Multi-Tenant Security",
                desc: "Row-level security isolates every store's data. API keys, GDPR compliance, and encrypted credentials come built-in. Your data stays yours.",
                color: "bg-neo-purple",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="neo-card p-6 neo-card-hover transition-all"
              >
                <div className={`${feature.color} neo-border w-16 h-16 flex items-center justify-center mb-4`}>
                  <feature.icon size={32} stroke={2.5} />
                </div>
                <h3 className="font-black text-xl mb-3">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 px-4 bg-neo-black text-neo-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block neo-border bg-neo-green px-4 py-2 mb-6 text-neo-black">
              <span className="font-bold">Integrations</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6 text-neo-white">
              Connect everything.
              <br />
              <span className="text-neo-yellow">Query anything.</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-neo-cream">
              Every integration becomes a data source your agents can access. Test connections, browse schemas, and run queries from the ToeBox dashboard.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Shopify", "Klaviyo", "Gorgias", "Stripe", "Recharge", "Zendesk",
              "Judge.me", "HubSpot", "ShipStation", "Postscript", "Yotpo", "Attentive",
              "Triple Whale", "Smile.io", "Loop Returns", "AfterShip", "Segment", "ShipBob",
              "TikTok", "Snowflake", "BigQuery", "PostgreSQL", "MySQL", "MongoDB", "ClickHouse",
              "QuickBooks", "Okendo", "LoyaltyLion", "Stamped.io", "Skio", "Northbeam",
            ].map((name) => (
              <div key={name} className="neo-border bg-neo-white text-neo-black p-3 text-center font-bold text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-neo-yellow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block neo-border neo-shadow bg-neo-white px-4 py-2 mb-6">
              <span className="font-bold">How It Works</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6">
              Live in minutes, <span className="bg-neo-black text-neo-white px-2">not months.</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Install from the Shopify App Store. No developers, no infrastructure, no complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Install & Connect",
                desc: "One-click install from the Shopify App Store. Your products, orders, and customers sync automatically. Connect Klaviyo, Gorgias, or any integration in seconds.",
                color: "bg-neo-pink",
              },
              {
                step: "02",
                title: "Build Agents",
                desc: "Create AI agents tailored to your use case. Customer support, product recommendations, order tracking. Choose a model, set a prompt, enable Shopify tools.",
                color: "bg-neo-blue",
              },
              {
                step: "03",
                title: "Deploy Everywhere",
                desc: "Add a chatbot widget to your storefront, expose agents via MCP for Claude and Cursor, or use the API. Your agents work where your team works.",
                color: "bg-neo-green",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className={`${item.color} neo-border-thick neo-shadow-xl p-8 bg-neo-white`}>
                  <div className="absolute -top-6 -left-4 neo-border-thick bg-neo-black text-neo-white w-16 h-16 flex items-center justify-center">
                    <span className="font-black text-2xl">{item.step}</span>
                  </div>
                  <div className="pt-6">
                    <h3 className="font-black text-2xl mb-4">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block neo-border neo-shadow bg-neo-green px-4 py-2 mb-6">
              <span className="font-bold">Why ToeBox</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6">
              Enterprise AI, <span className="bg-neo-pink px-2">Solo simple.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: IconBrandShopee,
                title: "Native Shopify integration",
                desc: "Built as an embedded Shopify app. Products, orders, and customers sync automatically via Shopify MCP.",
              },
              {
                icon: IconApps,
                title: "One-click install",
                desc: "Add from the Shopify App Store. No code, no developers, no infrastructure to manage.",
              },
              {
                icon: IconServer,
                title: "MCP protocol native",
                desc: "Your agents are MCP tools. Connect them to Claude Desktop, Claude Code, Cursor, or any MCP client.",
              },
              {
                icon: IconRocket,
                title: "Live in minutes",
                desc: "Install, create an agent, deploy a chatbot. Start automating customer interactions today.",
              },
              {
                icon: IconChartBar,
                title: "Analytics built in",
                desc: "Query any connected data source with SQL. Build dashboards, track token usage, and monitor agent performance.",
              },
              {
                icon: IconApi,
                title: "Bring your own keys",
                desc: "Use your Anthropic, OpenAI, or OpenRouter API keys. Pay for what you use with no markup on model costs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 neo-card neo-card-hover transition-all"
              >
                <div className="neo-border bg-neo-yellow w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <item.icon size={24} stroke={2.5} />
                </div>
                <div>
                  <h3 className="font-black text-lg mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20 px-4 bg-neo-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block neo-border neo-shadow bg-neo-purple px-4 py-2 mb-6">
              <span className="font-bold">Pricing</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6">
              Start free. <span className="bg-neo-yellow px-2">Scale as you grow.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                name: "Free Trial",
                price: "Free",
                desc: "Try ToeBox free for 14 days. No credit card required.",
                features: ["1 AI agent", "1 chatbot widget", "2 integrations", "1,000 API credits/month", "ToeBox branding on widget", "Community support"],
                color: "bg-neo-white",
                cta: "Start Free",
                highlight: false,
              },
              {
                name: "Starter",
                price: "$49.99",
                desc: "Self-serve AI for small stores. Standard widget with ToeBox branding.",
                features: ["3 AI agents", "3 chatbot widgets", "5 integrations", "50,000 API credits/month", "Custom tools", "Basic analytics", "Email support"],
                color: "bg-neo-white",
                cta: "Start Free Trial",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$249.99",
                desc: "For growing brands. Custom CSS, full analytics, no branding.",
                features: ["10 AI agents", "10 chatbot widgets", "15 integrations", "200,000 API credits/month", "Multi-agent orchestration", "Full analytics & dashboards", "Custom branding (no logo)", "MCP server access", "Priority support"],
                color: "bg-neo-yellow",
                cta: "Start Free Trial",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "$749.99",
                desc: "For high-volume stores. Volume-based, dedicated support, SLA.",
                features: ["Unlimited agents", "Unlimited chatbot widgets", "Unlimited integrations", "500,000 API credits/month", "Unlimited team members", "Dedicated account manager", "Custom model support", "Priority support & SLA"],
                color: "bg-neo-white",
                cta: "Start Free Trial",
                highlight: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`neo-border-thick neo-shadow-lg ${plan.color} p-8 flex flex-col relative h-full`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 neo-border bg-neo-blue px-4 py-1">
                    <span className="font-bold text-sm">Most Popular</span>
                  </div>
                )}
                <h3 className="font-black text-xl mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-black text-3xl">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-sm font-bold">/mo</span>}
                </div>
                <p className="text-sm mb-6 text-gray-600">{plan.desc}</p>
                <hr className="border-gray-300 mb-4" />
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm flex items-start gap-2">
                      <span className="font-black text-neo-green flex-shrink-0">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#demo" className="neo-btn bg-neo-pink text-center w-full block mt-auto">{plan.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-20 px-4 bg-neo-black text-neo-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="neo-border-thick bg-neo-white text-neo-black p-12 neo-shadow-xl rotate-1">
            <div className="-rotate-1">
              <h2 className="neo-heading text-4xl md:text-5xl mb-6">
                Ready to build
                <br />
                <span className="bg-neo-yellow px-2">your first AI agent?</span>
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Install ToeBox from the Shopify App Store or authenticate through TikTok Shop and start building agents that know your catalog, connect your tools, and serve your customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://apps.shopify.com" className="neo-btn bg-neo-pink text-xl inline-block">
                  Install on Shopify
                </a>
                <a href="https://app.toebox.ai" className="neo-btn bg-neo-yellow text-xl inline-block">
                  Open Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 neo-border-thick border-b-0 border-l-0 border-r-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/toebox-logo.svg"
              alt="ToeBox"
              width={32}
              height={29}
              className="h-7 w-auto"
            />
            <span className="font-black">ToeBox</span>
          </div>
          <div className="flex gap-6 text-sm font-bold">
            <a href="https://app.toebox.ai/privacy" className="hover:text-neo-pink transition-colors">Privacy</a>
            <a href="https://app.toebox.ai/terms" className="hover:text-neo-pink transition-colors">Terms</a>
            <a href="mailto:support@toebox.ai" className="hover:text-neo-pink transition-colors">Support</a>
          </div>
          <p className="text-sm">&copy; 2026 ToeBox. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
