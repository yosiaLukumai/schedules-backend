const router = require("express").Router()
const scheduleController = require("../controllers/schedule")

const panelRoutes = (app) => {
    router.post("/room/schedule", scheduleController.createRoomSchedule)
    router.get("/roomname/:day", scheduleController.getSpecificRoomSchedule)
    router.delete("/delete/:room", scheduleController.deleteRoomSchedule)
    router.patch("/post/:room/", scheduleController.updateRoomSchedule)
    router.get("/all", scheduleController.getallChedules)
    return app.use("/api", router)
}

module.exports = {
    panelRoutes
}