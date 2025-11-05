import { Check, ArrowRight, Clock, Globe, Mail, BarChart3 } from 'lucide-react';

export default function Sections() {
  return (
    <div className="bg-white">
      {/* Problem Section */}
      <section className="container mx-auto px-6 py-20" id="problem">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why building a website is broken</h2>
        <p className="mt-4 text-gray-700 max-w-3xl">
          DIY tools take forever. Agencies are expensive. Subscriptions lock you in. You end up juggling hosting, domains, email, analytics, and edits across 5 different dashboards.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Endless setup', desc: 'Domains, SSL, DNS, hosting, email… hours lost before you even start.' },
            { title: 'Design paralysis', desc: 'Too many choices, templates, and settings slow you down.' },
            { title: 'Vendor lock-in', desc: 'Export headaches and premium "features" behind paywalls.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-6 py-20" id="comparison">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">See the difference</h2>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-1">•</span> Weeks of manual setup across multiple vendors</li>
              <li className="flex items-start gap-2"><span className="mt-1">•</span> Template tweaking and plugin hunting</li>
              <li className="flex items-start gap-2"><span className="mt-1">•</span> Risky lock-in and ongoing maintenance</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ASPiration</h3>
            <ul className="space-y-3 text-gray-800">
              {['1-click setup','AI-crafted design & copy','Own your assets, export anytime'].map((p) => (
                <li key={p} className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600" /> {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-6 py-20" id="solution">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How ASPiration fixes this</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { title: 'AI-first creation', desc: 'Provide a few prompts. Get a polished site with brand, pages, and copy.', icon: Clock },
            { title: 'Simple ownership', desc: 'Domain, email, hosting, and analytics included — you own it all.', icon: Globe },
            { title: 'Clarity by default', desc: 'No hidden upsells. Predictable pricing with full export.', icon: BarChart3 },
          ].map(({ title, desc, icon: Icon }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200">
              <Icon className="w-6 h-6 text-purple-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="container mx-auto px-6 py-20" id="before-after">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Before / After</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900">DIY</h3>
            <div className="mt-4 p-4 rounded-lg bg-gray-50 text-sm text-gray-700">
              Header<br/>Hero with placeholder text<br/>Misaligned sections<br/>No analytics or email
            </div>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50">
            <h3 className="font-semibold text-gray-900">AI-generated</h3>
            <div className="mt-4 p-4 rounded-lg bg-white text-sm text-gray-800 shadow-sm">
              Modern hero with 3D motion<br/>Clear value prop and CTAs<br/>Polished sections & responsive layout<br/>Analytics + domain + email connected
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-6 py-20" id="how-it-works">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How it works (sneak peek)</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Describe your brand', desc: 'Answer a few questions or paste your bio.' },
            { step: '2', title: 'Generate your site', desc: 'AI crafts design, layout, and content in minutes.' },
            { step: '3', title: 'Launch & own it', desc: 'Connect domain, email, and analytics with one click.' },
          ].map((s) => (
            <div key={s.step} className="p-6 rounded-xl border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">{s.step}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
        <a href="#calculator" className="inline-flex items-center gap-2 mt-8 text-purple-700 font-semibold">Estimate your savings <ArrowRight className="w-4 h-4" /></a>
      </section>

      {/* All-in-One */}
      <section className="container mx-auto px-6 py-20" id="all-in-one">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">All-in-one platform</h2>
        <p className="mt-3 text-gray-700">Everything you need to run your business online — unified and exportable.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Domain', icon: Globe },
            { title: 'Email', icon: Mail },
            { title: 'Hosting', icon: Globe },
            { title: 'Analytics', icon: BarChart3 },
          ].map(({ title, icon: Icon }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200 bg-white">
              <Icon className="w-6 h-6 text-purple-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-700">Built-in, simple, and yours to keep.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision / Roadmap */}
      <section className="container mx-auto px-6 py-20" id="roadmap">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The vision</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">We’re building towards more AI tools, custom templates, and deeper integrations — while keeping your ownership at the center.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: 'AI content studio', desc: 'Blog, SEO, and social posts generated from your brand voice.' },
            { title: 'Template marketplace', desc: 'Curated, high-converting designs you can fully export.' },
            { title: 'Automation hub', desc: 'Connect your stack with zero-config workflows.' },
          ].map((r) => (
            <div key={r.title} className="p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-gray-700">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (simple, standard) */}
      <footer className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-10 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold text-gray-900">ASPiration</div>
            <p className="mt-2">All-in-one, no lock-in website platform.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-medium text-gray-900">Product</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#how-it-works" className="hover:text-gray-900">How it works</a></li>
                <li><a href="#all-in-one" className="hover:text-gray-900">Platform</a></li>
                <li><a href="#roadmap" className="hover:text-gray-900">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-gray-900">Company</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right">© {new Date().getFullYear()} ASPiration. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
