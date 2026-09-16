import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(160),
  company: z.string().trim().min(2, "Please enter your company.").max(120),
  phone: z.string().trim().max(40).optional(),
  projectType: z.string().trim().min(2, "Please choose a project type.").max(100),
  budget: z.string().trim().max(80).optional(),
  message: z.string().trim().min(20, "Please share a little more about the project.").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
