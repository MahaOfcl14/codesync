import { defineSchema, defineTable } from 'convex/server'
import{v} from "convex/values"

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),

        image: v.optional(v.string()),
        role:v.union(v.literal("candidate"), v.literal("interviewer")), //"candidate" , "interviewer"
        clerkId: v.string(), //Why mean clear and convex 2 different things DB has no ida about userc so when new user came mean clerk wil
        //tell to db that this user is new and db will create a new user


    }).index("by_clerk_id", ["clerkId"] ),
});