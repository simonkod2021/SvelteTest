export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	category: string;
}

export const products: Product[] = [
	{
		id: 1,
		name: 'Wireless Headphones',
		description: 'Premium noise-cancelling wireless headphones with 30h battery life.',
		price: 899,
		image: 'https://picsum.photos/seed/headphones/400/300',
		category: 'Electronics'
	},
	{
		id: 2,
		name: 'Running Shoes',
		description: 'Lightweight and comfortable running shoes for everyday training.',
		price: 1299,
		image: 'https://picsum.photos/seed/shoes/400/300',
		category: 'Sports'
	},
	{
		id: 3,
		name: 'Coffee Maker',
		description: 'Automatic drip coffee maker with timer and 12-cup capacity.',
		price: 549,
		image: 'https://picsum.photos/seed/coffee/400/300',
		category: 'Home'
	},
	{
		id: 4,
		name: 'Backpack',
		description: 'Water-resistant backpack with laptop compartment, 25L.',
		price: 699,
		image: 'https://picsum.photos/seed/backpack/400/300',
		category: 'Accessories'
	},
	{
		id: 5,
		name: 'Desk Lamp',
		description: 'Adjustable LED desk lamp with multiple brightness levels.',
		price: 349,
		image: 'https://picsum.photos/seed/lamp/400/300',
		category: 'Home'
	},
	{
		id: 6,
		name: 'Smartwatch',
		description: 'Fitness tracking smartwatch with heart rate monitor and GPS.',
		price: 1999,
		image: 'https://picsum.photos/seed/watch/400/300',
		category: 'Electronics'
	}
];
