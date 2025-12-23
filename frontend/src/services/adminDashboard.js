import api from "./api";

export const getAdminStats = () => {
    return api.get("/admin/dashboard/stats/");
};