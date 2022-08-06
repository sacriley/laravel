import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue2";
import fs from "fs";
import path from "path";

const getAllFiles = (directory): string[] => {
    const paths: string[] = [];
    const throughDirectory = (directoryOrFile) => {
        fs.readdirSync(directoryOrFile).forEach((File) => {
            const absolute = path.join(directoryOrFile, File);
            if (fs.statSync(absolute).isDirectory())
                return throughDirectory(absolute);
            else return paths.push(absolute);
        });
    };

    throughDirectory(directory);

    return paths;
};

export default defineConfig({
    server: {
        hmr: {
            host: "localhost",
        },
        port: 3000,
        host: "workspace",
    },
    plugins: [
        laravel({
            input: getAllFiles("resources/js/controllers"),
            refresh: true,
        }),
        vue({
            // isProduction: false,
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
