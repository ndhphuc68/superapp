import axiosInstance from "../axios";

export const getListUserMessage = async (username) => {
  try {
    const res = await axiosInstance.get(
      `/message/listUser?username=${username}`
    );
    return res.data;
  } catch (error) {
    return false;
  }
};

export const getListMessage = async (data) => {
  try {
    const res = await axiosInstance.post(`/message/getList`, data);
    return res.data;
  } catch (error) {
    return false;
  }
};
