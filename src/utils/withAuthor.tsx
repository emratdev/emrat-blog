// utils/withAuthor.tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

export function withAuthor(Component: React.ComponentType) {
  return function WrappedComponent(props: React.ComponentProps<typeof Component>) {
    const router = useRouter();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user.role !== "AUTHOR") {
        router.replace("/not-authorized");
      }
    }, []);

    return <Component {...props} />;
  };
}
