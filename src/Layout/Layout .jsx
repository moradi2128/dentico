import React from 'react'
import BackToTop from '../components/BackToTop/BackToTop'
import Footer from '../components/Footer/Footer'
import MainMenu from '../components/MainMenu/MainMenu'
import { mainMaenuItems } from '../utils/mapMainMenuItems'

const Layout = ({ menuData, children }) => {
    if (!menuData) {
        return <p>loading...</p>
    }
    return (
        <body  >
            <BackToTop />
            <MainMenu
                logo={menuData.acfOptionsMainMenu.logo.logo.sourceUrl || null}
                mainMenu={mainMaenuItems(menuData.acfOptionsMainMenu.mainMenu.menuItems)}
                callToActionLabel={menuData.acfOptionsMainMenu.mainMenu.callToActionButton.label}
                callToActionDestination={menuData.acfOptionsMainMenu.mainMenu.callToActionButton.destinatio?.uri || null} />
            {/* === body === */}
            <div className='overflow-x-hidden'>
                {children}
            </div>
            {/* === footer */}
            {menuData.getFooter && <Footer footer={menuData.getFooter} logo={menuData.acfOptionsMainMenu.logo.logo.sourceUrl || null} />}
        </body>
    )
}

export default Layout 