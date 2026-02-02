import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Treatments from "@/pages/Treatments";
import TreatmentDetail from "@/pages/TreatmentDetail";
import Doctors from "@/pages/Doctors";
import Cost from "@/pages/Cost";
import Process from "@/pages/Process";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/treatments" component={Treatments} />
      <Route path="/treatments/:type" component={TreatmentDetail} />
      <Route path="/doctors" component={Doctors} />
      <Route path="/cost" component={Cost} />
      <Route path="/process" component={Process} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
