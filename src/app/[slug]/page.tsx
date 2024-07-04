import { fetchData } from "@/lib/fetchData";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import linkedin from '/public/linkedin.png';
import instagram from '/public/instagram.png'
import twitter from '/public/twitter.png'
import youtube from '/public/youtube.png'
import Link from "next/link";
type BlogData = {
  data: {
    id: number;
    slug: string;
    title: string;
    short_description: string;
    category: string | null;
    published_on: string | null;
    published_by: {
      id: number;
      name: string;
      designation: string;
      short_description: string;
      facebook_link: string | null;
      twitter_link: string | null;
      linkedin_link: string;
      instagram_link: string | null;
      youtube_link: string | null;
      featured_image: {
        file_name: string;
        file_path: string;
        file_type: string;
        file_size: number;
        media_type: string;
        alt_text: string | null;
        title: string | null;
        description: string | null;
      };
      author_count: number;
    };
    top_content: string;
    content: any[];
    bottom_text: string | null;
    bottom_button_text: string | null;
    bottom_button_url: string | null;
    bottom_button_target: string | null;
    featured_image: {
      file_name: string;
      file_path: string;
      file_type: string;
      file_size: number;
      media_type: string;
      alt_text: string | null;
      title: string | null;
      description: string | null;
    };
    browser_title: string;
    og_title: string | null;
    meta_description: string;
    og_description: string | null;
    og_image: string | null;
    meta_keywords: string;
    bottom_description: string | null;
    extra_js: string | null;
    visit_count: number | null;
    tags: any[];
    banner_image: {
      file_name: string;
      file_path: string;
      file_type: string;
      file_size: number;
      media_type: string;
      alt_text: string | null;
      title: string | null;
      description: string | null;
    };
    related_blogs: {
      id: number;
      slug: string;
      title: string;
      name: string;
      short_description: string;
      category: string | null;
      published_on: string | null;
     
      published_by: {
        id: number;
        name: string;
        designation: string;
        short_description: string;
        facebook_link: string | null;
        twitter_link: string | null;
        linkedin_link: string;
        instagram_link: string | null;
        youtube_link: string | null;
        featured_image: {
          file_name: string;
          file_path: string;
          file_type: string;
          file_size: number;
          media_type: string;
          alt_text: string | null;
          title: string | null;
          description: string | null;
        };
        author_count: number;
      };
      
      tags: any[];
    };
  };
};

export const generateMetadata=async({params}:{params:{
    slug:string
}}):Promise<Metadata>=>{
 const blog: BlogData = await fetchData(`https://kilton-dashboard.spider.ws/api/blogs/${params.slug}`);
    return{
        title:blog.data?.browser_title,
        description:blog.data?.meta_description,
        keywords:[blog.data?.meta_keywords]
    }
}

async function Slug({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const blog: BlogData = await fetchData(
    `https://kilton-dashboard.spider.ws/api/blogs/${params.slug}`
  );

  return (
    <div className="md:m-10" key={blog.data.id}>
      <div className="w-[100%] h-[auto] text-black ">
        <h1 className="text-3xl font-bold">{blog?.data.title}</h1>
        <div className="flex flex-row justify-between my-5">
          {blog?.data?.category
          &&
          <h2 className="bg-orange-500 rounded text-white py-2 px-4 ">
          {blog?.data?.category}
        </h2>
          }
         
          <h2 className="text-gray-500">{blog?.data.published_on}</h2>
        </div>
       
        {blog.data?.banner_image?.file_path !==undefined ?
         <Image
         src={blog.data?.banner_image?.file_path}
         alt={blog.data.title}
         width={1000}
         height={1000}
         className="rounded"
       />
       :
       <Image
       src={blog.data?.featured_image.file_path}
       alt={blog.data.title}
       width={1000}
       height={1000}
       className="rounded"
     />
        }
       
        <h1 className="font-semibold text-xl py-5">Introduction</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.data.top_content }}></div>
     
      </div>

      <h1 className="font-semibold underline text-xl">Social Links</h1>
      <div className="flex flex-row gap-5 flex-wrap">
        {blog?.data?.published_by?.instagram_link &&
        <> <Link href={blog?.data?.published_by?.instagram_link}><Image src={instagram} width={100} alt={'Instagram'}/></Link> </>}
        {blog?.data?.published_by?.twitter_link && <> <Link href={blog?.data?.published_by?.twitter_link}><Image src={twitter} width={100} alt={'Twitter'}/></Link></>}
        {blog?.data?.published_by?.youtube_link && <> <Link href={blog?.data?.published_by?.youtube_link}><Image src={youtube} width={100} alt={'YouTube'}/></Link></>}
        {blog?.data?.published_by?.linkedin_link && <> <Link href={blog?.data?.published_by?.linkedin_link}><Image src={linkedin} width={100} alt={'Linkedin'}/></Link></>}
        
      </div>

    </div>
  );
}

export default Slug;
