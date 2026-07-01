import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import Home from "@/pages/home";
import TetoEgen from "@/pages/teto-egen";
import AttachmentStyle from "@/pages/attachment-style";
import NarcissismTest from "@/pages/narcissism";
import BalanceGame from "@/pages/balance-game";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/teto-egen" component={TetoEgen} />
      <Route path="/attachment-style" component={AttachmentStyle} />
      <Route path="/narcissism" component={NarcissismTest} />
      <Route path="/balance-game" component={BalanceGame} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            {/* Language Toggle - Top Left */}
            <div className="fixed top-4 left-4 z-50">
              <LanguageToggle />
            </div>
            {/* Theme Toggle - Top Right */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
