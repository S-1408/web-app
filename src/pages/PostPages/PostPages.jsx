import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPost, getAllPost } from './../../pageSlice/pageSlice';
import styles from './PostPage.module.css'
// import parse from 'html-react-parser';
const PostPages = () => {

    const post = useSelector(getAllPost);




    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllPost())
    }, [dispatch])
    let a = "without meta description"
    let b = "without featured Image"
    let c = "Too short post below 250 word"
    let d = "Too Long Url more then 100 words"
    let e = "Too Long Post more than 1500 words"
    let f = 'Too Long Meta description'
    return (
        <>
            <h3 style={{ color: "grey" }}>POST PAGE</h3>
            <div className={styles.container}>
                <div className={styles.card}>
                    <p>{a.toUpperCase()}</p>
                    <hr />

                    {Object.keys(post).length === 0 ?
                        (<div>...loading</div>) :
                        (post.posts.filter(item => item.meta_description === null).map((item, index) => {
                            return (
                                <>
                                    <p keys={index}><span className="index">{index + 1}</span>   {item.title.substring(0, 20) + '...'} <i className="fa fa-external-link"></i></p>
                                    <p> <span><i className="fa fa-eye"></i> mark as read</span>
                                        <span> <i className="fa fa-pen"></i> edit</span></p>
                                    <hr />
                                </>
                            )
                        }))
                    }

                </div>
                <div className={styles.card}>
                    <p>{b.toUpperCase()}</p>
                    <hr />
                    {Object.keys(post).length === 0 ?
                        (<div>...loading</div>) :
                        (post.posts.filter(item => item.feature_image === null).map((item, index) => {
                            return (
                                <>
                                    <p keys={index}>  {item.title.substring(0, 20) + '...'} <i className="fa fa-external-link"></i></p>
                                    <p> <span><i className="fa fa-eye"></i> mark as read</span>
                                        <span> <i className="fa fa-pen"></i> edit</span></p>
                                    <hr />
                                </>
                            )
                        }))
                    }
                  
                </div>
                <div className={styles.card}>
                    <p>{c.toUpperCase()}</p>
                    <hr />
                    {
                        Object.keys(post).length === 0 ?
                            (<div>...loading</div>) :
                            (post.posts.filter(item => item.html.length < 250).map((item, index) => {
                                return (
                                    <>
                                        <p keys={index}>{index + 1}    {item.title.substring(0, 20) + '...'} <i className="fa fa-external-link"></i></p>
                                        <p> <span><i className="fa fa-eye"></i> mark as read</span>
                                            <span> <i className="fa fa-pen"></i> edit</span></p>
                                        <hr />
                                    </>
                                )
                            }))
                    }
                   
                </div>
                <div className={styles.card}>
                    <p>{f.toUpperCase()}</p>
                    <hr />
                    {
                        Object.keys(post).length === 0 ?
                            (<div>...loading</div>) :
                            (post.posts.filter(item => (item.meta_description ? (item.meta_description.length > 100) : 0)).map((item, index) => {
                                return (
                                    <>
                                        <p keys={index}>{item.index}{item.title.substring(0, 20) + '...'} <i className="fa fa-external-link"></i></p>
                                        <p> <span><i className="fa fa-eye"></i> mark as read</span>
                                            <span> <i className="fa fa-pen"></i> edit</span></p>
                                        <hr />
                                    </>
                                )
                            }))
                    }

                </div>
                <div className={styles.card}>
                    <p>{d.toUpperCase()}</p>
                    <hr />
                    {
                        Object.keys(post).length === 0 ?
                            (<div>...loading</div>) :
                            (post.posts.filter(item => item.url.length > 100).map((item, index) => {
                                return (
                                    <>
                                        <p keys={index}>{index}    {item.title.substring(0, 20) + '...'}  <i className="fa fa-external-link"></i></p>
                                        <p> <span><i className="fa fa-eye"></i> mark as read</span>
                                            <span> <i className="fa fa-pen"></i> edit</span></p>
                                        <hr />
                                    </>
                                )
                            }))
                    }

                </div>
                <div className={styles.card}>
                    <p>{e.toUpperCase()}</p>
                    <hr />
                    {
                        Object.keys(post).length === 0 ?
                            (<div>...loading</div>) :
                            (post.posts.filter(item => item.html.length > 250).map((item, index) => {
                                return (
                                    // <div key={index} dangerouslySetInnerHTML={{__html:item.html}}>

                                    // </div>
                                    <div key={index}>
                                        <p>{index + 1}    {item.title.substring(0, 20) + "..."} <i className="fa fa-external-link"></i></p>
                                        <p> <span><i className="fa fa-eye"></i> mark as read</span>
                                            <span> <i className="fa fa-pen"></i> edit</span></p>
                                        <hr />
                                    </div>
                                )
                            }))
                    }
                   
                </div>
            </div>
        </>
    )
}

export default PostPages
