import React, { useEffect, useState } from "react";
import API from "../api/axiosInstance";

interface LibraryExplore {
  id: number;
  name: string;
  address: string;
  type: string;
  amentities: string[];
  contactNumber: string;
  _count?: {
    floor: number;
  };
}

const StudentExplore = () => {
  //Use interface
  const [libraries, setLibraries] = useState<LibraryExplore[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchLibraries = async () => {
    try {
      const res = await API.get("/libraries");
      setLibraries(res.data);
    } catch (error) {
      console.error("Error Fetching", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async() => {
         if(searchTerm){
            try{
                const res = await API.get(`/libraries/search?q=${searchTerm}`);
                setLibraries(res.data);
            }catch(err){
                console.error("Search failed",err);
            }
         }else{
            fetchLibraries();
         }
    },500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen ">
      <h1 className="text-3xl font-bold mb-6">
        Find Your Perfect Study Space 📚
      </h1>
       
        <input 
            className="w-full p-4 rounded-2xl border shadow-sm" 
            type="text"
            placeholder="Search by name or area"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            
        />
     

      {loading ? (
        <p>Loading Libraries...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries.map((lib) => (
            /* Inner Div: Isse 'grid' ki jagah 'flex flex-col' karo */
            <div
              key={lib.id}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">
                  {lib.type}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mt-1">
                  {lib.name}
                </h2>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  📍 {lib.address}
                </p>
              </div>

              <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentExplore;
