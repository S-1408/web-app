import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthors, fetchPages, fetchPosts, fetchTags, getAllAuthors, getAllPages, getAllTags, getPosts } from './../../pageSlice/pageSlice';
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

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const Dashboard = () => {


   
    const dispatch = useDispatch()
    const posts =useSelector(getPosts );
    const authors =useSelector(getAllAuthors);
    const pages = useSelector(getAllPages);
    const tags = useSelector(getAllTags);

useEffect(()=>{
dispatch(fetchPosts());
dispatch(fetchAuthors());
dispatch(fetchTags());
dispatch(fetchPages());
    },[dispatch])
    let a= 'total posts'
    let b= 'total tags'
    let c ='total pages'
    let d = 'total authors'
    console.log(posts)
    const lab = posts.posts.map(item=>

        dateFormat(item.published_at,'mmmm')
    
        )

console.log(lab)
const counts = {}
const count = lab.forEach((x)=>{
    counts[x] =(counts[x] || 0) +1

})
console.log(counts);
const {January,February,March,April,May,June,July,August,September,October,November,December} = counts

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
      value:February
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
      value:July
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
        label: "Nov",
        value:November
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
        //Set the chart caption
        caption: "Post Per Month",
        //Set the chart subcaption
        // subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "Months",
        //Set the y-axis name
        yAxisName: "Number of Posts",
        numberSuffix: "",
        //Set the theme for your chart
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
            <h3 style={{color:'grey'}}>Dashboard</h3>
            <div className={dash.blocks}>
                <div className={dash.box} >
                    <p>{a.toUpperCase()}</p>
                    {
                        Object.keys(posts).length===0 ?
                        (<div>...loading</div>):(
                            <p>{posts.posts.length}</p>
                        )
                    }
                
                    </div>
                <div className={dash.box}>
                <p>{b.toUpperCase()}</p>
                {
                    Object.keys(tags).length===0 ?
                    (<div>...loading</div>):
                    ( <p>{tags.tags.length}</p>)
                }
                   

                    </div>
                <div className={dash.box}>
                <p>{c.toUpperCase()}</p>
                {
                    Object.keys(pages).length === 0 ?
                    (<div>...loading</div>):
                    ( <p>{pages.pages.length}</p>)
                }
               

                    </div>
                <div className={dash.box}>
                <p>{d.toUpperCase()}</p>
                {
                    Object.keys(authors).length===0?
                    (<div>...loading</div>):
                    (<div> <p>{authors.authors.length}</p></div>)
                }
               

                    </div>
            </div>
       <div className={dash.chartSection}>
  <div className={dash.box}>A</div>
  <div className={dash.box}>
 

{/* // STEP 3 - Creating the JSON object to store the chart configurations */}
<ReactFC {...chartConfigs} />
  </div>
       </div>
        </div>
    )
}

export default Dashboard
