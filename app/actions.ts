"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";

export async function submitContact(_previousState: { success: boolean; error?: string }, formData: FormData) {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!parsed.success) return { success: false, error: parsed.error.issues[0]?.message ?? "Please check your details." };

  try {
    await prisma.contactMessage.create({ data: parsed.data });
    return { success: true };
  } catch (error) {
    console.error("Contact message creation failed:", error);
    return { success: false, error: "We could not send your message. Please try again or email us directly." };
  }
}
