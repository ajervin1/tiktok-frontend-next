'use client'
import {useState} from "react";
import {useRouter} from 'next/navigation'

export default function SearchForm() {
	const router = useRouter()
	const handleSubmit = (e) => {
		event.preventDefault()
		const searchTerm = e.target.elements.search.value
		router.push(`/results/${searchTerm}`)
	}
	return <form onSubmit={handleSubmit} className="search">
		<div className="w-75 mx-auto d-flex">
			<input name="search" className={"form-control"} type="text"/>
			<button type={'submit'} className={"btn btn-primary"}>Search</button>
		</div>
	</form>
}