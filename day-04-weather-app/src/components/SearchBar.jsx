export const SearchBar = (props) => {
    return (
        <div className="flex flex-row gap-3 justify-center items-center px-10 py-5">
            <input type="text" className="border-2 rounded-lg py-2 px-4 w-full max-w-[60%]" placeholder="Search city" onChange={props.handleCity} />
            <button className="bg-blue-300 py-2 px-5 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors active:bg-blue-900 uppercase font-semibold" onClick={props.fetchData} >Search</button>
        </div>
    )
}