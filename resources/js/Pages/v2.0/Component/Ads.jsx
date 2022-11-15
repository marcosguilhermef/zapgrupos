import React, { useEffect, useState } from "react";

const useDfpSlot = ({ path, size, id }) => {
    const [_path, setPath] = useState(path)
    const [_size, setSize] = useState(size)
    const [_id, setId] = useState(id)

    useEffect(() => {
      const googletag = window.googletag || {};
      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(function() {
        googletag.defineSlot(_path, _size, _id)
          .addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
      googletag.cmd.push(function() {
        googletag.display(_id);
      });
    }, [_path, _size, _id]);
  };

  
const Ads = (props) => {
    const { path, size, id, style} = {...props}

    useDfpSlot(
        {
            ['path']: path,
            ['size']: size,
            ['id']: id
        }
    )

    return(
        <div 
            id={id}
            style={style}>
        </div>
    )
}

export default Ads;