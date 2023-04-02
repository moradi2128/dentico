
import React from 'react'
import { PageWrapper } from 'src/context/page';
import BackToTop from '../BackToTop/BackToTop';
import { BlockRenderer } from '../BlockRenderer';
import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';

const Page = (props) => {
    return (
        <PageWrapper value={{ title: props.title, featuredImage: props.featuredImage, latestComments: props?.latestComments || null }}>
            <BackToTop />
            <MainMenu
                logo={props.logo}
                mainMenu={props.mainMenuItems}
                callToActionLabel={props.callToActionLabel}
                callToActionDestination={props.callToActionDestination} />
            <BlockRenderer blocks={props.blocks} />
            <Footer footer={props.footer} logo={props.logo} />
        </PageWrapper>
    )
}

export default Page
