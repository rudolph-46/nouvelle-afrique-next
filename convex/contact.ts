import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ============================================
// SEND MESSAGE
// ============================================

export const send = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("contactMessages", {
      ...args,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});

// ============================================
// LIST MESSAGES (Admin)
// ============================================

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("contactMessages").order("desc").collect();
  },
});
