export const isEmail = (email: string) =>
  email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) !== null
