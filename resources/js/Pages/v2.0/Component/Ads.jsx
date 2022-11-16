import React, { useEffect, useState } from "react";

const useDfpSlot = ({ path, size, id }) => {
    const [_path, setPath] = useState(path)
    const [_size, setSize] = useState(size)
    const [_id, setId] = useState(id)

    /*
     <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script>
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/22764566987/c3834062-64c2-11ed-9022-0242ac120002', ['fluid'], 'div-gpt-ad-1668590229667-0').addService(googletag.pubads());
        googletag.enableServices();
      });
    </script> 
     */
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