import { useEffect, useRef, useState } from 'react';

import * as Wheel from '../../utils/wheel';
import Card from '../Card';

type TWorkProps = {
    description: string;
    iconHeight?: number;
    id: string;
    link?: string;
    logoUrl: string;
    name: string;
    organColor?: string;
    organs: string[];
    thumbnails: Array<{ imageUrl: string; offsetY: number; rateY: number }>;
    title: string;
} & typeof defaultProps;

const defaultProps = {
    iconHeight: 30,
    link: '',
    organColor: '',
};

function Work({
    description,
    iconHeight,
    id,
    link,
    logoUrl,
    name,
    organColor,
    organs,
    thumbnails,
    title,
}: TWorkProps) {
    const sectionElement = useRef<HTMLElement | null>(null);
    const [thumbnailOffsetsY, setThumbnailOffsetsY] = useState(
        thumbnails.map(({ offsetY }) => offsetY)
    );

    const thumbnailBackgroundImage = thumbnails
        .map(({ imageUrl }) => `url(${imageUrl})`)
        .join(', ');
    const thumbnailBackgroundPositionY = thumbnailOffsetsY
        .map((offsetY) => `${offsetY}px`)
        .join(', ');

    const handleWheeled = () => {
        let currentOffsetY = 0;

        if (sectionElement.current && window.innerWidth > 1024) {
            const isAbove =
                window.scrollY <
                sectionElement.current.offsetTop - window.innerHeight;
            const isBelow =
                window.scrollY >
                sectionElement.current.offsetTop +
                    sectionElement.current.clientHeight;

            if (isAbove || isBelow) return;
            currentOffsetY = -(
                window.scrollY - sectionElement.current.offsetTop
            );
        }

        setThumbnailOffsetsY(
            thumbnails.map(
                (_, index) =>
                    currentOffsetY / thumbnails[index].rateY +
                    thumbnailOffsetsY[index]
            )
        );
    };

    useEffect(() => {
        handleWheeled();
        Wheel.add(handleWheeled);
    }, []);

    return (
        <section
            id={id}
            ref={sectionElement}
            style={{
                backgroundImage: thumbnailBackgroundImage,
                backgroundPositionY: thumbnailBackgroundPositionY,
            }}
        >
            <Card
                icon={logoUrl}
                iconAlt={`${name}-logo`}
                iconHeight={iconHeight}
                link={link}
                organColor={organColor}
                organs={organs}
                title={title}
            >
                {description}
            </Card>
        </section>
    );
}

Work.defaultProps = defaultProps;

export default Work;
