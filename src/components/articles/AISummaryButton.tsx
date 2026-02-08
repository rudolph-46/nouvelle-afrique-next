"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AISummaryButtonProps {
  aiSummary?: string;
  title: string;
}

const AISummaryButton = ({ aiSummary, title }: AISummaryButtonProps) => {
  const [open, setOpen] = useState(false);

  if (!aiSummary) return null;

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="group transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
      >
        <Sparkles className="h-4 w-4 mr-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        Résumé IA
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg animate-in fade-in-0 zoom-in-95 duration-300">
          <DialogHeader>
            <DialogTitle className="font-serif text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Résumé IA
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <h3 className="font-serif text-sm font-semibold text-editorial-black mb-3 line-clamp-2">
              {title}
            </h3>
            
            <div className="prose prose-sm max-w-none">
              <p className="text-body-black leading-relaxed">
                {aiSummary}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AISummaryButton;
