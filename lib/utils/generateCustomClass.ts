// 解决 class 命名繁琐问题
const formatClass = (prefix: string) => (name?: string): string => {
	return [prefix, name].filter(Boolean).join('-');
};

export {formatClass};