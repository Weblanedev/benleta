import * as React from "react";
import toast from "react-hot-toast";
export interface IUseCustomToast2Props {}

export function UseCustomToast() {
    const toaster = (text: string, emoji?: string | "success" | "error", className?: string) =>
        toast(text, {
            duration: 4000,
            position: "top-center",

            // Styling
            style: {},
            className: `${
                className ? className : "bg-blue-950 text-white font-lato font-bold"
            }  font-general`,

            // Custom Icon
            icon: emoji == "success" ? "✅" : emoji == "error" ? "🚫" : emoji,

            // Change colors of success/error/loading icon
            iconTheme: {
                primary: "#fff",
                secondary: "#fff"
            },

            // Aria
            ariaProps: {
                role: "status",
                "aria-live": "polite"
            }
        });
    return { toaster };
}