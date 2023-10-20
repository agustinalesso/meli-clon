import ProductImage from "../product-image/ProductImage";
import ProductDescription from "../product-description/ProductDescription";
import Link from "next/link";

export default function ListItem({ id, title, thumbnail, price, currency_id, shipping, installments, attributes }){
	
	const itemUrl = `/items/${id}`;
	
	return(
		<li>
			<Link href={itemUrl}>
				<div className="flex p-4 border-b border-b-gray-200">
					<ProductImage thumbnail={thumbnail} title={title} />
					<ProductDescription attributes={attributes} title={title} price={price} currency_id={currency_id} shipping={shipping} installments={installments} />
					<div className="w-40 h-40">
						3
					</div>
				</div>
			</Link>
		</li>
	)
}