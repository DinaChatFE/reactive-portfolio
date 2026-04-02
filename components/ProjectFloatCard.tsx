import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectFloatCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  align?: "left" | "right";
}

export function ProjectFloatCard({ title, description, imageUrl, tags, align = "right" }: ProjectFloatCardProps) {
  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto py-12 ${align === "left" ? "md:flex-row-reverse" : ""}`}>
      {/* Text Container */}
      <Card className="z-10 relative md:w-1/2 bg-surface-container-low border-0 shadow-lg p-8 md:p-12 md:-mx-8 rounded-md mt-8 md:mt-0 backdrop-blur-md glass-card">
        <CardContent className="p-0 flex flex-col gap-6">
          <div className="space-y-4">
            <h3 className="font-display text-4xl md:text-5xl tracking-tight text-foreground font-semibold">{title}</h3>
            <p className="font-sans text-lg text-muted-foreground">{description}</p>
          </div>
          {tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <div key={tag} className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-sans tracking-wider uppercase font-semibold">
                  {tag}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Image Container (Overlaps the card) */}
      <div className="relative w-full md:w-2/3 h-[400px] md:h-[600px] z-0 rounded-[1.5rem] overflow-hidden shadow-[0_4px_40px_rgba(251,248,252,0.05)]">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
      </div>
    </div>
  );
}