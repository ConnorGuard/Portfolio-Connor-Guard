import { createClient } from 'contentful'

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
})

export default async function GetProjects(){
    const {items} = await client.getEntries({content_type: 'projects'});
    return(items);
}

export async function getProject({params}){
    const {items} = await client.getEntries({
        content_type: 'blog',
        'fields.slug': params.slug
    });
    return(items[0]);
}