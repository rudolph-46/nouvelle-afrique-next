"use client";

import { Heart, ThumbsUp, Share2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ArticleActionsProps {
  articleId: string;
}

const ArticleActions = ({ articleId }: ArticleActionsProps) => {
  const [liked, setLiked] = useState(false);
  const [recommended, setRecommended] = useState(false);
  const [useful, setUseful] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    toast.success(liked ? "J'aime retiré" : "Vous aimez cet article !");
  };

  const handleRecommend = () => {
    setRecommended(!recommended);
    toast.success(recommended ? "Recommandation retirée" : "Article recommandé !");
  };

  const handleUseful = () => {
    setUseful(!useful);
    toast.success(useful ? "Marque retirée" : "Marqué comme utile !");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Lien copié dans le presse-papier !");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={handleLike}
        className={`transition-all duration-300 ${
          liked 
            ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
            : "hover:border-primary hover:text-primary"
        }`}
      >
        <Heart className={`h-4 w-4 mr-1.5 transition-transform duration-300 ${liked ? "fill-current scale-110" : ""}`} />
        J'aime
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleRecommend}
        className={`transition-all duration-300 ${
          recommended 
            ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
            : "hover:border-primary hover:text-primary"
        }`}
      >
        <ThumbsUp className={`h-4 w-4 mr-1.5 transition-transform duration-300 ${recommended ? "fill-current scale-110" : ""}`} />
        Je recommande
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleUseful}
        className={`transition-all duration-300 ${
          useful 
            ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
            : "hover:border-primary hover:text-primary"
        }`}
      >
        <MessageSquare className={`h-4 w-4 mr-1.5 transition-transform duration-300 ${useful ? "fill-current scale-110" : ""}`} />
        Utile
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleShare}
        className="transition-all duration-300 hover:border-primary hover:text-primary"
      >
        <Share2 className="h-4 w-4 mr-1.5" />
        Partager mon avis
      </Button>
    </div>
  );
};

export default ArticleActions;
