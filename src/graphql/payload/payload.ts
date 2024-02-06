import { gql } from "../../__generated__/payload";

export const GET_CAROUSELS = gql(`
    query Carousels($limit: Int) {
        Carousels(limit: $limit) {
            docs {
                id
                ctaLink
                ctaTitle
                optional
                heading
                subHeading
                desktopBanner {
                    url
                    alt
                }
            }
        }
    }
`);
