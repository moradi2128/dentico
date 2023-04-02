import Image from "next/image";
import { theme } from "theme";
import CallToActionButton from "../CallToActionButton/CallToActionButton";
import CardInfo from "../CardInfo/CardInfo";
import Column from "../Column/Column";
import Columns from "../Columns/Columns";
import Cover from "../Cover/Cover";
import FeatureBox from "../FeatureBox/FeatureBox";
import Gallery from "../Gallery/Gallery";
import Heading from "../Heading/Heading";
import LatestComments from "../LatestComments/LatestComments";
import Paragraph from "../Paragraph/Paragraph";
import PostTitle from "../PostTitle/PostTitle";
import PropertySearch from "../PropertySearch/PropertySearch";

export const BlockRenderer = ({ blocks, latestComments }) => {
    return blocks?.map((block) => {
        switch (block.name) {
            case "acf/ctabutton": {
                return <CallToActionButton
                    key={block.id}
                    buttonLabel={block.attributes.data.label}
                    destination={block.attributes.data.de || "/"}
                    align={block.attributes.data.align}
                />
            }
            case "acf/propertysearch": {
                return <PropertySearch key={block.id} />
            }
            case "acf/featurebox": {
                return <FeatureBox
                    key={block.id}
                    description={block.attributes.data.description}
                    sub_description={block.attributes.data.sub_description}
                    title={block.attributes.data.title}
                    destination={block.attributes.data?.destination}
                />
            }
            case "core/paragraph": {
                return <Paragraph
                    key={block.id}
                    textAlign={block.attributes.align}
                    textColor={theme[block.attributes.textColor] || block.attributes?.style?.color}
                    content={block.attributes.content} />
            }
            case "core/heading": {
                return <Heading
                    key={block.id}
                    textAlign={block.attributes.textAlign}
                    level={block.attributes.level}
                    textColor={theme[block.attributes.textColor] || block.attributes?.style?.color}
                    content={block.attributes.content} />
            }
            case "core/cover": {
                return <Cover
                    key={block.id}
                    background={block.attributes.url}
                    alt={block.attributes.alt}
                    hasParallax={block.attributes.hasParallax || false}
                >
                    <BlockRenderer blocks={block.innerBlocks} />
                </Cover>
            }
            case "core/columns": {
                return <Columns key={block.id} isStackedOnMobile={block.attributes.isStackedOnMobile} >
                    <BlockRenderer blocks={block.innerBlocks} />
                </Columns>
            }
            case "core/column": {
                return <Column key={block.id} width={block.attributes.width}>
                    <BlockRenderer blocks={block.innerBlocks} />
                </Column>
            }
            case "core/image": {
                return <Image
                    key={block.id}
                    src={block.attributes.url}
                    height={block.attributes?.orginalHeight || 500}
                    width={block.attributes?.orginalWidth || 400}
                    objectFit="contain"
                    alt={block.attributes.alt || ""}
                />
                break
            }
            case "core/block":
            case "core/group": {
                return <BlockRenderer key={block.id} blocks={block.innerBlocks} />
            }
            case "core/post-title": {
                return <PostTitle
                    key={block.id}
                    lavel={block.attributes.level}
                    textAlign={block.attributes.textAlign} />
            }
            case "core/gallery": {
                return <Gallery
                    images={block.innerBlocks}
                    key={block.id}
                />
            }
            case "core/latest-comments": {
                return <LatestComments latestComments={latestComments} key={block.id} />
            }
            case "icb/cards": {
                return <CardInfo key={block.id} content={block.attributes} />
            }
            default:
                console.log('unknow', block);
                break;
        }
    })
}