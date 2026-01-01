import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Building2 } from "lucide-react";
import teamImage from "@assets/generated_images/professional_medical_team_group_photo.png";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About MediGlobal</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We are your trusted partners in medical travel, connecting you with the world's best healthcare providers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Ethical Medical Facilitation</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              MediGlobal was founded with a singular mission: to make world-class healthcare accessible to everyone, regardless of geography. We understand that traveling for medical treatment is a major decision, which is why we prioritize transparency, safety, and clinical excellence above all else.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are not a travel agency. We are medical facilitators led by healthcare professionals who understand the nuances of complex surgeries and patient care. We only partner with JCI and NABH accredited hospitals that meet rigorous international standards.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <Value icon={<ShieldIcon />} title="Patient Safety First" desc="Rigorous vetting of all partner hospitals." />
              <Value icon={<TransparentIcon />} title="Total Transparency" desc="No hidden costs or surprise fees." />
              <Value icon={<DoctorIcon />} title="Clinical Excellence" desc="Access to top 1% of specialists." />
              <Value icon={<SupportIcon />} title="24/7 Support" desc="We are with you at every step." />
            </div>
          </div>
          
          <div className="rounded-3xl h-[500px] w-full relative overflow-hidden shadow-2xl shadow-blue-900/10">
            <img 
              src={teamImage} 
              alt="MediGlobal Medical Team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end p-8">
               <div className="text-white">
                 <div className="font-bold text-xl">Dr. Anjali Desai & Team</div>
                 <div className="text-sm opacity-80">Chief Medical Officers</div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="5000+" label="Patients Served" />
            <Stat number="50+" label="Partner Hospitals" />
            <Stat number="200+" label="Expert Surgeons" />
            <Stat number="35+" label="Countries Supported" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Value({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 text-primary w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ number, label }: any) {
  return (
    <div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-blue-200 font-medium">{label}</div>
    </div>
  );
}

const ShieldIcon = () => <CheckCircle2 className="w-5 h-5" />;
const TransparentIcon = () => <Building2 className="w-5 h-5" />;
const DoctorIcon = () => <Award className="w-5 h-5" />;
const SupportIcon = () => <Users className="w-5 h-5" />;
