import { Post } from "../models/postModel.js"

export const posts = async (req, res) => {
  try{

  const posts = await Post.find();
  if (!posts ) {
    return res.status(400).json({ success: false, message: "Posts not found"});
  }
  res.status(200).json({ success: true, posts });
  } catch (error) {
    res.status(400).json({success:false, message: error.message });
  }
}