export default function ProductImage({thumbnail,title}){	
	return(
		<div>
			<img className="w-52 h-52 object-contain" src={thumbnail} alt={title} />
		</div>
	)
}