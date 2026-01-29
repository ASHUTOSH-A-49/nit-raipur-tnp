// src/App.jsx
// Note: Imports using the alias "@" are fine and don't require an extension update here
import { Toaster } from "@/components/ui/toaster"; 
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";


// CRITICAL: Update the extensions of all local imports to use the new .jsx extension
import Index from "./pages/Index.jsx"; 
import Academics from "./pages/Academics.jsx";
import Placements from "./pages/Placements.jsx";
import ForRecruiters from "./pages/ForRecruiters.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Developer from "./pages/Developer.jsx";

const queryClient = new QueryClient();

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return null;
}


// The component itself requires no syntax changes, as it was already pure JSX/JS
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/recruiters" element={<ForRecruiters />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;