import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express) {
  app.get("/api/creators", async (_req, res) => {
    const creators = await storage.getCreators();
    res.json(creators);
  });

  app.get("/api/creators/:id", async (req, res) => {
    const creator = await storage.getCreator(parseInt(req.params.id));
    if (!creator) {
      res.status(404).json({ message: "Creator not found" });
      return;
    }
    res.json(creator);
  });

  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get("/api/creators/:creatorId/projects", async (req, res) => {
    const projects = await storage.getProjectsByCreator(parseInt(req.params.creatorId));
    res.json(projects);
  });

  app.get("/api/creators/:creatorId/projects/:category", async (req, res) => {
    const projects = await storage.getProjectsByCategory(
      req.params.category,
      parseInt(req.params.creatorId)
    );
    res.json(projects);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = contactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      res.json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  return createServer(app);
}