const jsonErrorHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.message.includes('JSON')) {
    return res.status(400).json({ error: 'Formato JSON inválido.' });
  }
  next(err);
};

export default jsonErrorHandler;
