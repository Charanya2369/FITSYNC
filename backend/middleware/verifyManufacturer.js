export const verifyManufacturer = (req, res, next) => {
  if (req.user.role !== "manufacturer") {
    return res.status(403).json({ message: "Manufacturer access only" });
  }
  next();
};
