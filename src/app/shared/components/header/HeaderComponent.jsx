import Image from 'next/image';
import Link from 'next/link';

export default function HeaderComponent(){
	
	return(
		<header className='w-full bg-meli'>
			<div className='max-w-screen-xl mx-auto p-8 flex gap-4 items-center'>
				<Link href="/">
					<Image width={134} height={34} src="/images/logo.png" alt="logo" />
				</Link>
				<form className="w-full flex" action="/items">
					<input className="flex-1 py-3 px-6 shadow-md outline-none" autoComplete='off' name="q" type='text' placeholder='Buscar productos, marcas y más...' />
					<button className="bg-white px-4 border-l shadow-md border-l-slate-200">
						<Image width={16} height={16} src="/images/search.webp" alt="Banner" />
					</button>
				</form>
			</div>
		</header>
	)
	
}