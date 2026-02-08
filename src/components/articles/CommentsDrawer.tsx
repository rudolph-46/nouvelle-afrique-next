"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Textarea } from "@/components/ui/textarea";

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  avatar: string;
}

// Mock comments data
const mockComments: Comment[] = [
  {
    id: 1,
    author: "Amadou Diallo",
    date: "Il y a 2 heures",
    content: "Excellent article ! L'analyse est très pertinente et reflète bien la réalité du terrain.",
    avatar: "AD"
  },
  {
    id: 2,
    author: "Fatou Ndiaye",
    date: "Il y a 5 heures",
    content: "Je partage cette vision. Il est temps que l'Afrique prenne sa place dans l'économie mondiale.",
    avatar: "FN"
  },
  {
    id: 3,
    author: "Ibrahim Koné",
    date: "Il y a 1 jour",
    content: "Très bonne synthèse. J'aurais aimé voir plus de données chiffrées cependant.",
    avatar: "IK"
  },
  {
    id: 4,
    author: "Marie Ahounou",
    date: "Il y a 2 jours",
    content: "Un article qui donne de l'espoir pour notre continent. Merci à la rédaction !",
    avatar: "MA"
  }
];

const CommentsContent = () => {
  const [newComment, setNewComment] = useState("");

  return (
    <div className="flex flex-col h-full">
      {/* Comments List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {mockComments.map((comment) => (
          <div key={comment.id} className="border-b border-editorial-divider pb-4 last:border-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-sans text-sm font-medium text-primary">{comment.avatar}</span>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-editorial-black">{comment.author}</p>
                <p className="font-sans text-xs text-dark-grey">{comment.date}</p>
              </div>
            </div>
            <p className="font-sans text-sm text-body-black leading-relaxed">{comment.content}</p>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div className="border-t border-editorial-divider p-4 bg-background">
        <div className="flex gap-3">
          <Textarea
            placeholder="Ajouter un commentaire..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 min-h-[80px] resize-none font-sans text-sm"
          />
        </div>
        <div className="flex justify-end mt-3">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
            <Send className="w-4 h-4 mr-2" />
            Publier
          </Button>
        </div>
      </div>
    </div>
  );
};

interface CommentsDrawerProps {
  commentCount?: number;
}

const CommentsDrawer = ({ commentCount = 4 }: CommentsDrawerProps) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 font-sans text-sm border-editorial-divider hover:border-primary hover:text-primary"
          >
            <MessageCircle className="w-4 h-4" />
            {commentCount} commentaires
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh]">
          <DrawerHeader className="border-b border-editorial-divider">
            <DrawerTitle className="font-serif text-lg">
              Commentaires ({commentCount})
            </DrawerTitle>
          </DrawerHeader>
          <CommentsContent />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 font-sans text-sm border-editorial-divider hover:border-primary hover:text-primary"
        >
          <MessageCircle className="w-4 h-4" />
          {commentCount} commentaires
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[45vw] p-0">
        <SheetHeader className="p-4 border-b border-editorial-divider">
          <SheetTitle className="font-serif text-lg">
            Commentaires ({commentCount})
          </SheetTitle>
        </SheetHeader>
        <CommentsContent />
      </SheetContent>
    </Sheet>
  );
};

export default CommentsDrawer;
