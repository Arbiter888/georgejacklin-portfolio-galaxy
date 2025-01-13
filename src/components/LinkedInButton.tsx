import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const LinkedInButton = () => {
  return (
    <a
      href="https://www.linkedin.com/in/george-jacklin/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50"
    >
      <Button
        variant="outline"
        size="lg"
        className="gap-2 bg-pacific-cyan/10 backdrop-blur-sm border-pacific-cyan/20 text-pacific-cyan hover:bg-pacific-cyan/20 hover:text-white transition-colors group"
      >
        <Linkedin className="w-5 h-5" />
        <span className="hidden sm:inline">Connect on LinkedIn</span>
      </Button>
    </a>
  );
};