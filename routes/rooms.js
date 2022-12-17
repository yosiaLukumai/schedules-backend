const router = require("express").Router()
const roomController = require("../controllers/rooms")

const roomRoutes = (app) => {
    router.post("/createroom", roomController.createroom)
    router.patch("/:id", roomController.updateRoom)
    router.get("/allRooms", roomController.getAllRooms)
    return app.use("/api", router)
}

module.exports = {
    roomRoutes
}