import Image from "next/image";

const imgBaseUrl = "https://julius-gallery-495624154689-eu-north-1-an.s3.eu-north-1.amazonaws.com/";
function imgUrl(name: string){ return imgBaseUrl + name} 

interface GalleryImageProps {
    src: string;
    caption: string;
}

export default function GalleryImage({src, caption}: GalleryImageProps) {
    return(
        <figure className="flex flex-col items-center border-2 rounded-md p-2 gap-2">
            <Image 
                src={imgUrl(src)}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{objectFit: "contain"}}
                className="w-auto max-w-full h-auto max-h-[85vh]"
            />
            <figcaption>
                {caption}
            </figcaption>
        </figure>
    )
} 