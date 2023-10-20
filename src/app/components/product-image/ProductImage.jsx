export default function ProductImage({thumbnail,title}){	
	return(
		<div className="px-6">
			<img className="w-40 h-40 object-contain" src={thumbnail} alt={title} />
		</div>
	)
}