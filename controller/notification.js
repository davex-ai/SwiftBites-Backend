import Notification from "../model/Notification.js";

export async function createNotification(req, res) {
    try {
        const { message } = req.body;
        const notification = await Notification.create({
            user: req.user.id,
            message,
            read: false
        });
        res.status(201).json(notification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getNotifications(req, res) {
    try {
        const notifications = await Notification.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(notifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function markAsRead(req, res) {
    try {
        const { id } = req.params;
        const notification = await Notification.findByIdAndUpdate(id, { read: true }, { new: true });
        res.status(200).json(notification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
