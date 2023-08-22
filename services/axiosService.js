// import { httpAxios } from "@/helper/httpHelper";
import axios from 'axios';

const httpAxios = axios.create({
    baseURL: process.env.BASE_URL
})
export async function addChannel(channel) {
    const response = await httpAxios.post("/api/createChannel", channel);
    return response;
}
export async function getChannel(channelId) {
    console.log(channelId.creator);
    const response = await httpAxios.get(`/api/getChannel/${channelId.creator}`);
    return response;
}
export async function addCourse(course) {
    const response = await httpAxios.post("/api/createCourse", course);
    return response;
}