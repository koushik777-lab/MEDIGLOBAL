import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { treatments } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, IndianRupee, Calendar } from "lucide-react";

export default function TreatmentDetail() {
  const [match, params] = useRoute("/treatments/:type");
  const treatment = treatments.find(t => t.id === params?.type);

  if (!treatment) return <div>Treatment not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6 border border-blue-500/30">
            Center of Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{treatment.title}</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            {treatment.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Procedures Table */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Procedures & Cost Comparison</h2>
              <div className="overflow-hidden border border-slate-200 rounded-xl">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="p-4 font-semibold text-slate-900">Procedure</th>
                      <th className="p-4 font-semibold text-slate-900">Cost in US (₹)</th>
                      <th className="p-4 font-semibold text-primary">Cost in India (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {treatment.procedures.map((proc) => (
                      <tr key={proc.name} className="hover:bg-slate-50/50">
                        <td className="p-4 font-medium text-slate-900">{proc.name}</td>
                        <td className="p-4 text-slate-500">{proc.cost_us}</td>
                        <td className="p-4 text-primary font-bold">{proc.cost_india}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">* Costs are approximate and may vary based on patient condition and room category.</p>
            </section>

            {/* Conditions */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Conditions Treated</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {treatment.conditions.map((c) => (
                  <div key={c} className="flex items-center gap-3 p-4 border border-slate-100 rounded-lg bg-slate-50/50">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-slate-700">{c}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose India */}
            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose India for {treatment.title}?</h2>
              <p className="text-slate-700 mb-6 leading-relaxed">
                India is a global leader in {treatment.title.toLowerCase()}, offering cutting-edge technology like Robotic Surgery, CyberKnife, and advanced rehabilitation at a fraction of Western costs.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Recovery Time</div>
                    <div className="text-sm text-slate-600">{treatment.recovery} typical stay</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Success Rate</div>
                    <div className="text-sm text-slate-600">{treatment.success_rate} clinical success</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Get a Free Estimate</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Upload your medical reports and get a detailed treatment plan from a specialist within 24 hours.
                </p>
                <Link href="/contact">
                  <Button className="w-full mb-3 bg-primary hover:bg-sky-700">Request Quote</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Speak to a Doctor</Button>
                </Link>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-2xl">
                <h3 className="font-bold mb-2">Need Assistance?</h3>
                <p className="text-sm text-slate-400 mb-4">Our international patient team is available 24/7 on WhatsApp.</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-none">Chat on WhatsApp</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
