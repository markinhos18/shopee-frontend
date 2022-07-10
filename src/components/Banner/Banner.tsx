import Image, { StaticImageData }  from "next/image";
import { BannerContainer } from "./styles";


interface BannerProps {
    // title: string;
    // description: string;
    image: StaticImageData;
    width: number;
    height: number;
}

const Banner = ({image, width, height  }: BannerProps) => {
    return (
        <BannerContainer>
            <Image src={image} width={width} height={height} alt="Banner" />
        </BannerContainer>
    )
};


export default Banner;