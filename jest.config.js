/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  transform: {
    "\\.(css|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    "<rootDir>/__mocks__/fileMock.js",
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    "^Src/(.*)": "<rootDir>/src/$1",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "swiper/css": "<rootDir>/__mocks__/fileMock.js",
    "swiper/css/pagination": "<rootDir>/__mocks__/fileMock.js",
  },
  transformIgnorePatterns: ['/node_modules/(?!swiper/react|swiper|ssr-window|dom7)'],
};
