module.exports = {
	runtimeCompiler: true,

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'KPICall'
				return args
			})
	},
	publicPath: process.env.NODE_ENV === 'production'
    ? '/ui-ux-kpi-call/'
    : '/'
}
