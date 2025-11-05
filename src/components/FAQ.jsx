import { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do I really own everything I create?',
    a: 'Yes. Your domain, content, and generated assets are exportable at any time. No dark patterns, no lock-in.'
  },
  {
    q: 'How is this different from website builders?',
    a: 'ASPiration uses AI to generate a custom site, connects domain/email/analytics for you, and keeps ownership in your hands. No plugins or patchwork required.'
  },
  {
    q: 'Can I edit the site after generation?',
    a: 'Absolutely. Regenerate sections with AI or make manual edits. You stay in control.'
  },
  {
    q: 'What about SEO and performance?',
    a: 'We generate semantic markup, fast pages, and integrated analytics so you can measure and iterate.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-purple-600" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Interactive AI FAQ</h2>
        </div>
        <p className="mt-3 text-gray-700 max-w-3xl">Ask what matters. Click to reveal answers — designed to address common objections.</p>

        <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((item, idx) => (
            <button
              key={item.q}
              onClick={() => setOpen(open === idx ? -1 : idx)}
              className="w-full text-left p-6 focus:outline-none"
              aria-expanded={open === idx}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="font-medium text-gray-900">{item.q}</div>
                  {open === idx && (
                    <div className="mt-2 text-gray-700">{item.a}</div>
                  )}
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 text-sm text-gray-700">
          Want a conversational experience? Embed Typebot or your preferred chat widget here for on-page Q&A.
        </div>
      </div>
    </section>
  );
}
