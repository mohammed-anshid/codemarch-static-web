/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import footerLogo from '../../assets/Group 47.png';
import footerButton from '../../assets/button-secondary-footer.svg';

function Footer() {
  return (
    <div>
        <footer className="bg-gradient-to-t from-[#001e18]  to-transparent mt-56 lg:pb-16 px-9 md:px-16">
            <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
                <div className="md:flex md:justify-between md:gap-3">
                <div className="mb-6 md:mb-0">
                    <a href="" className="flex items-center" >
                        <img src={footerLogo} className="h-10  md:h-12 lg:h-13 mx-auto" alt="FlowBite Logo" />
                    </a>
                    <button className='className="flex hidden lg:block items-center w-full'>
                        <img src={footerButton} className="h-11 md:h-10 mt-9 md:mt-7 hover:p mx-auto" alt="FlowBite Logo" />
                    </button>
                </div>
                {/* <div className="grid grid-cols-3 gap-8 md:gap-[9rem]  lg:gap-48 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-secondaryText  dark:text-secondaryText">Resources</h2>
                        <ul className="text-secondaryHover text-sm font-semibold">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-secondaryText  dark:text-secondaryText">Follow us</h2>
                        <ul className="text-secondaryHover text-sm font-semibold">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-secondaryText  dark:text-secondaryText">Legal</h2>
                        <ul className="text-secondaryHover text-sm font-semibold">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Random</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
                <div className="flex mt-4 space-x-7 justify-center sm:mt-0 self-center">
                    <a href="https://discord.gg/nqAPUVuZtP" className="text-gray-500 hover:text-[#D7CEA5] dark:hover:text-white dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/codemarch_/" className="text-gray-500 hover:text-[#D7CEA5] dark:hover:text-white dark:text-gray-400">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd">
                            </path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/codemarch?s=20" className="text-gray-500 hover:text-[#D7CEA5] dark:hover:text-white dark:text-gray-400">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/codemarch/" className="text-gray-500 hover:text-[#D7CEA5] dark:hover:text-white dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7">
                            <path fill="currentColor" 
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            <hr className="my-6 border-transparent sm:mx-auto dark:border-transparent lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between text-center">
                <span className="text-sm lg:text-base text-[#3D8361] sm:text-center dark:text-[#3D8361]">© Copyrights 2024, <a href="https://codemarch.co/" className="hover:underline">Codemarch™</a>. All Rights Reserved.
                </span>
                {/* <div className="flex mt-4 space-x-7 justify-center sm:mt-0">
                    <a href="https://discord.gg/nqAPUVuZtP" className="text-gray-500 hover:text-[#D7CEA5] dark:hover:text-white dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/codemarch_/" className="text-gray-500 hover:text-[#D7CEA5] dark:hover:text-white dark:text-gray-400">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd">
                            </path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/codemarch?s=20" className="text-gray-500 hover:text-[#D7CEA5] dark:hover:text-white dark:text-gray-400">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/codemarch/" className="text-gray-500 hover:text-[#D7CEA5] dark:hover:text-white dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7">
                            <path fill="currentColor" 
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                            </path>
                        </svg>
                    </a>
                </div> */}
            </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer