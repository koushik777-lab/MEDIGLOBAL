import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, FileText, Plane, Stethoscope, Home, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Initial Enquiry",
      desc: "Contact us via the form or WhatsApp. Send your medical reports and a brief history of your condition.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Medical Review & Quote",
      desc: "Our specialist doctors review your reports. We provide a detailed treatment plan, cost estimate, and doctor profile within 24-48 hours.",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Consultation",
      desc: "Video consultation with the surgeon to discuss the procedure and answer your questions.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Travel Arrangements",
      desc: "Once you decide to proceed, we assist with Medical Visa invitation letters, flight bookings, and accommodation options.",
      icon: <Plane className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Arrival & Treatment",
      desc: "Airport pickup by our team. Admission to the hospital and pre-op tests. Surgery is performed as scheduled.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Recovery & Return",
      desc: "Post-op care in the hospital followed by recuperation in a hotel. Final check-up before you fly back home.",
      icon: <Home className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
       <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">International Patient Journey</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From your first query to your safe return home, we handle every detail.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -z-10 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.id} className={cn(
                "flex flex-col md:flex-row items-start md:items-center gap-8 relative",
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                
                {/* Content Side */}
                <div className={cn(
                  "flex-1 w-full pl-16 md:pl-0",
                  idx % 2 === 0 ? "md:text-left" : "md:text-right"
                )}>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white shadow-lg z-10">
                  {step.icon}
                </div>

                {/* Empty Side (for balance) */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-full bg-slate-100 mb-8">
            <span className="bg-white px-4 py-1 rounded-full text-sm font-semibold text-slate-600 border border-slate-200 shadow-sm">Process usually takes 1-2 weeks</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to start your journey?</h2>
          {/* Button added in parent component usually, just text here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
