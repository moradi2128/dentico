import { usePageContext } from "src/context/page";
import Paragraph from "../Paragraph/Paragraph";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import required modules
import { EffectCards, Navigation } from "swiper";
import { relativeToAbsoluteUrls } from "@/src/utils/relativeToAbsoluteUrls";
import Image from "next/image";
import Avatar from "src/subComponents/Avatar";

const LatestComments = (props) => {
  const context  = usePageContext();

  const CommentItem = ({ content }) => {
    return <div
      className={`[&>a]:text-blue-400 [&>a]:underline md:text-md text-xs text-black text-justify line-clamp-3`}
      dangerouslySetInnerHTML={{ __html: content?.includes("<img") ? content : relativeToAbsoluteUrls(content) }} />
  };
  const ReplyComment = ({ comments, parentId }) => {
    return comments.map((comment) => {
      return (
        comment.parentId === parentId && <ReplyCommentItem comment={comment} key={comment.parentId} />
      );
    });
  };

  const ReplyCommentItem = ({ comment }) => {
    return (
      <div className="mt-4">
        {/* === Avatar author === */}
        <Avatar
          url={comment.parent.node.author?.node.avatar.url}
          name={comment.parent.node.autho?.node.name}
          date={comment.parent.node?.date}
        />
        {/* === content === */}
        <div className="flex gap-3 mt-3">
          <p className="text-gray-400 text-md">پاسخ:</p>
          {/* <Paragraph content={comment.content} key={comment.id} textAlign="right"/> */}
          <div
            className={`[&>a]:text-blue-400 [&>a]:underline md:text-base text-xs  text-black text-justify line-clamp-3`}
            dangerouslySetInnerHTML={{ __html: comment.content?.includes("<img") ? content : relativeToAbsoluteUrls(comment.content) }} />
        </div>
      </div >
    );
  };
  return (
    <Swiper
      effect={"cards"}
      grabCursor
      navigation
      modules={[EffectCards, Navigation]}
      className="
      max-w-lg mx-0
      my-12
       [&>.swiper-button-next]:right-[75px] [&>.swiper-button-next]:top-[300px] [&>.swiper-button-prev]:top-[300px]
       [&>.swiper-button-prev]:wiper-button-prev
       [&>.swiper-button-prev:after]:content-['']
       [&>.swiper-button-next]:wiper-button-next
       [&>.swiper-button-next:after]:content-['']
       "
    >
      {(context?.latestComments || []).map((comment) => {
        return (
          !comment.parentId && (
            <SwiperSlide
              key={comment.id}
              className=" bg-white shadow-custom-lg tex-xl rounded-2xl max-h-[250px] [&>p]:text-sm p-5"
            >
              <CommentItem content={comment.content} />
              <ReplyComment comments={context?.latestComments} parentId={comment.id} />
            </SwiperSlide>
          )
        );
      })}
    </Swiper>
  );
};

export default LatestComments;
