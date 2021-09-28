import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthors, fetchPages, fetchPosts, fetchTags, getAllAuthors, getAllPages, getAllTags, getPosts, getAllPost, getLatestPosts, fetchAllPost } from './../../pageSlice/pageSlice';
import dash from './dashboard.module.css';
import dateFormat from 'dateformat';

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import blogApi from '../../api/blogApi';
import { APIKey } from './../../api/blog-api-key';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const Dashboard = () => {

const [latest,setLatest] =useState([])

    const dispatch = useDispatch()
    const posts = useSelector(getAllPost);
    const authors = useSelector(getAllAuthors);
    const pages = useSelector(getAllPages);
    const tags = useSelector(getAllTags);
    // const latestPost = useSelector(getLatestPosts)

const val = useSelector(state=>state.posts)
console.log('val',val)
// console.log(latestPost)
 const  fetchLatestPost =  async ()=>{
    const response = await blogApi
    .get(`posts/?key=${APIKey}&order=published_at%20desc&limit=5`)
    .catch(err=>{
        console.log(err)
    });
 
    console.log('latest',response.data)
    setLatest(response.data)
    // return response.data
}

    useEffect(() => {
        dispatch(fetchAllPost());
        dispatch(fetchAuthors());
        dispatch(fetchTags());
        dispatch(fetchPages());
        fetchLatestPost()
    }, [dispatch])
    let a = 'total posts'
    let b = 'total tags'
    let c = 'total pages'
    let d = 'total authors'
    console.log(posts)
    
    const lab = 
   posts.posts?.map(item =>

            dateFormat(item.published_at, 'mmmm')


        )

    console.log(lab)
    const counts = {}
     lab?.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1

    })
    console.log(counts);
    const { January, February, March, April, May, June, July, August, September, October, November, December } = counts

    const chartData = [
        {
            label: "Dec",
            value: December
        },
        {
            label: "Jan",
            value: January
        },
        {
            label: "Feb",
            value: February
        },
        {
            label: "Mar",
            value: March
        },
        {
            label: "Apr",
            value: April
        },
        {
            label: "May",
            value: May
        },
        {
            label: "Jun",
            value: June
        },
        {
            label: "Jul",
            value: July
        },
        {
            label: "Aug",
            value: August
        },
        {
            label: "Sep",
            value: September
        },
        {
            label: "Oct",
            value: October
        },
        {
            label: "Nov",
            value: November
        }
    ];
    const chartConfigs = {
        type: "column2d", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                
                caption: "Post Per Month",
               
                xAxisName: "Months",
                
                yAxisName: "Number of Posts",
                numberSuffix: "",
               
                theme: "fusion"
            },
            // Chart Data
            data: chartData
        }
    };
    var date = new Date();


    console.log(date);
    return (
        <div className={dash.container}>
            <h3 style={{ color: 'grey' }}>Dashboard</h3>
            <div className={dash.blocks}>
                <div className={dash.box} >
                    <p>{a.toUpperCase()}</p>
                    {
                        Object.keys(posts).length === 0 ?
                            (<div>...loading</div>) : (
                                <p>{posts.posts.length}</p>
                            )
                    }

                </div>
                <div className={dash.box}>
                    <p>{b.toUpperCase()}</p>
                    {
                        Object.keys(tags).length === 0 ?
                            (<div>...loading</div>) :
                            (<p>{tags.tags.length}</p>)
                    }


                </div>
                <div className={dash.box}>
                    <p>{c.toUpperCase()}</p>
                    {
                        Object.keys(pages).length === 0 ?
                            (<div>...loading</div>) :
                            (<p>{pages.pages.length}</p>)
                    }


                </div>
                <div className={dash.box}>
                    <p>{d.toUpperCase()}</p>
                    {
                        Object.keys(authors).length === 0 ?
                            (<div>...loading</div>) :
                            (<div> <p>{authors.authors.length}</p></div>)
                    }


                </div>
            </div>
            <div className={dash.chartSection}>
                <div className={dash.box}>
             <h3 style={{color:'grey'}}>LATEST POSTS</h3>
                {
                    Object.keys(latest).length === 0?
                   ( <div>...loading</div>) :
                   latest.posts.map((late,index)=>{
                       return(
                           <p key={index}>
                             <span className={dash.text}>{index+1}</span> { late.title.substring(0,20)+'...'}
                           </p>
                       
                   )
                })
            }
                </div>
                <div className={dash.box}>


                    <ReactFC {...chartConfigs} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
