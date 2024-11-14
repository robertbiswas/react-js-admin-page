import React from 'react'

function SampleForm() {
  return (
	<div className="p-8 xl">
		<form class="max-w-sm">
		<div class="mb-5">
			<label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
			<input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
		</div>
		<div class="mb-5">
			<label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
			<input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
		</div>
		<div class="mb-5">
			<label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
			<input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
		</div>
		<div class="flex items-start mb-5">
			<div class="flex items-center h-5">
			<input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
			</div>
			<label for="terms" class="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" class="text-blue-600 hover:underline ">terms and conditions</a></label>
		</div>
		<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Register new account</button>
		</form>


	</div>
  )
}

export default SampleForm