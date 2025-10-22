export const getWorkerId = () => {
  const id = Math.floor(Math.random() * 10); // simulate worker ID
  return `worker-${id}`;
};
