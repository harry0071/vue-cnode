<template>
	<header>
		<router-link to="/">
			<img src="@/assets/imgs/cnodejs_light.svg">
		</router-link>
<!-- 		<nav>
			<ul>
				<li><router-link to='/'>首页</router-link></li>
				<li><a href="javascript:;">新手入门</a></li>
				<li><a href="javascript:;">API</a></li>
				<li><a href="javascript:;">关于</a></li>
				<li><a href="javascript:;">注册</a></li>
				<li><a href="javascript:;">登录</a></li>
			</ul>
		</nav> -->
	</header>
</template>

<style scoped>
	header{
		background-color: #444;
		min-height: 50px;
	}

	header img{
		max-width: 120px;
		margin: 8px 0 0 50px;
		cursor: pointer;
	}
	nav{
		float: right;
		margin: 16px 40px 0 0;
	}

	nav li{
		display: inline-block;
		padding: 0 8px;
	}
	nav li>a{
		color: #ccc;
		font-size: 14px;
	}
	nav li>a:hover{
		color: white;
	}
</style>