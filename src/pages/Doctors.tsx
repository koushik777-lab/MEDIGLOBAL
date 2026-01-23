import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { doctors } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Award, Calendar, Search } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import heroBg from "@assets/generated_images/modern_medical_facility_exterior.png";

export default function Doctors() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero with Search */}
      <div className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src={heroBg} className="w-full h-full object-cover" alt="Hospital Building" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/90 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Find a Specialist</h1>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Browse our network of internationally trained specialists across top accredited hospitals.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <Input 
              className="h-14 pl-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-white/30 backdrop-blur-sm" 
              placeholder="Search by speciality, doctor name, or hospital..." 
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div key={doc.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 transition-all group flex flex-col">
              <div className="h-48 bg-slate-100 relative overflow-hidden group-hover:bg-blue-50 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <Award className="w-16 h-16 opacity-20" />
                </div>
                {/* 
                <img src={doc.image} className="w-full h-full object-cover object-top" />
                */}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{doc.name}</h3>
                  <div className="text-primary font-medium">{doc.speciality}</div>
                </div>
                
                <div className="space-y-3 text-sm text-slate-600 mb-6 flex-1">
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
                    <span>{doc.qualification}</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 shrink-0 text-slate-400" />
                    <span>{doc.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 shrink-0 text-slate-400" />
                    <span>{doc.hospital}</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-white border border-slate-200 text-slate-900 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-xs">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
