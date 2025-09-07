import {useQuery} from "@tanstack/react-query";
import api from "../api/api.js";

export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick"],
        queryFn: async () => {
            return await api.get(
                "/api/urls/totalclicks?startDate=2025-01-01&endDate=2025-12-31",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        select: (data) => {
            return Object.keys(data.data).map((key) => ({
                clickDate: key,
                count: data.data[key],
            }));
        },
        onError,
        staleTime: 5000,
        enabled: !!token,
    });
};

export const useFetchMyShortUrls = (token, onError) => {
    return useQuery({
        queryKey: ["my-shortenurls"],
        queryFn: async () => {
            return await api.get(
                "/api/urls/myurls",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        select: (data) => {
            console.log(data)
            return data.data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
        },
        onError,
        staleTime: 5000,
        enabled: !!token,
    });
};
