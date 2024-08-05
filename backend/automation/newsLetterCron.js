import cron from "node-cron";
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js";
import { sendEmail } from "../utils/sendEmail.js"


export const newsLetterCron = () => {
    cron.schedule("*/1 * * * *", async () => {
        console.log("Running Cron Automation")
        const jobs = await Job.find({ newsLettersSent: false });
        for (const job of jobs) {
            try {
                const filteredUsers = await User.find({
                    $or: [
                        { "niches.firstNiche": job.jobNiche },
                        { "niches.secondNiche": job.jobNiche },
                        { "niches.thirdNiche": job.jobNiche },
                    ]
                })
                for (const user of filteredUsers) {
                    const subject = `Hot Job Alert:${job.title} in ${job.jobNiche} Available Now`;
                    const message = `Hi ${user.name},\n\nGreat news! A new job that fits your niche has just been posted. the position is for a ${job.title} with ${job.companyName}, and they are looking to hire immediartely. \n\nJob Details:\n- **Position:** ${job.title}\n- **Company:** ${job.companyName}\n- **location:** ${job.location}\n- **Salary:** ${job.salary}\n\n Don't wait too long! job openings like these are filled quickly. \n\n we're here to support you in your job search. Best of lick!\n\n Best Regards, \nRajiv and Tems,`;
                    sendEmail({
                        email: user.email,
                        subject,
                        message
                    })
                }
                job.newsLettersSent = true;
                await job.save();
            } catch (error) {
                console.log("Error in node cron catch block");
                return next(console.error(error || "Some error in cron."));
            }
        }
    });
}