import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import cleanDeep from "clean-deep";

export const updateUser = async (req, res) => {
  console.log(req.body);

  if (!(req.body.userId === req.params.id || req.body.isAdmin)) {
    res.status(403).json("You can only update your own account");
  }

  // if user tries to update password, generate a new one
  if (req.body.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: cleanDeep(req.body),
    });
    res.status(200).json("Account updated");
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can only delete your own account");
  }
};

export const getUser = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try {
    // find by either id or username
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.following.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
      res.status(200).json(friendList);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const followUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("You already follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can't follow yourself");
  }
};

export const unfollowUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("User unfollowed");
      } else {
        res.status(403).json("You don't follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can't unfollow yourself");
  }
};
