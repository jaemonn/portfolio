import React, { useState } from 'react'

// tailwind header
import { Dialog } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header id="header" className="bg-neutral shadow-md text-white sticky top-0 z-50">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <div className="-m-1.5 p-1.5 normal-case text-2xl h-auto w-auto">
                            <span className="font-bold">
                                <a href='#hero' data-te-smooth-scroll-init >dev.mond</a>
                            </span>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 section-container">
                        <div className="text-md font-semibold leading-6 hover:text-primary">
                            <a href='#about' data-te-smooth-scroll-init>About</a>
                        </div>
                        <div className="text-md font-semibold leading-6 hover:text-primary">
                            <a href='#projects' data-te-smooth-scroll-init>Projects</a>
                        </div>
                        <div className="text-md font-semibold leading-6 hover:text-primary">
                            <a href='#contacts' data-te-smooth-scroll-init>Contact Me
                            </a>
                        </div>
                    </div>
                </nav>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-base-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" >
                        <div className="flex items-center justify-between">
                            <div className="-m-1.5 p-1.5 btn btn-ghost normal-case text-2xl h-8 w-auto">
                                <span className="font-bold">dev.renzo</span>
                            </div>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6 text-base" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">
                                        <a href='#'>About</a>
                                    </div>
                                    <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">
                                        <a href='#projects'>Projects</a>
                                    </div>
                                    <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">
                                        <a href='#contact'>Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>
    )
}

export default Header