<template>
	<div class="container">
		
		<table class="table table-striped mt-4">
		  <thead >
		    <tr>
		      <th scope="col">ID</th>
		      <th scope="col">Title</th>
		      <th scope="col">Body</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="post in posts" v-bind:key="post.id">
		      <th scope="row">{{ post.id }}</th>
		      <td>{{ post.title }}</td>
		      <td>{{ post.body }}</td>
		    </tr>
		  </tbody>
		</table>

	</div>
</template>

<script type="text/javascript">

	import axios from 'axios';
	
	export default {
		name: 'PostsExample',
		data() {
			return {
				posts: []
			}
		},
		beforeMount: () => {
			console.log("before mount");
		},
		mounted() {
			console.log("mounted!");

			axios.get("https://jsonplaceholder.typicode.com/posts")
			.then( (response) => { 
				this.posts = response.data;
			});

		},
		beforeCreate() {
			console.log("before create");
		},
		created() {
			console.log("created");
		}
	}
</script>

<style type="text/css">
	
</style>