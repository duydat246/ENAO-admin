import axiosClient from "./axiosClient";
export const getAllGroups = () => {
    const url = `/groups`;
    return axiosClient.get(url);
}