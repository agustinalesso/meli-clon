export function useCurrencyConverter(){
	
	const toCurrency = (value, currency_id) => {
		return new Intl.NumberFormat('es-AR', { style: 'currency', currency: currency_id }).format(value);
	}

	
	return { toCurrency }
	
}