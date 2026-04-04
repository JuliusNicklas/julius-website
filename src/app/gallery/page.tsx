import GalleryImage from "./GalleryImage"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Julius' Gallery",
  description: "Beautiful pictures captured by me",
};

export default function Gallery() {
    return(
        <main className="relative min-h-screen text-foreground bg-background">
            <div className="relative py-32 px-10 gap-[10vw] flex flex-col items-center max-w-7xl mx-auto bg-background">
                <p className="p-4 border-2 rounded-md w-full">
                    All images on this page are captured by me.
                </p>
                <GalleryImage src="IMG_4050.JPG" caption="Sunset in Lisbon. October 2025"/>

                <GalleryImage src="IMG_3935.JPG" caption="Castelo dos Mouros, Sintra. October 2025"/>

                <GalleryImage src="IMG_3908.JPG" caption="Castelo dos Mouros, Sintra. October 2025"/>

                <GalleryImage src="IMG_3884.JPG" caption="Palace in Sintra. October 2025"/>
            
                <GalleryImage src="IMG_3837.JPG" caption="National Palace of Pena, Sintra. October 2025"/>

                <GalleryImage src="IMG_3720.JPG" caption="HELLO WORLD. October 2025"/>

                <GalleryImage src="IMG_3704.JPG" caption="LX Factory, Lisbon. October 2025"/>

                <GalleryImage src="IMG_3663.JPG" caption="Mural in Lisbon. October 2025"/>

                <GalleryImage src="IMG_3606.JPG" caption="Parque Eduardo VII, Lisbon. October 2025"/>

                <GalleryImage src="IMG_3497.JPG" caption="Delphinen. Fall 2025"/>

                <GalleryImage src="IMG_3494.JPG" caption="Orange maples (Fire maples). Fall 2025"/>

                <GalleryImage src="IMG_3475.JPG" caption="Orange tree. Fall 2025"/>

                <GalleryImage src="IMG_3470.JPG" caption="Another tree. Fall 2025"/>

                <GalleryImage src="IMG_3424.JPG" caption="Some LU buildning, idk. Fall 2025"/>

                <GalleryImage src="IMG_3416.JPG" caption="Biologihuset, Lund. Fall 2025"/>

                <GalleryImage src="IMG_3412.JPG" caption="Tree. Fall 2025"/>

                <GalleryImage src="IMG_3410.JPG" caption="Ingvar Kamprad Designcentrum, Lund. Fall 2025"/>

                <GalleryImage src="IMG_3407.JPG" caption="Red tree. Fall 2025"/>

                <GalleryImage src="IMG_3318.JPG" caption="Öresund bridge in the evening. 2025-08-19"/>

                <GalleryImage src="IMG_3308.JPG" caption="Scanian countryside. 2025-08-19"/>

                <GalleryImage src="IMG_3289.JPG" caption="Hotel Ideon from the bull hill. 2025-08-19"/>

                <GalleryImage src="20250819_171130.jpg" caption="MAX IV as seen from the bull hill. 2025-08-19"/>

                <GalleryImage src="IMG_3223.JPG" caption="The apple tree i planted the previous summer. Summer 2025"/>
            </div>
        </main>
    )
}