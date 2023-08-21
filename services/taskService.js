import { httpAxios } from "@/helper/httpHelper";

export async function addTask() {
    const result = await httpAxios.get("/api/create").then((res) => res.data);
    return result;
}
export async function addChannel(channel) {
    const result = await httpAxios.post("/api/create", channel);
    return result;
}
