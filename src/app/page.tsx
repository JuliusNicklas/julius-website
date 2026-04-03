import Image from "next/image";
import background_image from "../../public/oresund.jpg"
import dragon_gif from "../../public/dragon-dancing.gif"

export default function Home() {
  return (
      <main className="relative min-h-screen text-foreground">

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Image 
            src={background_image}
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 py-20 px-10 flex flex-col items-center max-w-5xl mx-auto bg-background/80">
          <h1>Julius supersexy website</h1>
          
          <Image src={dragon_gif} alt="Dancing Dragon" width={400} height={400}/>

          <p>
                    Bacon ipsum dolor amet cow tempor ham officia ullamco ut id spare ribs meatloaf reprehenderit ea culpa. Nulla cillum anim, esse corned beef hamburger incididunt dolore ullamco. In nostrud non ribeye pastrami andouille dolor rump. In bresaola jerky excepteur frankfurter, biltong beef ribs alcatra ground round in spare ribs jowl non.
                </p>

                <p>
                    Tri-tip short loin adipisicing dolore laborum ball tip turducken ea ground round buffalo ham filet mignon sirloin fatback. Sed corned beef porchetta pork chop frankfurter qui leberkas id turkey ball tip. Pork loin aute laborum chislic in veniam deserunt sed nulla pariatur. Chuck beef ribs occaecat kielbasa exercitation chislic anim biltong. Swine voluptate aute, dolore consectetur laborum nostrud non do. Enim aliqua frankfurter shoulder. Turkey fugiat meatloaf ham hock, hamburger shank capicola incididunt venison quis id minim brisket sint irure.
                </p>

                <p>
                    Lorem ipsum capicola dolor in nulla sunt filet mignon sausage kevin. Shoulder quis shankle beef ribs, ut aliquip excepteur alcatra chuck hamburger anim turkey frankfurter. Nisi spare ribs velit officia, porchetta excepteur ut sausage chuck. Aliqua adipisicing bacon ut est pork meatloaf pariatur eiusmod ullamco kielbasa landjaeger nostrud. Salami shankle t-bone deserunt culpa porchetta biltong sausage hamburger turkey.
                </p>
        </div>
        
      </main>
  );
}
