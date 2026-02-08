import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ============================================
// SUBSCRIBE
// ============================================

export const subscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    // Check if already subscribed
    const existing = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", args.email.toLowerCase()))
      .first();

    if (existing) {
      return { success: true, message: "Déjà inscrit" };
    }

    await ctx.db.insert("subscribers", {
      email: args.email.toLowerCase(),
      createdAt: Date.now(),
    });

    return { success: true, message: "Inscription réussie" };
  },
});

// ============================================
// LIST SUBSCRIBERS (Admin)
// ============================================

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("subscribers").order("desc").collect();
  },
});
