interface Options {
	extra: string | undefined;
}

interface ClassToggles {
	[key: string]: boolean;
}

// 解决 class 命名繁琐问题
const formatClass = (prefix: string) => (name: string | ClassToggles, options?: Options): string => {
	return Object.entries(name instanceof Object ? name : {[name]: name})
		.filter(keyValue => keyValue[1] !== false)
		.map(kv => kv[0])
		.map(name => [prefix, name]
			.filter(Boolean)
			.join('-'))
		.concat(options && options.extra || [])
		.join(' ');

};

export {formatClass,Options,ClassToggles};