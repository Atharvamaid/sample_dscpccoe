import React from 'react';

import InstagramEmbed from 'react-instagram-embed';



const posts =[
  {
    url:'https://www.instagram.com/p/CEb1p9snVmT/?utm_source=ig_web_copy_link',
  },
  {
    url:'https://www.instagram.com/p/CF94cxuhbaK/?utm_source=ig_web_copy_link',
  },
  {
    url: 'https://www.instagram.com/p/CFt3sqYheFg/?utm_source=ig_web_copy_link'
  },
  {
    url:'https://www.instagram.com/tv/CJApHt_hnRe/?utm_source=ig_web_copy_link'
  },
  {
    url:'https://www.instagram.com/tv/CJDJpfjB_Cx/?utm_source=ig_web_copy_link'
  },
  {
    url:'https://www.instagram.com/tv/CJDJpfjB_Cx/?utm_source=ig_web_copy_link'
  }
]

function InstaCards(props){
  
  return(
    <div>
       <InstagramEmbed
  url= {props.url}
  clientAccessToken='221354173031286|870ed71497e6576727e7a0b651c7f2b9'
  maxWidth="100%"
  
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
    </div>
  );
}


function Videos() {
    return (
      <div className="">
        <h1 className="text-center">Videos</h1>
      <div className="container-fluid  " >
        
       <div className="row mt-4 mb-5  justify-content-around">
      {
        posts.map((member)=>(
          <div className="col-md-4 mt-5 mb-5    justify-content-around">
          <InstaCards  url = {member.url} />
          </div>
        ))
      }
      </div>
      </div>
    </div>

    )
}

export default Videos