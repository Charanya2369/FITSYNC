export const sendResponse = (res, status, message, payload = null) => {
  return res.status(status).json({
    message,
    payload,
  });
};
