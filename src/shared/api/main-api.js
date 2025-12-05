import instance from "./instance";

export const getPosts = async () => {
  const { data } = await instance.get("/main");
  return data;
};
