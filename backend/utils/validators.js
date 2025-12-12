export const validateRegister = (user) => {
  if (!user.name || !user.email || !user.password) {
    return "Name, email, and password are required";
  }
  return null;
};
export const validateMeasurementInput = (m) => {
  if (!m.chest || !m.waist || !m.hip) {
    return "Chest, waist, and hip measurements are required";
  }
  return null;
};
