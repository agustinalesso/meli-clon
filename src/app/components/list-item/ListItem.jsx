import ProductImage from "../product-image/ProductImage";
import ProductDescription from "../product-description/ProductDescription";

export default function ListItem({ title, thumbnail, price, currency_id, shipping, installments }){
	
	return(
		<li>
			<div className="flex p-4 border-b border-b-gray-200">
				<ProductImage thumbnail={thumbnail} title={title} />
				<ProductDescription title={title} price={price} currency_id={currency_id} shipping={shipping} installments={installments} />
				<div className="w-52 h-52">
					3
				</div>
			</div>
		</li>
	)
}