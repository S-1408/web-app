import React, { useEffect } from 'react'
import Card from '../../component/card/Card'
import  link from './LinkPage.module.css'
import { fetchPosts, fetchAllPost, getPosts, getAllPost } from './../../pageSlice/pageSlice';
import { useDispatch, useSelector } from 'react-redux';
const LinkPages = () => {
    const posts = useSelector(getPosts);

    const allPost =useSelector(getAllPost)
    console.log(posts);
    console.log(allPost)
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPosts());
        dispatch(fetchAllPost())
    },[dispatch])

    let a='times used'
    let b='Broken Internal Link'
    let c ='Broken External Link'
    let d="Total Link"
    // let totalPost = posts.posts.length
    return (
        <>
        <h3 style={{color:"grey"}}>LINK PAGE</h3>
        <div className={link.container}>
             <section className={link.cards}>
<div className={link.card}>
    <p>{d.toUpperCase()}</p>
    {
        Object.keys(posts).length === 0 ?
        (
            <div>...loading </div>
        ):  (  <div >Total Post  {posts.posts.length}</div>)
    }
    
                
             </div>
             <div className={link.card}>
             <p>{b.toUpperCase()}</p>
{
      Object.keys(posts).length===0?
                   (<div>...Loading</div>)
                   :(
    posts.posts.filter(item=>item.url.startsWith("https://ghost-blog.ipxp.in/")).map((item,index)=>{
        return (<>
            <p key={index}><span className="index">{index+1}</span><a >   {item.url.substring(0,35)+'...'}</a>  
            <i className=" link fa fa-external-link" ></i>
            </p>
           <p><span className={link.textColor}>{item.reading_time}</span> {a.toUpperCase()}</p> 
           <hr />
            </>
        )
    }))
}
             
             </div>
             <div className={link.card}>
             <p>{c.toUpperCase()}</p>
             {
                  Object.keys(posts).length===0?
                   (<div>...Loading</div>)
                   :(
    posts.posts.filter(item=>!item.url.startsWith("https://ghost-blog.ipxp.in/")).map((item,index)=>{
        return (
            <>
           <p key={index}> <span className="index">{index+1}</span><a >{item.url.substring(0,20)+'...'}</a>
           <i className=" link fa fa-external-link" ></i>
            </p>
           <p><span className={link.textColor} >{item.reading_time}</span> {a.toUpperCase()}</p> 
           <hr />
           </>
        )
    }))
}

             </div>
             </section>
             
           

        </div>
        </>
    )
  
}

export default LinkPages
