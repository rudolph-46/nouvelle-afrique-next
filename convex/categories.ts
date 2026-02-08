import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ============================================
// LIST CATEGORIES
// ============================================

export const list = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("categories")
      .withIndex("by_order")
      .collect();
  },
});

// ============================================
// GET BY SLUG
// ============================================

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("categories")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

// ============================================
// CREATE CATEGORY
// ============================================

export const create = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    color: v.optional(v.string()),
    sortOrder: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("categories", {
      ...args,
      isActive: true,
      createdAt: Date.now(),
    });
  },
});
