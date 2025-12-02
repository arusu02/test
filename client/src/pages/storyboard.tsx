import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Music, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Import generated images
import scene1 from "@assets/generated_images/stone_commendatore_entering_don_giovanni's_dining_room.png";
import scene2 from "@assets/generated_images/don_giovanni_shaking_hands_with_the_stone_statue.png";
import scene3 from "@assets/generated_images/don_giovanni_defiant_against_the_statue.png";
import scene4 from "@assets/generated_images/don_giovanni_dragged_into_hellfire.png";

const STORYBOARD_DATA = [
  {
    id: 1,
    title: "L'Ospite di Pietra",
    subtitle: "The Stone Guest Arrives",
    image: scene1,
    quote: "Non si pasce di cibo mortale chi si pasce di cibo celeste.",
    translation: "He who feeds on celestial food does not feed on mortal food.",
    character: "Commendatore"
  },
  {
    id: 2,
    title: "Il Pegno",
    subtitle: "The Deadly Handshake",
    image: scene2,
    quote: "Dammi la mano in pegno.",
    translation: "Give me your hand as a pledge.",
    character: "Commendatore"
  },
  {
    id: 3,
    title: "Il Rifiuto",
    subtitle: "The Refusal",
    image: scene3,
    quote: "No, vecchio infatuato!",
    translation: "No, you deluded old man!",
    character: "Don Giovanni"
  },
  {
    id: 4,
    title: "La Caduta",
    subtitle: "Descent into Hell",
    image: scene4,
    quote: "Che inferno!… che terror…",
    translation: "What hell!… what terror…",
    character: "Don Giovanni"
  }
];

export default function Storyboard() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-serif-body">
      {/* Header */}
      <header className="border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur z-20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/50">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-serif-head font-bold leading-none">Visual Storyboard</h1>
              <p className="text-xs text-muted-foreground">Don Giovanni Finale</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
            <Film size={16} />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 gap-24">
          {STORYBOARD_DATA.map((scene, index) => (
            <motion.div 
              key={scene.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              {/* Image Frame */}
              <div className="w-full md:w-3/5 relative group perspective-1000">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white/10 transform transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="aspect-video bg-muted/20 relative overflow-hidden">
                    <img 
                      src={scene.image} 
                      alt={scene.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Cinematic Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-1 block">
                      Scene {scene.id}
                    </span>
                    <h3 className="text-white text-2xl font-serif-head font-bold italic">
                      {scene.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left">
                <div className="mb-6">
                  <span className="inline-block w-12 h-1 bg-primary mb-4" />
                  <h2 className="text-4xl font-serif-head font-bold mb-2 text-foreground">
                    {scene.subtitle}
                  </h2>
                </div>

                <div className="relative p-6 bg-card rounded-xl border border-border/50 shadow-sm">
                  <Music className="absolute top-4 right-4 text-primary/20 w-8 h-8" />
                  <blockquote className="mb-4">
                    <p className="text-xl font-serif-head italic text-primary mb-2">
                      "{scene.quote}"
                    </p>
                    <p className="text-sm text-muted-foreground font-serif-body">
                      {scene.translation}
                    </p>
                  </blockquote>
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground/60 text-right">
                    — {scene.character}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <Link href="/">
            <Button variant="outline" size="lg" className="font-serif-body group">
              <Music className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" />
              Return to Libretto
            </Button>
           </Link>
        </div>
      </main>
    </div>
  );
}
