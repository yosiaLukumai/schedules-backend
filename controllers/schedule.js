const scheduleModel = require("../models/schedule")
const createOutput = require("../utils").createOutput

const getSpecificRoomSchedule = async (req, res) => {
    try {
        let day = req.params.day
        day = day.toLocaleLowerCase()
        console.log(day, "hitted")
        const allSchedules = await scheduleModel.find({day})
        if (allSchedules) {
            return res.json(createOutput(true, allSchedules))
        }
    } catch (error) {
        return res.json(createOutput(false, error.message, true))
    }
}


const createRoomSchedule = async (req, res) => {
    try {
        const {roomId, roomName, day, teacher, codename, subjectName, classLevel, startTime, endTime} = req.body
        const saved = await scheduleModel.create({roomId, classLevel, roomName, day, teacher, codename, subjectName, startTime, endTime})
        if (saved) {
            return res.json(createOutput(true, saved))
        }
        console.log("reached");
        return res.json(createOutput(false, saved))
    } catch (error) {
        return res.json(createOutput(false, error.message, true))
    }
}



const deleteRoomSchedule = async (req, res) => {
    try {
        const scheduleId = req.params.id
        const deleted = await scheduleModel.deleteOne({id:scheduleId})
        if (deleted) {
            return res.json(createOutput(true, deleted))
        }
        return res.json(createOutput(false, deleted))
    } catch (error) {
        return res.json(createOutput(false, error.message, true))
    }
}


const getallChedules = async (req, res) => {
    try {
        const data = await scheduleModel.find()
        return res.json(createOutput(true, data))
        
    } catch (error) {
        return res.json(createOutput(false, error.message, true))
    }
}


const updateRoomSchedule = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    createRoomSchedule,
    deleteRoomSchedule,
    getSpecificRoomSchedule,
    updateRoomSchedule,
    getallChedules
}