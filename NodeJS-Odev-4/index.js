
const fs = require('fs');

const writeFile = (file, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, data, 'utf8', (err) => {
		    if (err) reject(err)
		   	resolve('Dosya olusturuldu!')
		})
	})
}

const appendFile = (file, data) => {
	return new Promise((resolve, reject) => {
		fs.appendFile(file, data, 'utf8', (err) => {
		    if (err) reject(err)
		   	resolve('Dosyaya veri eklendi!')
		})
	})
}

const readFile = (file) => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, 'utf8', (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}

const deleteFile = (file) => {
	return new Promise((resolve, reject) => {
		fs.unlink(file, function (err) {
  			if (err) reject(err);
		  	resolve('Dosya silindi!')
		});
	})
}

const asyncProcess = async () => {

	try {
		const file = 'employees.json'
		const data = '{"name": "Employee 1 Name", "salary": 2000}'

		let fileWrite = await writeFile(file, data)
								.then(result => console.log(result))
								.catch(err => console.log(err))

		let fileRead = await readFile(file)
								.then(data => {
									console.log('Dosya okundu!')
									console.log(data)
								})
								.catch(err => console.log(err))

		const newData = '{"name": "Employee 2 Name", "salary": 5000}'
		
		let fileUpdate = await appendFile(file, '\n' + newData)
								.then(data => {
									console.log('Dosya guncellendi!')
									console.log(newData)
								})
								.catch(err => console.log(err))

		let fileDelete = await deleteFile(file)
						.then(result => console.log(result))
						.catch(err => console.log(err))

	} catch {
		console.log('Asenkron islemler yapilirken bir hata olustu!')
	}
	

}

asyncProcess()