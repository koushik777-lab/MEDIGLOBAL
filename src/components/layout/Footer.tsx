import { Link } from "wouter";
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">
                  MediGlobal
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                  Premium Healthcare
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Connecting international patients with accredited hospitals and world-class doctors. Your health journey, simplified and secured.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook className="w-4 h-4" />} />
              <SocialIcon icon={<Twitter className="w-4 h-4" />} />
              <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
              <SocialIcon icon={<Instagram className="w-4 h-4" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Treatments</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/treatments/cardiology"><a className="hover:text-primary transition-colors">Cardiology</a></Link></li>
              <li><Link href="/treatments/orthopedic"><a className="hover:text-primary transition-colors">Orthopedic Surgery</a></Link></li>
              <li><Link href="/treatments/oncology"><a className="hover:text-primary transition-colors">Oncology (Cancer)</a></Link></li>
              <li><Link href="/treatments/neurology"><a className="hover:text-primary transition-colors">Neurology</a></Link></li>
              <li><Link href="/treatments/ivf"><a className="hover:text-primary transition-colors">IVF & Fertility</a></Link></li>
              <li><Link href="/treatments/dental"><a className="hover:text-primary transition-colors">Dental Procedures</a></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Patient Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/process"><a className="hover:text-primary transition-colors">How it Works</a></Link></li>
              <li><Link href="/cost"><a className="hover:text-primary transition-colors">Cost Guide</a></Link></li>
              <li><Link href="/doctors"><a className="hover:text-primary transition-colors">Find a Doctor</a></Link></li>
              <li><Link href="/hospitals"><a className="hover:text-primary transition-colors">Partner Hospitals</a></Link></li>
              <li><Link href="/testimonials"><a className="hover:text-primary transition-colors">Patient Stories</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-primary transition-colors">Medical Blog</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Medical Plaza, Health District,<br />New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>patient.care@mediglobal.com</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-white font-medium">Verified & Secure</span>
              </div>
              <p className="text-xs text-slate-400">
                We adhere to strict medical ethics and patient confidentiality protocols.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 MediGlobal Healthcare Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-8 text-[10px] text-slate-600 text-center max-w-3xl mx-auto">
          Disclaimer: MediGlobal is a medical tourism facilitator, not a medical provider. All medical advice and treatments are provided by certified doctors and hospitals. Results may vary.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary text-slate-400 hover:text-white transition-all">
      {icon}
    </a>
  );
}
