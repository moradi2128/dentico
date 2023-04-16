
import React, { useState } from "react";

import { relativeToAbsoluteUrls } from "@/src/utils/relativeToAbsoluteUrls";
import Avatar from "src/subComponents/Avatar";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const Comments = ({ comments }) => {


    const CommentItem = ({ content, date, author }) => {
        const [showMessage, setShowMessage] = useState(true)
        return <div >
            {/* === Avatar author === */}
            <div className="mb-4">
                <Avatar
                    name={author.node.name}
                    date={date}
                />
            </div>
            {/* === content === */}
            <div
                className={`[&>a]:text-blue-400 [&>a]:underline text-md text-black text-justify pr-[50px] leading-7 ${showMessage ? "line-clamp-none" : "line-clamp-4"}`}
                dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }} />

            {/* === show comment === */}
            {/* <div className="flex w-full justify-end">
                <button onClick={() => setShowMessage(!showMessage)} className="btn btn-ghost gap-2 ">
                    {showMessage ? "مخفی کردن" : "نمایش کامل"}
                    {showMessage ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}

                </button>
            </div> */}
        </div >
    };
    const ReplyComment = ({ comments, parentId }) => {
        return comments.map((comment) => {
            return (
                comment.parent?.node.id === parentId && <ReplyCommentItem comment={comment} key={comment.id} />
            );
        });
    };

    const ReplyCommentItem = ({ comment }) => {
        return (
            <div className="mt-7 mr-10 border-r border-t rounded-tr-xl pt-4 pr-4">
                {/* === Avatar author === */}
                <Avatar
                    url={comment.parent.node.author.node.avatar.url}
                    name={comment.parent.node.author.node.name}
                    date={comment.parent.node?.date}
                />
                {/* === content === */}
                <div className="flex gap-3 mt-3">
                    <p className="text-gray-400 text-md">پاسخ:</p>
                    {/* <Paragraph content={comment.content} key={comment.id} textAlign="right"/> */}
                    <div
                        className={`[&>a]:text-blue-400 [&>a]:underline text-md  text-black text-justify leading-7 `}
                        dangerouslySetInnerHTML={{ __html: comment.content?.includes("<img") ? content : relativeToAbsoluteUrls(comment.content) }} />
                </div>
            </div >
        );
    };
    return (
        <div
            className="mx-0 my-12 flex flex-col gap-11"
        >
            {comments.length === 0 ?
                <p className="font-semibold text-center">نظری ثبت نشده است!</p>
                :
                (comments || []).map((comment) => {
                    return (
                        !comment.parent && (
                            <div
                                key={comment.id}
                                className=" bg-white shadow-custom tex-xl rounded-2xl [&>p]:text-sm p-6"
                            >
                                <CommentItem content={comment.content} date={comment.date} author={comment.author} />
                                <ReplyComment comments={comments} parentId={comment.id} />
                            </div>
                        )
                    );
                })}
        </div>
    );
};

export default Comments;
