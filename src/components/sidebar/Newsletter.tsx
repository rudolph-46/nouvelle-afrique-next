"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="bg-primary p-6 text-primary-foreground">
      <h3 className="font-sans text-module-title uppercase mb-2">
        Newsletter
      </h3>
      <p className="font-sans text-sm opacity-90 mb-4">
        Recevez l'essentiel de l'actualité africaine directement dans votre boîte mail.
      </p>
      <form className="space-y-3">
        <Input
          type="email"
          placeholder="Votre adresse email"
          className="bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
        />
        <Button 
          type="submit" 
          variant="secondary"
          className="w-full font-sans text-sm uppercase tracking-wider"
        >
          S'inscrire
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
