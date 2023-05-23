import { getProducts } from 'lib/shopify';

export async function fetchAllProducts() {
  try {
    const data = await getProducts({});
    // console.log('Data received:', data);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
  return <div>Hello</div>;
}
