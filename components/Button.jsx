export default function Button({ children, href, variant }) {
    const defaultClasses = "inline-block relative border border-foreground py-4 px-6 font-poppins text-base font-light before:absolute before:content-[''] before:bg-foreground before:left-0 before:top-0 before:w-0 before:h-full before:-z-10 before:transition-all before:duration-300 hover:before:w-full hover:text-background transition-colors duration-300";

    const inverseClasses = "inline-block relative border border-foreground py-4 px-6 font-poppins text-base font-light bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-300";

    return (
        <a
            href={href}
            className={variant === 'inverse' ? inverseClasses : defaultClasses}
        >
            {children}
        </a>
    );
}
