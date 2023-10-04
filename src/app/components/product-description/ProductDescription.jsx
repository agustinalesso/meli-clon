import { useCurrencyConverter } from "@/app/utils/useCurrencyConverter"

export default function ProductDescription({title, price, currency_id, shipping, installments}) {
	
	const { toCurrency } = useCurrencyConverter();
	const { free_shipping } = shipping;	
	
	return(
		<div className="flex-1">
			<div className='flex flex-col'>
				<h2 className="text-xl font-extralight">{title}</h2>
				<span className="text-2xl">{ toCurrency(price, currency_id) }</span>						
				{
					installments && <span>{ `en ${installments?.quantity} x ${toCurrency(installments.amount, currency_id)}` }</span>
				}
				{
					free_shipping && <span className="text-green-500">Envío gratis</span>
				}
			</div>
		</div>
	)
}