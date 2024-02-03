import Image from "next/image";

export default function Avatar({src, size, alt, className, ...props}: {src: string, size: number, alt: string, [key: string]: any}) {
    return (
        <Image src={src} width={size} height={size} alt={alt} {...props} className={"aspect-square rounded-full " + className} />
    );
};