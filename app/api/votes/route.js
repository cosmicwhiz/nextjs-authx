import connectToDb from "../../../utils/database.js"
import ExoUpvote from "../../../models/votes.js"

const createUpvoteCounter = async () => {
  try {
    const upvoteCounter = new ExoUpvote({
      name: "ExoUpvote",
      upvoteCount: 0
    })

    await upvoteCounter.save()
    console.log("Created upvote counter")
  } catch (err) {
    console.error(err)
  }
}

export const GET = async () => {
  try {
    await connectToDb()
    const upvoteCounter = await ExoUpvote.findOne({
      name: "ExoUpvote"
    })
    if (!upvoteCounter) {
      await createUpvoteCounter()
      return new Response(0, {status: 200})
    }
    return new Response(upvoteCounter.upvoteCount, {status: 200})
  } catch (error) {
    return new Response("Failed to get upvotes", {status: 501})
  }
}

/* for local JSON file

import fsPromises from 'fs/promises'
import path from 'path'


const folderPath = 'json/'
const fileName = 'votes.json'
const dataFilePath = path.join(process.cwd(), folderPath+fileName);

async function createFolder() {
    try {
      await fsPromises.mkdir(folderPath);
      console.log('Folder created successfully.');
    } catch (err) {
      if (err.code === 'EEXIST') {
        console.log('Folder already exists.');
      } else {
        console.error('Error creating folder:', err);
      }
    }
}
  
// Check if the folder exists and create if it doesn't
async function checkAndCreateFolder() {
    try {
      await fsPromises.access(folderPath);
    } catch (err) {
      if (err.code === 'ENOENT') {
        await createFolder();
      } else {
        console.error('Error checking folder:', err);
      }
    }
}

const createNewFile = async () => {
    console.log("Creating a new file...")
    await fsPromises.writeFile(dataFilePath, JSON.stringify({votes: 0}))
    console.log("File created with initial zero vote count")
}

const checkAndCreateFile = async () => {
    try {
        await fsPromises.access(dataFilePath)
        return true
    } catch(error) {
        if (error.code == 'ENOENT') {
            console.log("File doesn't exist")
            createNewFile()
        } else {
            console.error("Error creating new file", error)
        }
    }
}

export const GET = async() => {
    try {
        await checkAndCreateFolder()
        await checkAndCreateFile()
        const jsonData = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);
        return new Response(objectData.votes, {status: 200})
    } catch (error) {
        return new Response("Failed to get vote count", {status: 501})
    }
}
*/