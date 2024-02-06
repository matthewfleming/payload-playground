import { CollectionConfig } from "payload/types";

export const Carousel: CollectionConfig = {
    auth: false,
    slug: "carousel",
    admin: {
        useAsTitle: "carousel",
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: "heading",
            type: "text",
            required: true,
        },
        {
            name: "optional",
            type: "text",
            required: false,
        },
        {
            name: "subHeading",
            type: "richText",
            required: true,
        },
        {
            name: "ctaLink",
            type: "text",
            required: true,
        },
        {
            name: "ctaTitle",
            type: "textarea",
            required: true,
        },
        {
            name: "mobileBanner",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "tabletBanner",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "desktopBanner",
            type: "upload",
            relationTo: "media",
            required: true,
        },
    ],
};
