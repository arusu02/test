import { SCRIPT_DATA } from "@/data/don-giovanni";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Music, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/baroque_opera_stage_with_red_curtains.png";

export default function Libretto() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-serif-body">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-serif-head font-bold text-white mb-4 drop-shadow-lg tracking-tight">
              Don Giovanni
            </h1>
            <div className="flex items-center justify-center gap-3 text-white/90 mb-6">
              <span className="h-px w-12 bg-white/50"></span>
              <span className="uppercase tracking-[0.2em] text-sm font-bold">Finale</span>
              <span className="h-px w-12 bg-white/50"></span>
            </div>
            <p className="text-lg text-white/80 max-w-lg mx-auto font-serif-body italic leading-relaxed">
              "Pentiti, cangia vita: è l'ultimo momento!"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Header (Sticky below hero) */}
      <header className="border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20 transition-all">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
              <Music size={16} />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-sm font-serif-head font-bold leading-none">W.A. Mozart</h2>
              <p className="text-xs text-muted-foreground">Libretto by Lorenzo Da Ponte</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex hover:bg-accent/50">
              <BookOpen className="mr-2 w-4 h-4" />
              About
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
              <Download className="mr-2 w-4 h-4" />
              PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Script Table Header */}
        <div className="sticky top-16 z-10 bg-background pb-4 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 px-4 md:px-8 border-b border-border/60">
          <div className="hidden md:block text-center">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary/80 py-2">Testo Originale</h3>
          </div>
          <div className="hidden md:block text-center">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground/80 py-2">Traduzione Italiana</h3>
          </div>
        </div>

        <div className="space-y-12 md:space-y-0">
          {SCRIPT_DATA.map((line, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4 md:px-8 py-6 rounded-xl hover:bg-accent/30 transition-all duration-300 border border-transparent hover:border-border/40"
            >
              {/* Original Text */}
              <div className="relative">
                {line.character && !line.stageDirection && (
                  <span className="block font-serif-head font-bold text-primary text-sm mb-2 tracking-wider uppercase">
                    {line.character}
                  </span>
                )}
                {line.stageDirection ? (
                  <div className="text-base italic text-muted-foreground/80 bg-accent/20 p-5 rounded-lg border border-border/30 shadow-sm">
                     <span className="block font-bold text-[10px] uppercase tracking-widest mb-2 text-primary/60 not-italic">Scena</span>
                     {line.original}
                  </div>
                ) : (
                  <div className="text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line font-medium">
                    {line.original}
                  </div>
                )}
              </div>

              {/* Translation */}
              <div className="relative flex flex-col justify-start">
                {/* Mobile Header for Translation */}
                <div className="md:hidden text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 mb-1 mt-2">
                  Traduzione
                </div>
                
                {line.character && !line.stageDirection && (
                  <span className="hidden md:block font-serif-head font-bold text-muted-foreground/40 text-sm mb-2 tracking-wider uppercase select-none">
                    {line.character}
                  </span>
                )}
                
                {line.stageDirection ? (
                  <div className="text-base italic text-muted-foreground/70 p-2 md:p-5">
                     {line.translation}
                  </div>
                ) : (
                   <div className="text-lg md:text-xl leading-relaxed text-muted-foreground whitespace-pre-line group-hover:text-foreground/80 transition-colors duration-300">
                    {line.translation}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center pb-12">
          <div className="flex justify-center items-center gap-4 mb-8">
             <Separator className="w-16 bg-primary/30" />
             <div className="w-2 h-2 rounded-full bg-primary/50"></div>
             <Separator className="w-16 bg-primary/30" />
          </div>
          <p className="font-serif-head font-bold text-2xl text-foreground mb-2">
            Fine dell'Opera
          </p>
          <p className="font-serif-body italic text-muted-foreground">
            Il dissoluto punito, ossia il Don Giovanni
          </p>
        </div>
      </main>
    </div>
  );
}
