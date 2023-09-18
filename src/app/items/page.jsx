export default async function ItemsPage({searchParams}){
	
	const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.q}&limit=25`);
	const data = await respuesta.json();
	
	
	return (
		<></>
	)
}