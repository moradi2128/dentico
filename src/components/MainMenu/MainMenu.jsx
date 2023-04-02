
import Link from 'next/link'
// import ButtonLink from '../ButtonLink/ButtonLink'
// import { Bars4Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
// import SocialMedia from '../SocialMedia/SocialMedia'

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import IocnButton from 'src/subComponents/IocnButton/IocnButton'
import Logo from '../Logo/Logo'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const MainMenu = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const { mainMenu,
        logo,
        callToActionLabel,
        callToActionDestination } = props;
    const renderLink = (label, destination = null) => {
        if (destination) {
            return <Link href={destination}>
                <a className="block text-lg text-gray-400 hover:text-secondary transition-all p-4">
                    {label}
                </a>
            </Link>
        }
        return <div className='text-lg text-gray-400 hover:text-secondary transition-all p-4'>{label}</div>
    }
    //   === scroll handler ===
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })
    return (
        <header className={`backdrop-blur-2xl top-0 z-20 transition-all duration-500 sticky ${visible ? 'translate-y-0' : '-translate-y-36'}`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-6 px-6 lg:px-8" aria-label="Global">
                <div className="flex justify-between w-full lg:flex-1">
                    {/* ===  */}
                    <div className="flex lg:hidden">
                        <IocnButton
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </IocnButton>
                    </div>
                    {/* === Logo === */}
                    <Logo src={logo} />
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    {
                        (mainMenu || []).map((menuItem, i) => {
                            if (menuItem.subMenuItems.length !== 0) {
                                return <Popover className="relative" key={i} >
                                    <Popover.Button
                                        onMouseEnter={() => setShowPopover(true)}
                                        onMouseLeave={() => setShowPopover(false)}
                                        className="flex outline-none items-center text-lg text-gray-400 hover:text-secondary transition-all">
                                        {renderLink(menuItem.label, menuItem.description)}
                                        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                    </Popover.Button>

                                    <Transition
                                        show={showPopover}
                                        onMouseEnter={() => setShowPopover(true)}
                                        onMouseLeave={() => setShowPopover(false)}
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-80 max-w-md overflow-hidden rounded-3xl bg-white shadow-custom ring-gray-900/5">
                                            <div className="p-4">
                                                {menuItem?.subMenuItems.map((subMenuItem, i) => {
                                                    return <div
                                                        key={i}
                                                        className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 hover:bg-gray-50"
                                                    >
                                                        <div className="flex-auto">
                                                            {renderLink(subMenuItem.label, subMenuItem.destination)}
                                                        </div>
                                                    </div>
                                                })}
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                            }
                            return <Fragment key={menuItem.id}>{renderLink(menuItem.label, menuItem.destination)}</Fragment>
                        })
                    }
                </Popover.Group>
            </nav>
            {/* === mobilde mode === */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className=" fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex justify-between">
                        {/* === close menu === */}
                        <IocnButton
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </IocnButton>
                        {/* === Logo === */}
                        <Logo src={logo} />
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {(mainMenu || []).map((menuItem, i) => {
                                    if (menuItem.subMenuItems.length !== 0) {
                                        return <Disclosure as="div" className="-mx-3 " key={menuItem.id}>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg hover:bg-gray-50">
                                                        {renderLink(menuItem.label, menuItem.description)}
                                                        <ChevronDownIcon
                                                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                            aria-hidden="true"
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="pr-10 space-y-2">
                                                        {menuItem?.subMenuItems.map((subMenuItem) => (
                                                            <Disclosure.Button
                                                                key={subMenuItem.id}
                                                                as={Link}
                                                                href={subMenuItem.destination}
                                                            >
                                                                <a
                                                                    className="block rounded-lg py-3 pl-6 pr-4 text-sm font-semibold leading-7 text-gray-400 hover:bg-blue-50 hover:text-secondary"
                                                                >
                                                                    {subMenuItem.label}
                                                                </a>
                                                            </Disclosure.Button>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    }
                                    return <Fragment key={menuItem.id}>
                                        {renderLink(menuItem.label, menuItem.destination)}
                                    </Fragment>
                                })}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default MainMenu

