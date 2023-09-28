export default function ListItem({ title, thumbnail, price, currency_id, shipping }){
	return(
		<li>
			<div className="flex p-4 border-b border-b-gray-200">
				<div>
					<img className="w-52 h-52 object-contain" src={thumbnail} alt={title} />
				</div>
				<div className="flex-1">
					2
				</div>
				<div className="w-52 h-52">
					3
				</div>
			</div>
		</li>
	)
}