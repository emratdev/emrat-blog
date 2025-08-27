 "use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import "suneditor/dist/css/suneditor.min.css";

 
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
    loading: () => <p>Loading SunEditor...</p>
});

 export const CustomSunEditor = ({...props}:Props) => {
    return (
      <div>
        <SunEditor
            setOptions={{
                minHeight: "300px",
                showPathLabel: false,
                imageUploadHeader: {
                    test: "Hello"
                },
                imageAccept: "image/png,image/jpeg,image/jpg,image/webp",
                imageUploadSizeLimit: 5 * 1024 * 1024, // 5MB
                imageMultipleFile: true,
                paragraphStyles: ["spaced", "normal", "bordered"],
                formats: ["p", "h1", "h2", "h3", "blockquote", "pre"], 
            }}/> 
      </div>
    );
 }

 interface Props 
    extends Pick<ComponentProps<typeof SunEditor>, "setOptions" | "onChange" | "defaultValue" > {
        classname?: string;
    }

 