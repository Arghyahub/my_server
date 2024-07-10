import { Router } from "express";
import { EmailModel } from "../db/model";

const router = Router();

router.post("/subscribe", async (req, res) => {
  try {
    const { email }: { email: string } = req.body;
    if (!email || email.length < 0) {
      return res.status(400).json({ msg: "Invalid email" });
    }

    // check email valid using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ msg: "Invalid email" });
    }

    const emailExists = await EmailModel.findOne({ email });

    if (emailExists) {
      return res.status(400).json({ msg: "Email already subscribed" });
    }

    const newEmail = new EmailModel({ email });
    await newEmail.save();

    return res.status(200).json({ msg: "Subscribed successfully" });
  } catch (error) {
    console.log("==/blog/subscribe==", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
