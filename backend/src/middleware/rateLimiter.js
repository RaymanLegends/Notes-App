import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next ) => {
    //done per user
    try {
        const {success} = await ratelimit.limit("my-rate-limit");
        if (!success) {
            return res.status(429).json({message: "too many requests, please try again later"});
        }
        next();
    } catch (error) {
        console.log("Rate Limit Error", error);
        next(error);
    }
}

export default rateLimiter