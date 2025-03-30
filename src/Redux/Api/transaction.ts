import baseApi from "./baseApi";

const transaction = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllTransaction: build.query({
            query: () => ({
                url: "/payments/transactions",
                method: "GET"
            }),
            providesTags: ["transaction"]
        })
    })
})


export const { useGetAllTransactionQuery } = transaction