import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import queryString from "query-string";
import Pagination from "@/src/components/PropertySearch/Results/Pagination/Pagination";
import PostsRsults from "@/src/components/Posts/Posts";
import { gql } from "@apollo/client";
import client from "client";
import Categories from "@/src/components/Categories/Categories";
import LastPosts from "@/src/components/LastPosts/LastPosts";
import Tags from "@/src/components/Tags/Tags";
import { SkeletonCard } from "@/src/components/Posts/SkeletonCardPost";
import NotFound from "src/subComponents/NotFound";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [pageLocation, setPageLocation] = useState(1)
  const pageSize = 3;
  const router = useRouter();

  const search = async () => {
    const { page } = queryString.parse(window.location.search);
    setPageLocation(page || 1)
    const response = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
      }),
    });
    const data = await response.json();
    setPosts(data.posts);
    setTotalResults(data.total);
    setIsLoading(false)
  };
  const handlePageClick = async (pageNumber) => {
    setIsLoading(true)
    await router.push(
      `${[router.pathname]?.join("/")}?page=${pageNumber}`,
      null,
      {
        shallow: true,
      }
    );
    search();
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <div className="container  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-7">
        {/* category & tags & last Posts === */}
        <div className="flex flex-col gap-5">
          <Categories categories={props.allCategories} />
          <LastPosts posts={props.lastPosts} />
          <Tags tags={props.allTags} />
        </div>

        {/* === Posts list === */}
        <div className="col-span-2">
          {isLoading ?
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {[1, 2, 3].map((_, i) => {
                return <SkeletonCard key={i} />
              })}
            </div>
            :
            posts.length === 0 ?
              <NotFound />
              :
              <>
                <PostsRsults posts={posts} />
                <Pagination
                  pageLocation={Number(pageLocation)}
                  onPageClick={handlePageClick}
                  totalPage={Math.ceil(totalResults / pageSize)}
                />
              </>
          }
        </div>
      </div>
    </div >
  );
};

export default Posts;

export async function getStaticProps() {
  const { data: lastPosts } = await client.query({
    query: gql`
        query LastPosts {
          posts(first: 3) {
            nodes {
              title
              uri
              date
            }
          }
        }
      `,
  });
  const { data: allTags } = await client.query({
    query: gql`
        query AllTags {
          tags {
            nodes {
              name
              link
            }
          }
        }
      `,
  });
  const { data: allCategories } = await client.query({
    query: gql`
        query AllCategories {
          categories {
            nodes {
              name
              link
            }
          }
        }
      `,
  });


  return {
    props: {
      lastPosts: lastPosts?.posts.nodes,
      allTags: allTags?.tags.nodes,
      allCategories: allCategories?.categories.nodes,
    },
  }
}