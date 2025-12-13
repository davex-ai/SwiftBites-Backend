import mongoose from "mongoose"

const notificationSchema = mongoose.Schema({
    message: {required: true, type: String },
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    read: {type: Boolean}
}, {timestamps: true})

const Notification = mongoose.model("Notification", notificationSchema)
export default Notification;