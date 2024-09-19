/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  tabWidth: 2,
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx"],
};
export default config;
