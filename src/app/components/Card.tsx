import { fetchData } from "@/lib/fetchData";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
    data:{
    id: number;
    slug: string;
    title: string;
    name: string;
    short_description: string | null;
    category: {
        id: number;
        slug: string;
        name: string;
        title: string;
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
    } | null;
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
    tags: string[];
}[]
};
export default async function Card(){

    //   const late= await  new Promise((resolve)=>setTimeout(resolve,5000))
   
   const blogs:BlogPost= await fetchData("https://kilton-dashboard.spider.ws/api/blogs");
  
   

  if(!blogs || blogs.data.length==0){
    return <h1 className="text-black">No data</h1>
  }
    return(
        <>
        {blogs?.data?.map((card)=>{
            return(
                <>
                <Link href={`/${card.slug}`}>
                <div key={card.id} className="w-96 h-96  rounded overflow-hidden text-black ">
                <div className="flex flex-col">
                <Image
                src={card.featured_image.file_path}
                height={400}
                width={600}
                alt={card.title}
                />
               
               <div className="flex flex-col gap-3 p-4 border-t-0 rounded rounded-tl-none rounded-tr-none"
               style={{border:'1px solid gray'}}
               >
                <h1 className="font-medium text-lg">{card.title}</h1>
                <p className="text-gray-500" style={{fontSize:'13px'}}>{card.short_description?.slice(0,60)+'...'}</p>
                <div className="flex flex-row justify-start gap-5">
                    <span className="text-gray-500" style={{fontSize:'9px'}}>{card?.published_on?.split(' ')[0]}</span>
                    <span className="text-gray-500" style={{fontSize:'9px'}}>{card?.published_on?.split(' ')[1]}</span>
                </div>
                </div>
                </div>
            
            </div>
            </Link>
            </>
            )
        })}
       
        </>
    )
}