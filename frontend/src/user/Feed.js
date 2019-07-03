import React  from 'react';

const Feed = () => {  
    let user = JSON.parse(localStorage.getItem('user'));
    let thumbnail = 'data:image/jpeg;base64,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';
    let posts = [];
    for(let i=0;i<=10;i++){
        posts[i] = {};
        posts[i].id= i;
        posts[i].content= `Jacques Kallis (born 16 October 1975) is a former South African cricketer, and, a former Test and ODI captain. As a right-handed batsman and right-arm fast-medium swing bowler, Kallis is regarded as one of the greatest cricketers of all time and the game's greatest all rounder.[2] As of 2016 he is the only cricketer in the history of the game to score more than 10,000 runs and take over 250 wickets in both ODI and Test match cricket, pouching 131 ODI catches along the way as well. His Test match career in particular saw him score 13,289 runs, take 292 wickets and 200 catches respectively`;
        posts[i].likes= (i+1)*5;
        let date = new Date();
        date.setMonth(date.getMonth() - ((i+1)*2));
        posts[i].date = date;
    }
    console.log("Posts", posts);
    
    const list = posts.map(post =>
        <div key={post.id} className='container-fluid jumbotron'> 
            <figure class="figure">
                <img className='img-thumbnail'  align='left' src= {thumbnail} alt="new"/>
                    <h4>{user.name}</h4>
                <h5 class="blockquote-footer d-flex align-items-start">{post.content}</h5>  
            </figure>
            <figcaption class="figure-caption text-right">
                 <h6 class="display-4">Comment</h6><input></input><button className='btn btn-raised btn-success ml-2'>Submit</button>
            </figcaption>            
        </div>
    );
    return list;
  }
  export default Feed;