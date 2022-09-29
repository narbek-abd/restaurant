declare module "*.jpg" {
  export default "" as string;
}

declare module "*.png" {
  export default "" as string;
}

declare module "*.css";
declare module "*.scss";


declare module "*.svg" {
  const content: any;
  export default content;
}
