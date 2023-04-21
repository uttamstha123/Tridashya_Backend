const router = require("express").Router();
const {
  postBlog,
  updateBlog,
  getBlog,
  getBlogs,
  deleteBlog,
} = require("../controller/blogController");

router.post("/", postBlog);
router.put("/:id", updateBlog);
router.get("/", getBlogs);
router.get("/:id", getBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
