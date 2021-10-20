const merge = (target: any[], source: any[]) => {
	for (const key of Object.keys(source)) {
		if (source[key as any] instanceof Object)
			// @ts-ignore
			Object.assign(source[key], merge(target[key], source[key]))
	}
	Object.assign(target || {}, source)
	return target
}
export default merge
