import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Activity, 
  Heart, 
  Brain, 
  Baby, 
  Stethoscope, 
  Award,
  ShieldCheck,
  Clock,
  Globe,
  CheckCircle2,
  FileText
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/modern_clean_hospital_lobby_with_natural_light.png";
import doctorImage from "@assets/generated_images/friendly_doctor_consultation_premium_interaction.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent z-10" />
          <img 
            src={heroImage} 
            alt="Modern Hospital Lobby" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold tracking-wide uppercase">
                <Globe className="w-3 h-3" />
                <span>World-Class Medical Care</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Premium Healthcare <br />
                <span className="text-primary">Without Borders</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Access internationally accredited hospitals and expert specialists in India at a fraction of the global cost. Personalized care, ethical treatment, and complete peace of mind.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-0.5 transition-all">
                    Get Free Medical Opinion
                  </Button>
                </Link>
                <Link href="/process">
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold bg-white/80 backdrop-blur-xs border-slate-200 hover:bg-white">
                    <FileText className="w-4 h-4 mr-2" />
                    How It Works
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-8 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span>JCI Accredited Hospitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Top 1% Global Doctors</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialities Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Centers of Excellence</h2>
            <p className="text-slate-600">
              We specialize in complex procedures across major medical disciplines, partnering only with department heads and senior consultants.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SpecialityCard 
              icon={<Heart className="w-8 h-8 text-rose-500" />} 
              title="Cardiology" 
              desc="Bypass, Stents, Valve Replacement" 
              href="/treatments/cardiology"
            />
            <SpecialityCard 
              icon={<Activity className="w-8 h-8 text-blue-500" />} 
              title="Orthopedics" 
              desc="Joint Replacement, Spine Surgery" 
              href="/treatments/orthopedic"
            />
            <SpecialityCard 
              icon={<Brain className="w-8 h-8 text-indigo-500" />} 
              title="Neurology" 
              desc="Brain Surgery, Stroke Rehab" 
              href="/treatments/neurology"
            />
            <SpecialityCard 
              icon={<Stethoscope className="w-8 h-8 text-emerald-500" />} 
              title="Oncology" 
              desc="Chemo, Radiation, Surgery" 
              href="/treatments/oncology"
            />
            <SpecialityCard 
              icon={<Baby className="w-8 h-8 text-purple-500" />} 
              title="IVF & Fertility" 
              desc="Advanced Reproductive Tech" 
              href="/treatments/ivf"
            />
            <SpecialityCard 
              icon={<div className="w-8 h-8 flex items-center justify-center font-bold text-xl text-teal-500">Ds</div>} 
              title="Dental" 
              desc="Implants, Smile Makeovers" 
              href="/treatments/dental"
            />
             <SpecialityCard 
              icon={<div className="w-8 h-8 flex items-center justify-center font-bold text-xl text-orange-500">Sg</div>} 
              title="General Surgery" 
              desc="Minimally Invasive Procedures" 
              href="/treatments/surgery"
            />
             <SpecialityCard 
              icon={<ArrowRight className="w-8 h-8 text-slate-400" />} 
              title="View All" 
              desc="Explore all 50+ treatments" 
              href="/treatments"
              isAction
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl -z-10 transform rotate-3"></div>
              <img 
                src={doctorImage} 
                alt="Expert Medical Team" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">99.8% Success</div>
                    <div className="text-xs text-slate-500">Patient Satisfaction Rate</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">"The care I received was superior to what I would have found at home."</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Patients Trust MediGlobal</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We don't just book appointments. We act as your medical advocate, ensuring you receive the highest standard of care at transparent prices.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <Feature 
                  title="Accredited Hospitals" 
                  desc="Partnered only with JCI and NABH accredited facilities ensuring global safety standards."
                />
                <Feature 
                  title="Cost Savings" 
                  desc="Save up to 70% compared to US/UK prices without compromising on quality."
                />
                <Feature 
                  title="Zero Waiting Time" 
                  desc="Skip the long queues. Immediate consultation and priority surgery scheduling."
                />
                <Feature 
                  title="End-to-End Support" 
                  desc="From medical visa assistance to airport pickup and post-op follow-up."
                />
              </div>

              <div className="pt-4">
                 <Link href="/about">
                  <Button variant="outline" className="rounded-full px-8 border-slate-300 text-slate-700 hover:text-primary hover:border-primary">
                    Learn About Our Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Journey to Recovery</h2>
            <p className="text-slate-400">
              A seamless, stress-free process designed for international patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

            <Step number="1" title="Send Enquiry" desc="Share your medical reports for a preliminary review." />
            <Step number="2" title="Get Treatment Plan" desc="Receive detailed quotes and doctor opinions within 24 hours." />
            <Step number="3" title="Travel & Care" desc="We handle visas, flights, and logistics. You focus on healing." />
            <Step number="4" title="Recovery Home" desc="Post-operative care and safe return to your home country." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20 pattern-dots"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to prioritize your health?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Get a complimentary medical opinion from India's top specialists. No obligation, 100% confidential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10 h-14 bg-white text-primary hover:bg-slate-50 font-bold text-lg shadow-2xl">
                Get Free Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 border-blue-400 text-white hover:bg-blue-800 hover:text-white hover:border-blue-300 font-semibold text-lg">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SpecialityCard({ icon, title, desc, href, isAction = false }: any) {
  return (
    <Link href={href}>
      <a className={cn(
        "group p-6 rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 block h-full",
        isAction && "bg-slate-50 border-dashed border-slate-300 flex flex-col items-center justify-center text-center"
      )}>
        <div className={cn(
          "mb-4 w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
          isAction ? "bg-white" : "bg-slate-50"
        )}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </a>
    </Link>
  );
}

function Feature({ title, desc }: any) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 mt-1">
        <CheckCircle2 className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Step({ number, title, desc }: any) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 text-white flex items-center justify-center font-bold mb-6 group-hover:bg-primary transition-colors">
        {number}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

import { cn } from "@/lib/utils";
