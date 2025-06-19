const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//hey import { auth } from "../../middleware/auth.js";
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments" });
    }
});
//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const commentId = req.params.id;
        /**
         * The comment document that was deleted from the database.
         * Will contain the deleted comment object if found and deleted, or `null` if no comment was found with the given ID.
         * @type {import('mongoose').Document|null}
         */
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting comment" });
    }
});