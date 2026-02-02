import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Activity, Home, Phone, Stethoscope, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Decorative Floating Icons */}
      <BackgroundIcon Icon={Stethoscope} className="top-20 left-20 text-blue-100" delay={0} />
      <BackgroundIcon Icon={Activity} className="bottom-20 right-20 text-blue-100" delay={2} />
      <BackgroundIcon Icon={FileQuestion} className="top-40 right-1/4 text-blue-100" delay={1} />

      <div className="text-center z-10 max-w-2xl w-full">
        {/* ECG Animation Container */}
        <div className="relative h-32 mb-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[300px] text-red-500"
          >
            <svg viewBox="0 0 500 150" className="w-full h-full drop-shadow-xl">
              <motion.path
                d="M0,75 L50,75 L70,20 L90,130 L110,75 L150,75 L170,20 L190,130 L210,75 L300,75 L320,20 L340,130 L360,75 L500,75"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              />
            </svg>
          </motion.div>
          {/* Flatline overlay text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 text-slate-400 font-mono text-sm tracking-widest"
          >
            SIGNAL_LOST
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
            404
          </h1>
          <h2 className="text-3xl font-bold text-slate-800 mb-4 bg-white/50 backdrop-blur-sm inline-block px-6 py-2 rounded-full shadow-sm border border-slate-200">
            Vital Signs Missing!
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
            The page you're looking for seems to have been discharged or doesn't exist in our records. Don't worry, our specialists are on standby.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-sky-700 shadow-lg shadow-blue-500/20 gap-2 h-12 px-8 text-lg">
              <Home className="w-5 h-5" />
              Return Home
            </Button>
          </Link>
          <Link href="/doctors">
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 gap-2 h-12 px-8 text-lg">
              <Stethoscope className="w-5 h-5 text-primary" />
              Find Specialist
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="ghost" className="text-slate-600 hover:text-primary gap-2 h-12">
              <Phone className="w-5 h-5" />
              Contact Support
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Code decorations */}
      <div className="absolute opacity-5 font-mono text-sm pointer-events-none select-none inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 transform -rotate-12">Error: 404_NOT_FOUND</div>
        <div className="absolute bottom-20 left-1/4 transform rotate-6">Status: CRITICAL</div>
        <div className="absolute top-1/3 right-10 transform -rotate-3">Location: UNKNOWN</div>
        <div className="absolute bottom-10 right-20 transform rotate-12">System.exit(1)</div>
      </div>
    </div>
  );
}

function BackgroundIcon({ Icon, className, delay }: { Icon: any, className: string, delay: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon className="w-32 h-32 opacity-20" />
    </motion.div>
  );
}
