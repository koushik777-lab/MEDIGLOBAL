import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { treatments } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Treatments() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Medical Treatments</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive care across major specialities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t) => (
            <Link key={t.id} href={`/treatments/${t.id}`}>
              <a className="group block bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {t.description}
                </p>
                <div className="flex items-center text-primary font-semibold text-sm">
                  View Procedures <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
