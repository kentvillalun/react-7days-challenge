const Favorites = ({ favorites }) => {
    return (
        <div className="md:order-1">
          <h2 className="font-mono text-lg">Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {favorites.map((item) => (
            <li key={item.id} className="p-3 rounded-lg bg-gray-100 rounded">
              {item.fact}
            </li>
          ))}
        </ul>
      )}
        </div>
    );
}
 
export default Favorites;