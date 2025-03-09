import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const creators = pgTable("creators", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("imageUrl"),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  creatorId: serial("creator_id").references(() => creators.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  imageUrl: text("imageUrl").notNull(),
  link: text("link"),
  order: serial("order"),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  creatorId: serial("creator_id").references(() => creators.id),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCreatorSchema = createInsertSchema(creators).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ 
  id: true,
  order: true 
});
export const contactMessageSchema = createInsertSchema(contactMessages).omit({ 
  id: true,
  createdAt: true 
});

export type Creator = typeof creators.$inferSelect;
export type InsertCreator = z.infer<typeof insertCreatorSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof contactMessageSchema>;

export const CATEGORIES = ["Digital Arts", "Photography", "Innovation"] as const;
export const CREATORS = ["Justine Michael M. Tabor", "Second Creator"] as const;