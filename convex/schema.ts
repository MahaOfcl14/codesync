import { defineSchema, defineTable } from 'convex/server'
import{v} from "convex/values"
import { title } from 'process';

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),

        image: v.optional(v.string()),
        role:v.union(v.literal("candidate"), v.literal("interviewer")), //"candidate" , "interviewer"
        clerkId: v.string(), //Why mean clear and convex 2 different things DB has no ida about userc so when new user came mean clerk wil
        //tell to db that this user is new and db will create a new user


    }).index("by_clerk_id", ["clerkId"] ),

    interviews: defineTable({
        title:v.string(),
        description: v.optional(v.string()),
        startTime: v.number(),
        endTime: v.optional(v.number()), // 30 mins 45 mins
        status: v.string(),
        streamCallId:v.string(),
        candidateId: v.string(),
        interviewerIds: v.array(v.string()),


    })
    .index("by_candidate_id", ["candidateId"])
    .index("by_stream_call_id", ["streamCallId"]),

    Comments : defineTable({
        content: v.string(),
        rating: v.number(),
        interviewerId: v.string(),
        interviewId: v.id("interviews"),
 })
 .index("by_interview_id", ["interviewId"]),

});

//https://brief-egret-99.clerk.accounts.dev