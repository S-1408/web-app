import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import blogApi from "../api/blogApi"
import { APIKey } from './../api/blog-api-key';

export const fetchPages = createAsyncThunk('pages/fetchPages' ,async()=>{
    const pageText ='page'
    const response = await blogApi
    .get(`/pages/?key=${APIKey}`)
    .catch(err=>{
        console.log(err)
    })
    console.log(response.data)
   return response.data
})
export const fetchPosts = createAsyncThunk('posts/fetchPosts',async()=>{
       
    const response = await blogApi
    .get(`/posts/?key=${APIKey}`)
    .catch(err=>{
        console.log(err)
    })
    console.log(response.data)

    return response.data
})
export const fetchAuthors =createAsyncThunk('authors/fetchAuthor', async()=>{
     const response = await blogApi
     .get(`/authors/?key=${APIKey}`)
     .catch(err=>{
         console.log(err)
     })
     console.log(response.data);
     return response.data
})
export const fetchAllPost =createAsyncThunk('allPost/fetchAllPost', async()=>{
    const response = await blogApi
    .get(`/posts/?key=${APIKey}&include=tags,authors`)
    .catch(err=>{
        console.log(err)
    })
    console.log(response.data);
    return response.data
})
export const  fetchTags = createAsyncThunk('tags/fetchTags', async ()=>{
    const response = await blogApi
    .get(`tags/?key=${APIKey}`)
    .catch(err=>{
        console.log(err)
    })
    console.log(response.data)
    return response.data
})
const initialState ={
    pages:{},
    posts:{},
    authors:{},
    tags:{},
    allPost:{}
}

const pageSlice = createSlice({
    initialState,
    name: 'pages',
   
    extraReducers:{
       [fetchPages.pending]:()=>{
          console.log('pending pages')
       },
       [fetchPages.fulfilled]:(state,{payload})=>{
           console.log('pages fulfilled successfully')
           return {...state,pages:payload}
       },
       [fetchPages.rejected]:()=>{
           console.log('pages load rejected')
       },
       [fetchPosts.rejected]:()=>{
        console.log('posts failed')
      
       },
       [fetchPosts.fulfilled]:(state,{payload})=>{
        console.log('posts fulfilled successfully')
        return {...state,posts:payload}
       },
       [fetchAuthors.fulfilled]:(state,{payload})=>{
        console.log('authors fulfilled successfully')

           return {...state,authors:payload}
       },
       [fetchTags.fulfilled]:(state,{payload})=>{
        console.log('tags fulfilled successfully')

        return {...state,tags:payload}
       },
       [fetchAllPost.fulfilled]:(state,{payload})=>{
           console.log('allPost full filled');
           return {...state,allPost:payload}
       }
    }
})

// export const {addPages} = pageSlice.actions
export const getAllPages = (state)=>state.pages.pages
export const getPosts = (state)=>state.posts.posts
export const getAllPost = (state)=> state.allPost.allPost
export const getAllTags = (state)=> state.tags.tags
export const getAllAuthors = (state)=> state.authors.authors
export default pageSlice.reducer

