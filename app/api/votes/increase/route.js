import connectToDb from "../../../../utils/database.js"
import ExoUpvote from "../../../../models/votes.js"

export const PATCH = async (req) => {
    try {
        const { currentVoteCount } = await req.json()
        await connectToDb()
        const upvoteCounter = await ExoUpvote.findOne({
            name: "ExoUpvote"
        })
        upvoteCounter.upvoteCount = Number(currentVoteCount)
        await upvoteCounter.save()

        return new Response(upvoteCounter.upvoteCount, {status: 200})
    } catch (error) {
        return new Response("Failed to update upvote count", {status: 501})
    }
}

/*
import fsPromises from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'json/votes.json');

const updateVoteCountJSON = async (count) => {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);
    objectData.votes += 1
    await fsPromises.writeFile(dataFilePath, JSON.stringify(objectData))
}

export const POST = async(req) => {
    try {
        const { currentVoteCount } = await req.json()
        await updateVoteCountJSON(currentVoteCount)
        return new Response("Upvoted Successfully", {status: 200})
    } catch (error) {
        return new Response("Failed to update vote count", {status: 501})
    }
}
*/