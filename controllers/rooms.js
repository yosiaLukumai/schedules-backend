const roomModel = require("../models/room")
const createOutput = require("../utils").createOutput


const createroom = async (req, res) => {
    try {
        const {roomName, roomCapacity, level} = req.body
        console.log(roomName, roomCapacity, level)
        const saved =await roomModel.create({roomName, roomCapacity, level})
        if (saved) {
            return res.json(createOutput(true, saved))
        }
        return res.json(createOutput(true, saved))
        
    } catch (error) {
        return res.json(createOutput(false, error.message, true))
}
}

const updateRoom = async (req, res) => {
    try {
        const id = req.params.id
        const {roomName, roomCapacity, level} = req.body
        const updated = await roomModel.updateOne({_id: id}, {roomName, roomCapacity, level})
        if (updated) {
            return res.json(createOutput(true, updated))
        }
        return res.json(createOutput(false, updated))
    } catch (error) {
        return res.json()
    }
}

const getAllRooms = async (req, res) => {
    try {
        const allRooms = await roomModel.find()
        return res.json(createOutput(true, allRooms))
    } catch (error) {
        return res.json(createOutput(false, error.message, true))
    }
}


module.exports = {
    createroom,
    updateRoom,
    getAllRooms
}