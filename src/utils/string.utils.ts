export const stringUtils = {
  toUpperCase: <T extends string>(value: T) =>
    value.toUpperCase() as Uppercase<T>,
};
