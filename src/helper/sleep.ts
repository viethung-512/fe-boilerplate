export const sleep = (timeout: number = 300): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};
