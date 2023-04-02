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

const LatestComments = (props) => {
  const { latestComments } = usePageContext();

  const CommentItem = ({ content }) => {
    return <p
      className={`[&>a]:text-blue-400 [&>a]:underline text-md  text-black text-justify line-clamp-3`}
      dangerouslySetInnerHTML={{ __html: content?.includes("<img") ? content : relativeToAbsoluteUrls(content) }} />
  };
  const ReplyComment = ({ comments, parentId }) => {
    return comments.map((comment) => {
      return (
        comment.parentId === parentId && <ReplyCommentItem comment={comment} key={comment.parentId}/>
      );
    });
  };

  const ReplyCommentItem = ({ comment }) => {
    return (
      <div className="mt-4">
        {/* === Author === */}
        <div className="flex flex-row gap-3 items-ends">
          {/* === Avatar === */}
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mask mask-hexagon ">
              <img src={comment.parent.node.author.node.avatar.url} alt=""/>
            </div>
          </div>
          {/* === author info === */}
          <div className="flex flex-col justify-around">
            <h3 className="text-[0.8rem] text-gray-500 font-semibold">{comment.parent.node.author.node.name}</h3>
            <span className="text-gray-400 text-[.6rem]">{new Date(comment.parent.node?.date).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
        {/* === content === */}
        <div className="flex gap-3 mt-3">
          <p className="text-gray-400 text-md">پاسخ:</p>
          {/* <Paragraph content={comment.content} key={comment.id} textAlign="right"/> */}
          <p
            className={`[&>a]:text-blue-400 [&>a]:underline text-md  text-black text-justify line-clamp-3`}
            dangerouslySetInnerHTML={{ __html: comment.content?.includes("<img") ? content : relativeToAbsoluteUrls(comment.content) }} />
        </div>
      </div>
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
      {(latestComments || []).map((comment) => {
        return (
          !comment.parentId && (
            <SwiperSlide
              key={comment.id}
              className=" bg-white shadow-custom-lg tex-xl rounded-2xl max-h-[250px] [&>p]:text-sm p-5"
            >
              <CommentItem content={comment.content} />
              <ReplyComment comments={latestComments} parentId={comment.id} />
            </SwiperSlide>
          )
        );
      })}
    </Swiper>
  );
};

export default LatestComments;
