import { useEffect, useState } from "react";

const useTheme=()=>{
	const [theme,setTheme]=useState(false);
	useEffect(() => {
		document.body.classList.toggle('dark');
	}, [theme]);
	return [theme,setTheme];
}
export default useTheme;