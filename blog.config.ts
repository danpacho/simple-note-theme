import type { NoteBackgroundProps } from "@components/_layout/NoteBackground"
import type { ContactPlatformType } from "@core/contact"

import getAuthorContactHref from "@core/contact"

const author = {
    name: "myname",
    introduce: "Introduce yourself",
    faviconUrl: "/favicon.ico",
    bannerImageUrl: "/banner.png",
    contacts: {
        // ✅ DO NOT REMOVE EMAIL, for rss
        email: getAuthorContactHref("email", "your_email"),
        github: getAuthorContactHref("github", "github_id"),
        youtube: getAuthorContactHref("youtube", "youtube_id"),
        facebook: getAuthorContactHref("facebook", "facebook_id"),
        linkedin: getAuthorContactHref("linkedin", "linkedin_id"),
        twitter: getAuthorContactHref("twitter", "twitter_id"),
    } as { [key in ContactPlatformType]?: string },
} as const

const blog = {
    url: "your DEPLOY URL",
    siteName: "your site name",
    subtitle: "your site subtitle",
    copyright: `${
        author.name
    }© All rights reserved ${new Date().getFullYear()}.`,
    language: "ko",
    googleAnalyticsID: "DISABLED", // default to "DISABLED"
} as const

const noteStyle: NoteBackgroundProps = {
    // ✅ note background option
    rectWidth: 150,
    rectHeight: 150,
}

const config = {
    blogContentsDirectoryName: "blog", // blog contents directory name
    useKatex: false, // katex option
    postPerCategoryPage: 4,
    numberOfLatestPost: 4,
    numberOfMainPageCategory: 5,
    themeColor: "#73d1d7",
    postControllerText: {
        first: (category: string) => `Return to ${category}`, // first post ➡️ no prev post, so replace with your text
        last: (category: string) => `Last post of ${category}`, // last post ➡️ no next post, so replace with your text
    },
    navigationMenu: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Category",
            path: "/category",
        },
        {
            name: "Profile",
            path: "/profile",
        },
    ],
    author,
    noteStyle,
    ...blog,
} as const

export type BlogInfoType = typeof blog
export type AuthorInfoType = typeof author
export type ConfigType = typeof config

export { config }
