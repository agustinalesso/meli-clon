// Creo mi custom hook y lo exporto
export const useAttributes = (attributes) => {
	
	// Creo la función dentro de mi custom hook
	const getAttributeValue = (id) => {
		const { value_name } = attributes?.find(item => item.id === id) || {};
		
		return value_name ? value_name : '';
	}
	
	// retorno la función para que pueda ser usada en otro lado.
	return { getAttributeValue };
	
}