import React from 'react'
import '../../assets/styles/components/dashboard/LastPost.css'

const LastPost = () => {
  return (
    <div className="container-last-post">
        <div className="row last-posts">
            <div className="col-4 col-item-posts">
               <div className="last-post-item">
                <div className="last-post-date">
                        <span>17-may</span>
                    </div>
               </div>
            </div>
            <div className="col-4 col-item-posts">
               <div className="last-post-item">
                <div className="last-post-date">
                        <span>17-may</span>
                    </div>
               </div>
            </div>
            <div className="col-4 col-item-posts">
               <div className="last-post-item">
                <div className="last-post-date">
                        <span>17-may</span>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default LastPost