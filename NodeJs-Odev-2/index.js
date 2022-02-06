/* 
Blog oluşturmaya hazır mısınız? 
Konsol ekranında postlarımızı sıralayalım, 
sonrasında yeni bir post oluşturalım 
ve yeni post ile birlikte postlarımızı 
tekrar sıralayalım.
*/

let blogPosts = [
	{ title: 'Blog Post Title 1', body: 'Blog Post Body 1', author: 'Anıl'},
	{ title: 'Blog Post Title 2', body: 'Blog Post Body 2', author: 'Anıl'},
	{ title: 'Blog Post Title 3', body: 'Blog Post Body 3', author: 'Kazım'},
	{ title: 'Blog Post Title 4', body: 'Blog Post Body 4', author: 'Kazım'},
	{ title: 'Blog Post Title 5', body: 'Blog Post Body 5', author: 'Aydın'}
]

const listAllPost = (items) => {
    return new Promise((resolve,reject) => {
    	if (items) {
    		items.forEach((post) => {
            	console.log(post)
        	})
        	resolve('Postlar listelendi!')
    	}
        reject('Postlar listelenirken bir hata olustu!')
    })
}

const addNewPost = (post, target) => {
	return new Promise((resolve, reject) => {
		if (post && target) {
			target.push(post)
			console.log(post)
			resolve('Post eklendi!')
		}
		reject('Post eklenirken bir hata olustu!')
	})
}

const asyncProcess = async () => {
	try {
		let listPost1 = await listAllPost(blogPosts)
			.then((data) => console.log(data))
			.catch((err) => console.log(err))

		let newPost = { 
			title: 'Blog Post Title 6', 
			body: 'Blog Post Body 6', 
			author: 'Anıl'
		}

		let addPost1 = await addNewPost(newPost, blogPosts)
			.then((data) => console.log(data))
			.catch((err) => console.log(err))

		let listPost2 = await listAllPost(blogPosts)
			.then((data) => console.log(data))
			.catch((err) => console.log(err))
	}catch {
		console.log('Asenkron islemler yapilirken bir hata olustu!')
	}

}

asyncProcess()