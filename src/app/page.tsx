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
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 py-24 px-10 flex flex-col items-center max-w-5xl mx-auto bg-background/70 backdrop-blur-sm">
          <h1>Julius' supersexy website</h1>
          <Image src={dragon_gif} alt="Dancing Dragon" width={400} height={400}/>
          <p>Bacon ipsum dolor amet in consequat strip steak salami, spare ribs short ribs meatball ullamco elit. Reprehenderit ut doner culpa excepteur ad enim aute biltong swine porchetta elit ex. Ground round nulla voluptate shankle. Bresaola in commodo irure sed consequat cupidatat ball tip officia buffalo salami ground round pork loin non. Bacon ad in bresaola cow quis tail tri-tip. In strip steak chislic porchetta pork belly pancetta tongue.</p>
          <p>Nisi porchetta deserunt mollit qui pork id pastrami laborum aliqua. Bresaola laborum occaecat sed tenderloin reprehenderit cow filet mignon do ut beef ribs jerky ham. Bacon magna lorem sint, cupidatat pariatur eiusmod nostrud ad ribeye fatback burgdoggen capicola. Ea filet mignon pariatur, swine non bresaola pork beef pancetta tenderloin chicken consequat biltong doner. Chuck mollit tongue officia, shank ribeye pastrami lorem hamburger occaecat picanha pig meatloaf. Kielbasa cupim et drumstick officia ut t-bone quis rump ut.</p>
          <p>Shank corned beef swine do, beef veniam est officia in burgdoggen occaecat sausage elit ham. Dolore kevin jowl corned beef in. Adipisicing jowl cupim pig burgdoggen dolore tri-tip proident dolor in bacon beef ribs in reprehenderit. Reprehenderit turducken laboris, tail officia et jowl. Beef ribs commodo dolore, ullamco ut deserunt ipsum excepteur brisket kielbasa lorem reprehenderit nulla consequat. Pastrami reprehenderit ham hock landjaeger.</p>
          <p>Buffalo t-bone beef ribs anim occaecat aliqua swine. Velit jerky aute aliquip turkey chislic tenderloin beef id. Chislic tongue jowl magna pancetta shoulder, veniam labore. Spare ribs picanha drumstick kielbasa, magna rump ham hock aute tri-tip dolore. Prosciutto dolor ullamco alcatra id ball tip brisket aliqua ribeye capicola chislic strip steak venison. Ipsum pancetta kielbasa, sunt occaecat pork sausage cillum filet mignon exercitation spare ribs turducken ut consectetur aliqua. Bresaola dolor venison aliqua et.</p>
          <p>Meatball reprehenderit venison sausage pastrami incididunt. Drumstick eiusmod anim, sint shank esse leberkas ex spare ribs prosciutto short ribs fatback. Pastrami cillum chicken swine beef ribs. Velit ball tip incididunt tri-tip anim, pork chop aliquip ut non venison. Alcatra doner cupim ex, exercitation shank non est buffalo frankfurter voluptate lorem aute ut cow. Shank doner drumstick deserunt, sed andouille esse shankle consequat filet mignon spare ribs occaecat.</p>
          <p>Dolor ham hock jerky, nisi proident est tempor pork belly aute pork chop magna ball tip. Beef elit in ribeye, chicken irure bacon drumstick eu landjaeger. Occaecat laboris nostrud ad venison aute. T-bone buffalo veniam sed, filet mignon ad est laboris ham.</p>
        </div>
        
      </main>
  );
}
