import {mutation, query} from "./_generated/server";
import {v} from "convex/values";


//add a new comment
export const addComment = mutation({
    args: {
        interviewId: v.id("interviews"),
        content: v.string(),
        rating: v.number(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) throw new Error("UnAuthorized");
        return await ctx.db.insert("Comments", {
            interviewId: args.interviewId,
            content: args.content,
            rating: args.rating,
            interviewerId: identity.subject,
        });
    },
});