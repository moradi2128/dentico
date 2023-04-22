import { relativeToAbsoluteUrls } from '@/src/utils/relativeToAbsoluteUrls';
import React from 'react'
import Logo from '../Logo/Logo';

const Footer = (props) => {
  return (
    <footer aria-label="Site Footer" className="bg-blue-50 mt-36">
      <div className="mx-auto max-w-screen-xl px-4 pt-36 pb-6 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 prose-li:list-none">
          {/* === Right Footer === */}
          <div className='relative min-h-[300px] '>
            <div className='w-full bg-white min-h-[470px] absolute top-[-250px] card-rounded shadow-custom-lg shadow-secondary/20 p-8'>
              {/* === Logo === */}
              <Logo src={props.logo} />
              <div
                className='prose prose-ul:flex prose-ul:gap-7 prose-ul:flex-wrap'
                dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(props.footer.sidebarOne) }}
              />
            </div>
          </div>
          {/* === Left Footer === */}
          <div
            className="grid grid-cols-1 gap-8  "
          >
            <div
              dangerouslySetInnerHTML={{
                __html: props.footer.sidebarTwo
                  ?.includes("<img") ? content : relativeToAbsoluteUrls(props.footer.sidebarTwo
                  )
              }}
            />
          </div>
        </div>
        {/* === subFooter === */}
        <div className="mt-12 border-t border-gray-100 pt-6">
          <div
            // className="text-center sm:flex sm:justify-between ltr:sm:text-left rtl:sm:text-right"
            className="text-center "
          >
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">&copy; {props.footer.copyrightText}</span>
            </p>

            {/* <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              {new Date().toLocaleDateString('fa-IR', { year: 'numeric' })} Company Name
            </p> */}
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer;
