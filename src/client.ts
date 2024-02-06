import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GET_CAROUSELS } from "./graphql/payload/payload";

const payloadHttpLink = createHttpLink({
    uri: "http://localhost:3020/api/graphql",
});

const payloadAuthLink = setContext((_, { headers }) => {
    const token = "__token_here__";
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const payloadClient = new ApolloClient({
    link: payloadAuthLink.concat(payloadHttpLink),
    cache: new InMemoryCache(),
});

async function fetchCarousels() {
    const result = await payloadClient.query({ query: GET_CAROUSELS });

    const carousels = result.data.Carousels?.docs;
}
