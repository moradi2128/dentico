import { convertDateToPersionDate } from '@/src/utils/convertDateToPersionDate'
import { gql } from '@apollo/client'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import client from 'client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GalleryItem = ({ title, destination, date, imageUri, iamgeAlt }) => {
  return <Link href={destination}>
    <a>
      <div className={`w-full group transition-all relative mb-6 overflow-hidden card-rounded min-h-[500px] shadow-custom-lg hover:shadow-black/40 border border-gray-200`}>
        {imageUri && <Image src={imageUri} layout="fill" objectFit='cover' alt={iamgeAlt || ""} className="group-hover:scale-105 transition-all duration-300" />}
        <div className=' absolute bottom-0 right-0 left-0 opacity-50 transition-all duration-300 h-[100%] group-hover:h-[100%]  bg-gradient-to-t from-primary group-hover:to-primary/60 ' />
        {/* === content === */}
        <div className='[&>p]:text-lg text-white absolute bottom-0 right-0 left-0 p-10 '>
          <div>
            <h3 className="text-white text-2xl mb-2" >{title}</h3>
            {/* === Date === */}
            <div className='flex items-center gap-2'>
              <CalendarDaysIcon className='w-4 h-4 mb-1 text-white' />
              <p className="text-white text-xs" >{convertDateToPersionDate(date)}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </Link>
}
const Gallery = (props) => {
  return (
    <div className='container '>
      <div className='columns-1 md:columns-2 lg:columns-3 gap-5 py-16'>
        {(props.gallery || []).map((item,i) => {
          return <GalleryItem
            key={i}
            title={item.title}
            destination={item.uri}
            date={item.date}
            imageUri={item.featuredImage?.node.sourceUrl}
            iamgeAlt={item.featuredImage?.node.altText}
          />
        })}
      </div>
    </div>

  )
}

export default Gallery

// export async function getStaticProps() {
//   const { data: menuData } = await client.query({
//     query: GET_MENU
//   })
//   return {
//     props: {
//       logo: menuData.acfOptionsMainMenu.logo.logo.sourceUrl || null,
//       mainMenuItems: mainMaenuItems(menuData.acfOptionsMainMenu.mainMenu.menuItems),
//       footer: menuData.getFooter,
//       callToActionLabel: menuData.acfOptionsMainMenu.mainMenu.callToActionButton.label,
//       callToActionDestination: menuData.acfOptionsMainMenu.mainMenu.callToActionButton.destinatio?.uri || null
//     },
//   }

// }

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query GetAllGallery {
      allGallery {
        nodes {
          title
          uri
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
      `,
  });


  return {
    props: {
      gallery: data?.allGallery.nodes,
    },
  }
}