import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to get in touch with me using the form or contact details below.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center p-4">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span>contact@example.com</span>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-4">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-4">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <span>San Francisco, CA</span>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
