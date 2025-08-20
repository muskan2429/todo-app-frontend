import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="border-2 border-gray-800 p-4 bg-gray-500 flex justify-between">
            <Link to="/add">
                <button className="border-2 border-gray-800 bg-gray-800 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                    Add
                </button>
            </Link>


            <div className="flex gap-4">
                <Link to="/show">
                    <button className="bg-gray-800 border-2 border-gray-800 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                        Show
                    </button>
                </Link>
                <Link to="/done">
                    <button className="bg-gray-800 border-2 border-gray-800 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                        Done
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;