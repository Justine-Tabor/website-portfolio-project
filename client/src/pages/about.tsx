import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="prose prose-lg">
        <p>
          I am a multidisciplinary creative professional with expertise in digital arts,
          photography, and innovative design solutions. My work focuses on creating
          meaningful visual experiences that communicate and inspire.
        </p>
        
        <h2>Experience</h2>
        <ul>
          <li>Over 5 years of experience in digital art and design</li>
          <li>Professional photographer specializing in portrait and landscape</li>
          <li>Multiple awards in international design competitions</li>
        </ul>
        
        <h2>Skills</h2>
        <ul>
          <li>Digital Illustration & Design</li>
          <li>Photography & Photo Editing</li>
          <li>UI/UX Design</li>
          <li>Motion Graphics</li>
        </ul>
      </div>

      <div className="mt-8">
        <Button variant="outline" size="lg">
          <FileDown className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </motion.div>
  );
}
