import { useMemo, useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export default function Calculator() {
  const [hours, setHours] = useState(40); // hours DIY
  const [hourlyRate, setHourlyRate] = useState(75); // value of time
  const [agencyQuote, setAgencyQuote] = useState(3500);
  const [subscription, setSubscription] = useState(49); // competitor monthly

  const diyCost = useMemo(() => hours * hourlyRate, [hours, hourlyRate]);
  const competitorYearly = useMemo(() => subscription * 12, [subscription]);
  const aspirationEstimate = useMemo(() => Math.max(0.25 * agencyQuote, 499), [agencyQuote]);

  const savingsVsAgency = useMemo(() => agencyQuote - aspirationEstimate, [agencyQuote, aspirationEstimate]);
  const savingsVsDIY = useMemo(() => diyCost - aspirationEstimate, [diyCost, aspirationEstimate]);
  const savingsVsCompetitor = useMemo(() => competitorYearly - aspirationEstimate, [competitorYearly, aspirationEstimate]);

  return (
    <section id="calculator" className="bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center gap-3">
          <CalcIcon className="w-6 h-6 text-purple-600" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Interactive savings calculator</h2>
        </div>
        <p className="mt-3 text-gray-700 max-w-3xl">Adjust the sliders to estimate how much time and money ASPiration can save you.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-gray-200 bg-white">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">DIY hours</label>
                <input type="range" min="4" max="120" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} className="w-full" />
                <div className="mt-1 text-sm text-gray-600">{hours} hours</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your hourly value ($)</label>
                <input type="range" min="20" max="300" step="5" value={hourlyRate} onChange={(e) => setHourlyRate(parseInt(e.target.value))} className="w-full" />
                <div className="mt-1 text-sm text-gray-600">${hourlyRate}/hour</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Agency quote ($)</label>
                <input type="range" min="1000" max="15000" step="100" value={agencyQuote} onChange={(e) => setAgencyQuote(parseInt(e.target.value))} className="w-full" />
                <div className="mt-1 text-sm text-gray-600">${agencyQuote.toLocaleString()}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Competing tool monthly ($)</label>
                <input type="range" min="10" max="199" step="1" value={subscription} onChange={(e) => setSubscription(parseInt(e.target.value))} className="w-full" />
                <div className="mt-1 text-sm text-gray-600">${subscription}/mo</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 bg-white">
            <div className="grid sm:grid-cols-2 gap-6">
              <Stat label="DIY cost of time" value={`$${diyCost.toLocaleString()}`} />
              <Stat label="Competitor yearly" value={`$${competitorYearly.toLocaleString()}`} />
              <Stat label="ASPiration estimate" value={`$${aspirationEstimate.toLocaleString()}`} highlight />
              <Stat label="Save vs agency" value={`$${savingsVsAgency.toLocaleString()}`} positive />
              <Stat label="Save vs DIY" value={`$${savingsVsDIY.toLocaleString()}`} positive />
              <Stat label="Save vs competitor" value={`$${savingsVsCompetitor.toLocaleString()}`} positive />
            </div>
            <a href="#how-it-works" className="inline-flex items-center gap-2 mt-8 text-purple-700 font-semibold">See the steps to launch <span aria-hidden>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, highlight = false, positive = false }) {
  return (
    <div className={`p-4 rounded-lg border ${highlight ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200' : 'bg-gray-50 border-gray-200'}`}>
      <div className="text-sm text-gray-600">{label}</div>
      <div className={`mt-1 text-2xl font-bold ${positive ? 'text-emerald-600' : 'text-gray-900'}`}>{value}</div>
    </div>
  );
}
