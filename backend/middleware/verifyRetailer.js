export const verifyRetailer = (req, res, next) => {
  if (req.user.role !== "retailer") {
    return res.status(403).json({ message: "Retailer access only" });
  }
  next();
};
