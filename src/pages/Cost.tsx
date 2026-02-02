import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cost() {
  const comparisons = [
    { procedure: "Heart Bypass (CABG)", usa: 123000, india: 7000, savings: "94%" },
    { procedure: "Heart Valve Replacement", usa: 170000, india: 9500, savings: "94%" },
    { procedure: "Knee Replacement", usa: 35000, india: 6000, savings: "82%" },
    { procedure: "Hip Replacement", usa: 40000, india: 7200, savings: "82%" },
    { procedure: "Spinal Fusion", usa: 110000, india: 7000, savings: "93%" },
    { procedure: "IVF Cycle", usa: 15000, india: 3500, savings: "76%" },
    { procedure: "Dental Implant", usa: 2500, india: 800, savings: "68%" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Treatment Cost Comparison</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            World-class healthcare shouldn't bankrupt you. See how much you can save by choosing MediGlobal.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Cost Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden mb-16">
          <div className="bg-slate-900 text-white p-6 grid grid-cols-4 font-bold text-sm md:text-base">
            <div>Procedure</div>
            <div className="text-right">Cost in USA</div>
            <div className="text-right text-green-400">Cost in India</div>
            <div className="text-right">Your Savings</div>
          </div>
          <div className="divide-y divide-slate-100">
            {comparisons.map((item, idx) => (
              <div key={idx} className="p-6 grid grid-cols-4 items-center hover:bg-slate-50 transition-colors">
                <div className="font-medium text-slate-900 text-sm md:text-base">{item.procedure}</div>
                <div className="text-right text-slate-500 font-mono text-sm md:text-base">₹{item.usa.toLocaleString()}</div>
                <div className="text-right text-primary font-bold font-mono text-sm md:text-base">₹{item.india.toLocaleString()}</div>
                <div className="text-right text-green-600 font-bold bg-green-50 rounded-full py-1 px-3 text-xs md:text-sm inline-block ml-auto w-fit">
                  {item.savings}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Chart */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Visual Cost Difference</h2>
          <div className="space-y-6">
            {comparisons.slice(0, 4).map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-slate-700">
                  <span>{item.procedure}</span>
                </div>
                <div className="h-8 bg-slate-100 rounded-full overflow-hidden relative flex items-center">
                  {/* USA Bar */}
                  <div className="absolute left-0 top-0 bottom-0 bg-slate-300 w-full rounded-full"></div>
                  <span className="absolute right-4 text-xs font-bold text-slate-500 z-10">USA: ₹{item.usa.toLocaleString()}</span>

                  {/* India Bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-primary rounded-full z-20 flex items-center px-3 transition-all duration-1000 ease-out"
                    style={{ width: `${(item.india / item.usa) * 100 + 5}%` }}
                  >
                    <span className="text-xs font-bold text-white whitespace-nowrap">₹{item.india.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included in Our Packages</h3>
            <ul className="space-y-4">
              <IncludedItem text="Pre-operative tests and consultations" />
              <IncludedItem text="Surgery costs (Surgeon & Anesthetist fees)" />
              <IncludedItem text="Hospital stay in private room" />
              <IncludedItem text="Nursing care and meals" />
              <IncludedItem text="Medications during hospital stay" />
              <IncludedItem text="Airport transfers" />
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Why is it so affordable?</h3>
            <p className="text-slate-600 mb-4">
              Lower costs in India are NOT due to lower quality. They are a result of:
            </p>
            <ul className="space-y-3 text-slate-600 text-sm list-disc pl-5">
              <li>Lower cost of living and labor costs</li>
              <li>Lower infrastructure and real estate costs</li>
              <li>Generic drug manufacturing (India is the world's pharmacy)</li>
              <li>High volume of patients allowing for economies of scale</li>
            </ul>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

function IncludedItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
        <Check className="w-3 h-3 text-green-600" />
      </div>
      <span className="text-slate-700">{text}</span>
    </div>
  );
}
