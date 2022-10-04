export const isEmailValid = (email: string) => (
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
);

export const isPasswordValid = (password: string) => (
  password.trim().length >= 6
);
