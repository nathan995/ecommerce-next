import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'xbs25fy3',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
