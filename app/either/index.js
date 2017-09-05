export const Right=x=>({
	fold: (f,g)=>g(x),
	chain : f => f(x),
	map : f => Right(f(x)),
	inspect: () => `Right(${x})`
})
export const Left=x=>({
	fold: (f,g)=>f(x),
	chain : f => left(x),
	map : f => Left(x),
	inspect: () => `Left(${x})`
})