import { instagramData } from "@/defaults/instagram.data";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const Instagram = () => {
    return (
      <div className="space-y-10">
        <h3 className="border py-5 text-center text-2xl font-bold">
          Instagram
        </h3>
        <div className="grid grid-cols-2 gap-5">
          {instagramData.map((item) => (
            <div key={item.id} className="">
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden"
              >
                <Image className="w-full h-full" src={item.img} alt={item.link as string} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}