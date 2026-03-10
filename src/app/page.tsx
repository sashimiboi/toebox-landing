"use client";

import Image from "next/image";
import {
  IconSearch,
  IconPackage,
  IconBuildingStore,
  IconBolt,
  IconScale,
  IconLock,
  IconPlug,
  IconDeviceTablet,
  IconMapPin,
  IconRocket,
  IconChartBar,
  IconPalette,
  IconAlertTriangle,
  IconClock,
  IconEye,
  IconCoin,
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
                alt="Toebox.ai"
                width={40}
                height={36}
                className="h-9 w-auto"
              />
              <span className="font-black text-xl">ToeBox</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#problem" className="font-bold hover:text-neo-pink transition-colors">Problem</a>
              <a href="#features" className="font-bold hover:text-neo-pink transition-colors">Features</a>
              <a href="#how-it-works" className="font-bold hover:text-neo-pink transition-colors">How It Works</a>
              <a href="#demo" className="neo-btn bg-neo-yellow">Book a Demo</a>
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
                <span className="font-bold">In-Store AI Assistant</span>
              </div>
              <h1 className="neo-heading text-5xl md:text-6xl lg:text-7xl mb-6">
                Your best associate,
                <br />
                <span className="bg-neo-yellow px-2">on every tablet.</span>
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                An AI-powered retail assistant that gives every customer a personalized, knowledgeable shopping experience — built for the brands that can't afford to lose a single sale.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#demo" className="neo-btn bg-neo-yellow text-lg">
                  Book a Demo
                </a>
                <a href="#features" className="neo-btn bg-neo-white text-lg">
                  See Capabilities
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="neo-border-thick neo-shadow-xl bg-neo-white p-8 rotate-2">
                <div className="neo-border bg-neo-blue p-6 -rotate-1">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="neo-card p-4">
                      <div className="text-4xl font-black text-neo-pink">40%</div>
                      <div className="text-sm font-bold mt-2">Fewer "let me check" trips</div>
                    </div>
                    <div className="neo-card p-4">
                      <div className="text-4xl font-black text-neo-green">2×</div>
                      <div className="text-sm font-bold mt-2">Faster product discovery</div>
                    </div>
                    <div className="neo-card p-4">
                      <div className="text-4xl font-black text-neo-purple">0</div>
                      <div className="text-sm font-bold mt-2">Lost sales from stockouts</div>
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
              National chains are investing millions in AI-powered retail experiences.
              <br />
              <span className="text-neo-yellow">Independent retailers shouldn't be left behind.</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-neo-cream">
              Your customers expect the same seamless, intelligent experience they get at big-box stores. But you don't have a 50-person IT team. You need something that works with what you already have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Peak hour bottlenecks",
                desc: "Customers leave when they can't get help. Your best associates can only be in one place at a time.",
                color: "bg-neo-pink",
                icon: IconClock,
              },
              {
                num: "02",
                title: "Product knowledge gaps",
                desc: "New hires take months to learn your catalog. Seasonal staff never fully get there. Customers notice.",
                color: "bg-neo-blue",
                icon: IconAlertTriangle,
              },
              {
                num: "03",
                title: "Invisible inventory",
                desc: "A customer wants a size 10 in blue. It's in the back — or at your other location. But nobody knows until it's too late.",
                color: "bg-neo-green",
                icon: IconEye,
              },
              {
                num: "04",
                title: "Lost cross-sell opportunities",
                desc: "A runner buying trail shoes would love to know about your new moisture-wicking socks. But who has time to suggest them?",
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

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block neo-border neo-shadow bg-neo-blue px-4 py-2 mb-6">
              <span className="font-bold">What It Does</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6">
              Everything your customer needs to know,
              <br />
              <span className="bg-neo-yellow px-2">instantly.</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              A tablet-based AI assistant that sits on your sales floor and connects to the systems you already run.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: IconSearch,
                title: "Smart Product Search",
                desc: "Customers describe what they need in plain language — \"something comfortable for standing all day\" — and get tailored results from your actual catalog.",
                color: "bg-neo-yellow",
              },
              {
                icon: IconPackage,
                title: "Real-Time Inventory",
                desc: "Instant size, color, and style availability down to the SKU level. No more walking to the back to check. If it's in stock, your customer knows immediately.",
                color: "bg-neo-pink",
              },
              {
                icon: IconBuildingStore,
                title: "Cross-Store Visibility",
                desc: "Out of stock here? ToeBox finds it at your nearest location and can initiate a transfer or direct ship — so you never lose the sale.",
                color: "bg-neo-blue",
              },
              {
                icon: IconBolt,
                title: "Intelligent Recommendations",
                desc: "Activity-based suggestions powered by your product data and real customer reviews. Every recommendation is backed by what actual buyers have said.",
                color: "bg-neo-green",
              },
              {
                icon: IconScale,
                title: "Side-by-Side Comparisons",
                desc: "Customers can compare features, materials, and price points across two or three products — helping them decide with confidence, not pressure.",
                color: "bg-neo-orange",
              },
              {
                icon: IconLock,
                title: "Store-Level Data Isolation",
                desc: "Each location's assistant only sees what's relevant to that store. Your data stays where it belongs, with full authentication and access controls.",
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-neo-yellow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block neo-border neo-shadow bg-neo-white px-4 py-2 mb-6">
              <span className="font-bold">How It Works</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6">
              Live in weeks, <span className="bg-neo-black text-neo-white px-2">not months.</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              No rip-and-replace. No massive IT lift. We plug into your existing systems and get you running fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect",
                desc: "We integrate with your existing POS, inventory, and product catalog systems through secure API connections. No new infrastructure required.",
                color: "bg-neo-pink",
              },
              {
                step: "02",
                title: "Configure",
                desc: "We tailor the assistant to your brand, your product categories, and your store layout. It learns your catalog so it speaks your language.",
                color: "bg-neo-blue",
              },
              {
                step: "03",
                title: "Deploy",
                desc: "A lightweight web app on any tablet. No app store. No special hardware. Your associates and customers can start using it on day one.",
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
              <span className="font-bold">Built For Independent Retail</span>
            </div>
            <h2 className="neo-heading text-4xl md:text-5xl mb-6">
              Enterprise AI, <span className="bg-neo-pink px-2">without the enterprise price tag.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: IconPlug,
                title: "Works with your current stack",
                desc: "Integrates with the POS and inventory systems you already use. No migration required.",
              },
              {
                icon: IconDeviceTablet,
                title: "Runs on any tablet",
                desc: "Browser-based web app. iPad, Android, Surface — if it has a browser, it works.",
              },
              {
                icon: IconMapPin,
                title: "Multi-location ready",
                desc: "Data isolation per store with cross-location inventory visibility when you need it.",
              },
              {
                icon: IconRocket,
                title: "Pilot in 90 days",
                desc: "Start with one store, prove the ROI, then scale across your footprint.",
              },
              {
                icon: IconChartBar,
                title: "Measurable impact",
                desc: "Track conversion lift, basket size, and associate efficiency from day one.",
              },
              {
                icon: IconPalette,
                title: "Your brand, your voice",
                desc: "The assistant is configured to match your tone, your categories, and your customer experience.",
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

      {/* CTA Section */}
      <section id="demo" className="py-20 px-4 bg-neo-black text-neo-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="neo-border-thick bg-neo-white text-neo-black p-12 neo-shadow-xl rotate-1">
            <div className="-rotate-1">
              <h2 className="neo-heading text-4xl md:text-5xl mb-6">
                Ready to give every customer
                <br />
                <span className="bg-neo-yellow px-2">your best associate?</span>
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                See how the in-store AI assistant works with your systems, your catalog, and your stores.
              </p>
              <a href="#" className="neo-btn bg-neo-pink text-xl inline-block">
                Book a Demo
              </a>
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
              alt="Toebox.ai"
              width={32}
              height={29}
              className="h-7 w-auto"
            />
            <span className="font-black">ToeBox</span>
          </div>
          <p className="text-sm">&copy; 2026 All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
