import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get a Free Medical Opinion</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Fill out the form below and our medical team will get back to you within 24 hours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            
             <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="USA" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Describe your medical condition</Label>
              <Textarea id="message" placeholder="Please provide details about your diagnosis, symptoms, and what treatment you are looking for..." className="h-32" />
            </div>

            <div className="space-y-2">
               <Label>Upload Medical Reports (Optional)</Label>
               <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                  <p className="text-sm text-slate-500">Drag and drop files here, or click to browse</p>
                  <p className="text-xs text-slate-400 mt-2">PDF, JPG, PNG up to 10MB</p>
               </div>
            </div>

            <Button size="lg" className="w-full bg-primary hover:bg-sky-700 text-lg">Submit Request</Button>
            <p className="text-xs text-slate-500 text-center">
              By submitting this form, you agree to our privacy policy. Your medical data is secure and confidential.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
