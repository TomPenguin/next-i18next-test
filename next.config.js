import nextI18NextConfig from "./next-i18next.config.cjs";

export default {
    i18n: nextI18NextConfig.i18n,
    experimental: {
        newNextLinkBehavior: true,
    },
    transpilePackages: [
        "@refinedev/antd",
        "@refinedev/inferencer",
        "antd",
        "@ant-design/pro-components",
        "@ant-design/pro-layout",
        "@ant-design/pro-utils",
        "@ant-design/pro-provider",
        "rc-pagination",
        "rc-picker",
    ],
};
