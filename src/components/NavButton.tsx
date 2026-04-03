import Link from 'next/link';

interface NavButtonProps {
  href: string;
  text: string;
}

export default function NavButton({ href, text }: NavButtonProps) {
    return( 
    <Link 
        href={href} 
        className="bg-background text-foreground hover:text-accent active:bg-foreground active:text-background p-2 rounded transition-all duration-75"
    >
        {text}
    </Link>
    )
}