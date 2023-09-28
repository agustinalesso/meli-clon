"use client";
import React, { useEffect, useState } from 'react';
import ListItem from '../components/list-item/ListItem';

export default function ItemsPage({searchParams}){
	const [isLoading, setIsLoading] = useState(true);
	const [resultado, setResultado] = useState([]);
	
	useEffect( () => {
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams?.q}&limit=25`)
			.then( res => res.json() )
			.then( data => {
				setIsLoading(false);
				setResultado(data.results);
			})
	} , [] );
	
	console.log('resultado',resultado);
	
	return (
		<div className='p-8 max-w-screen-xl mx-auto mt-6'>
			<ul className='bg-white p-2'>
				{ resultado.map( (item) => <ListItem key={item.id} {...item} /> ) }
			</ul>
		</div>
	)
}