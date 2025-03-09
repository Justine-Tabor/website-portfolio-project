import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Creator } from "@shared/schema";

export default function Home() {
  const { data: creators } = useQuery<Creator[]>({
    queryKey: ["/api/creators"],
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      {creators?.map((creator, index) => (
        <motion.div
          key={creator.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-muted mb-6 mx-auto">
                <img
                  src={creator.imageUrl || "/placeholder-photo.jpg"}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {creator.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                {creator.role}
              </p>
              <p className="text-muted-foreground mb-8">
                {creator.bio}
              </p>
              <Link href={`/projects?creator=${creator.id}`}>
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          {index < creators.length - 1 && (
            <div className="border-t my-16 max-w-xs mx-auto" />
          )}
        </motion.div>
      ))}
    </div>
  );
}