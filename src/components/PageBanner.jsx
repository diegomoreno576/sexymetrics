import React,{useState, useEffect} from 'react'


const PageBanner = () => {

   
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset); 
      
  
  return (
    <div className="page-banner"  >  
    
        <div className="page-banner-container">
            <div className="page-banner-img">
            </div>
            </div> 
    </div>
  )
}

export default PageBanner