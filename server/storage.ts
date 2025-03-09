import { 
  type Creator, type InsertCreator,
  type Project, type InsertProject, 
  type ContactMessage, type InsertContactMessage 
} from "@shared/schema";

export interface IStorage {
  getCreators(): Promise<Creator[]>;
  getCreator(id: number): Promise<Creator | undefined>;
  createCreator(creator: InsertCreator): Promise<Creator>;
  getProjects(): Promise<Project[]>;
  getProjectsByCreator(creatorId: number): Promise<Project[]>;
  getProjectsByCategory(category: string, creatorId?: number): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private creators: Map<number, Creator>;
  private projects: Map<number, Project>;
  private messages: Map<number, ContactMessage>;
  private creatorId: number = 1;
  private projectId: number = 1;
  private messageId: number = 1;

  constructor() {
    this.creators = new Map();
    this.projects = new Map();
    this.messages = new Map();

    // Initialize with default creators
    this.createCreator({
      name: "Justine Michael M. Tabor",
      role: "Digital Artist & Photographer",
      bio: "Digital artist and photographer showcasing innovative projects and captivating photography.",
      imageUrl: "/placeholder-photo.jpg"
    });
    this.createCreator({
      name: "Second Creator",
      role: "Digital Artist",
      bio: "Creative professional specializing in digital arts and innovative design solutions.",
      imageUrl: "/placeholder-photo-2.jpg"
    });
  }

  async getCreators(): Promise<Creator[]> {
    return Array.from(this.creators.values());
  }

  async getCreator(id: number): Promise<Creator | undefined> {
    return this.creators.get(id);
  }

  async createCreator(insertCreator: InsertCreator): Promise<Creator> {
    const id = this.creatorId++;
    const creator: Creator = { ...insertCreator, id };
    this.creators.set(id, creator);
    return creator;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => a.order - b.order);
  }

  async getProjectsByCreator(creatorId: number): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.creatorId === creatorId)
      .sort((a, b) => a.order - b.order);
  }

  async getProjectsByCategory(category: string, creatorId?: number): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => 
        project.category === category && 
        (creatorId ? project.creatorId === creatorId : true)
      )
      .sort((a, b) => a.order - b.order);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.projectId++;
    const project: Project = { 
      ...insertProject, 
      id, 
      order: id 
    };
    this.projects.set(id, project);
    return project;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();