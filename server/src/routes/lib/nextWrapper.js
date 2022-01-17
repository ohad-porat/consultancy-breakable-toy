/**
 * Wraps endpoints to automatically next() any errors or rejected promises
 *
 * @param {Function} routeHandler
 */
export const nextWrapper = (routeHandler) => async (req, res, next) => {
  try {
    return await routeHandler(req, res);
  } catch (error) {
    return next(error);
  }
};
