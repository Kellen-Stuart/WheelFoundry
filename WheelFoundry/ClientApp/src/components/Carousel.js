import React, { Component } from 'react';
import {
    Carousel,
    CarouselControl,
    CarouselItem,
    CarouselIndicators, CarouselCaption
} from 'reactstrap';

export class Carousel extends Component {
    render() {
        return (
            <Carousel 
                activeIndex={0} 
                next={function noRefCheck(){}} 
                previous={function noRefCheck(){}}
            >
                <CarouselIndicators
                    activeIndex={0}
                    items={[
                        {
                            altText: 'Slide 1',
                            caption: 'Slide 1',
                            key: 1,
                            src: 'https://cdn.shopify.com/s/files/1/0904/4132/files/Industry_Nine_System_Wheel_Review-1344696_1024x1024.jpg?v=1597171817'
                        },
                        {
                            altText: 'Slide 2',
                            caption: 'Slide 2',
                            key: 2,
                            src: 'https://cdn.shopify.com/s/files/1/0904/4132/files/Purp_1024x1024.jpg?v=1597171889'
                        },
                        {
                            altText: 'Slide 3',
                            caption: 'Slide 3',
                            key: 3,
                            src: 'https://cdn.shopify.com/s/files/1/0904/4132/files/FanatikCustomTransitionSentinelV2_1024x1024.jpg?v=1597172116'
                        }
                    ]}
                    onClickHandler={function noRefCheck(){}}
                />
                    <CarouselItem
                        onExited={function noRefCheck(){}}
                        onExiting={function noRefCheck(){}}
                    >
                        <img
                            alt="Slide 1"
                            src="https://cdn.shopify.com/s/files/1/0904/4132/files/Industry_Nine_System_Wheel_Review-1344696_1024x1024.jpg?v=1597171817"
                        />
                        <CarouselCaption
                            captionHeader="Slide 1"
                            captionText="Slide 1"
                        />
                    </CarouselItem>
                    <CarouselItem
                        onExited={function noRefCheck(){}}
                        onExiting={function noRefCheck(){}}
                    >
                        <img
                            alt="Slide 2"
                            src="https://cdn.shopify.com/s/files/1/0904/4132/files/Purp_1024x1024.jpg?v=1597171889"
                        />
                        <CarouselCaption
                            captionHeader="Slide 2"
                            captionText="Slide 2"
                        />
                    </CarouselItem>
                    <CarouselItem
                        onExited={function noRefCheck(){}}
                        onExiting={function noRefCheck(){}}
                    >
                        <img
                            alt="Slide 3"
                            src="https://cdn.shopify.com/s/files/1/0904/4132/files/Purp_1024x1024.jpg?v=1597171889"
                        />
                        <CarouselCaption
                            captionHeader="Slide 3"
                            captionText="Slide 3"
                        />
                    </CarouselItem>
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={function noRefCheck(){}}
                />
            </Carousel>
        )
    }
}