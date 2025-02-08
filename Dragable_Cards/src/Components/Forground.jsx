

import { useRef } from "react";
import Card from "./Card";

const Forground = () => {

    const ref = useRef(null);

    const Data = [
        {
            desc: "This a draggable element. we can drag it anywhere we want.",
            size: "0.4Mb",
            iconDownload: true,
            isDownload: true,
        },
        {
            desc: "This a draggable element. we can drag it anywhere we want.",
            size: "0.4Mb",
            iconDownload: false,
            isDownload: false,
        },
        {
            desc: "This a draggable element. we can drag it anywhere we want.",
            size: "0.4Mb",
            iconDownload: true,
            isDownload: true,
        }
    ]


  return (
    <div ref={ref} className=" fixed w-full z-[2] p-10 flex flex-wrap gap-10 flex-shrink-0">
       {
        Data.map((value,index)=>(
            <Card data={value} key={index} reference={ref} />
        ))
       }
    </div>
  )
}

export default Forground;