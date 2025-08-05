
import User from "../models/User.js";

export const updateCart = async (req, res) => {
    try {
        const { cartItems } = req.body;
        const userId = req.user._id;

        if (!userId || typeof cartItems != 'object') {
            return res.json({ success: false, message: "Invalid user or cart data" });
        }

        console.log("Updating cart for user:", userId);
        console.log("Cart items:", cartItems);

        await User.findByIdAndUpdate(userId, { cartItems });

        res.json({ success: true, message: "Cart updated successfully" });
    } catch (error) {
        console.error("Cart update error:", error.message);
        res.json({ success: false, message: "Server error: " + error.message });
    }
};
