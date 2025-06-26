import AboutUs from "@/app/(mainsite)/components/aboutpage/AboutUs/AboutUs"
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea"
import Sweet from "@/app/(mainsite)/components/homepage/Sweet/Sweet"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `About | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `About | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function AboutPage(){
	 return(
	 	 <>
			<PageTitle title="About" subtitle="" />
			<AboutUs />
			<Sweet />
			<ServiceArea />
	 	 </>
	 )
}