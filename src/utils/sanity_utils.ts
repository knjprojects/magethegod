//this is the only front end filke that Is needed for loading our project into nextjs but I put it in our backend files to easily get all sanity related files
import { createClient, groq } from "next-sanity";
import { Post } from "../../typings";
import { SANITY_PROJECT_ID, SANITY_DATASET } from "../../env";
const config = {
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "1",
  useCdn: false,
};
export async function getPosts(): Promise<Post[]> {
  return await createClient(config).fetch(
    // chef->{name},
    groq`*[_type == "post"]{
       title, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat":cat->title
    }` /*sanity vision que3ry "*[_type == "post"]{
      title, 
      "image":mainImage.asset->url,
         "slug":slug.current,
        "cat":cat->slug.current
    }"*/
  );
}
/*export async function getDishesbyCategory(cat:string): Promise<Dish[]> {
  return await createClient(config).fetch(// chef->{name},
    groq`*[_type == 'dish' && cat->slug.current==$cat ]{
      price, name, type, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat": cat->slug.current
    }`,
    { cat }
  )
}*/
//excluding our friday and wednesday specials hich is bbq and chifrychci
export async function getPostsbyCategory(cat: string): Promise<Post[]> {
  return await createClient(config).fetch(
    // chef->{name},
    groq`*[_type == 'post' && cat->slug.current==$cat ]{
     title, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat": cat->slug.current
    }`,
    { cat }
  );
}
export async function getDish(slug: string): Promise<Post> {
  return await createClient(config).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title, description, 
      "slug": slug.current,
      "image": image.asset->url,
      "cat": cat->slug.current
    }`,
    { slug }
  );
}
/*perspective: 'published',
    studioUrl: '/studio',
    logger: console,*/
//token:process.env.sanityToken
