"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import * as z from "zod";

const SetupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  configKey: z.string().min(1),
});

export const setupAdmin = async (values: z.infer<typeof SetupSchema>) => {
  const validatedFields = SetupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password, configKey } = validatedFields.data;

  if (configKey !== process.env.CONFIG_KEY) {
    return { error: "Invalid config key!" };
  }

  const existingUsers = await db.user.count();

  if (existingUsers > 0) {
    return { error: "Setup already completed!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roles: {
          connect: { name: "ADMIN" },
        },
        emailVerified: new Date(),
      },
    });

    return { success: "Admin account created!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
