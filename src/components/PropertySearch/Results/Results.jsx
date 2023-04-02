import React from 'react'
import PropertyCard from './PropertyCard/PropertyCard'

const Results = ({ properties }) => {
    return (
        <div className='max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10'>
            {properties.map((property) =>
                <PropertyCard
                    key={property.databaseId}
                    title={property.title}
                    destination={property.uri}
                    bathrooms={property.propertyFeatures.bathrooms}
                    bedrooms={property.propertyFeatures.bedrrom}
                    price={property.propertyFeatures.price}
                    hasParking={property.propertyFeatures.hasParking}
                    petFriendly={property.propertyFeatures.getFriendly}
                    image={property.featuredImage?.node?.sourceUrl}
                />
            )}s
        </div>
    )
}

export default Results
