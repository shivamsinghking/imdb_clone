export const sendErrorResponse = (res, message, err_code = 422) => {
  return res.status(err_code).send({errMsg: message});
}

export const sendSuccessResponse = (res, message) => {
  return res.status(200).send(message);
}