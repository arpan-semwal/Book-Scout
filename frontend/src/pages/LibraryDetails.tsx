import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axiosInstance";

// 1. Interfaces (Jo humne discuss kiye the)
interface PricingPlan {
  id: number;
  name: string;
  price: number;
  durationDays: number;
}

interface Floor {
  id: number;
  floorNumber: number;
  pricingPlans: PricingPlan[];
}

interface LibraryDetail {
  id: number;
  name: string;
  address: string;
  contactNumber: string;
  amenities: string[];
  floors: Floor[];
}

const LibraryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [library, setLibrary] = useState<LibraryDetail | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [loading, setLoading] = useState(true);

  // 2. Fetch Data Logic
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await API.get(`/libraries/details/${id}`);
        setLibrary(res.data);
      } catch (err) {
        console.error("Error fetching details", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading Details... 📚</div>;
  if (!library) return <div className="p-10 text-center">Library not found!</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-fadeIn">
      {/* Header Section */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border mb-8">
        <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 font-semibold">
          ← Back to Explore
        </button>
        <h1 className="text-3xl font-extrabold text-gray-800">{library.name}</h1>
        <p className="text-gray-500 mt-2 flex items-center">📍 {library.address}</p>
        <p className="text-gray-500 mt-1 flex items-center">📞 {library.contactNumber}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {library.amenities.map((item) => (
            <span key={item} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing Plans Section */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose a Membership Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {library.floors.flatMap(floor => floor.pricingPlans).map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan)}
            className={`cursor-pointer p-6 rounded-3xl border-2 transition-all ${
              selectedPlan?.id === plan.id 
                ? "border-blue-600 bg-blue-50 shadow-md" 
                : "border-gray-100 bg-white hover:border-blue-200"
            }`}
          >
            <h3 className="text-lg font-bold text-gray-800">{plan.name}</h3>
            <p className="text-3xl font-black text-blue-600 mt-2">₹{plan.price}</p>
            <p className="text-gray-500 text-sm mt-1">Valid for {plan.durationDays} days</p>
            
            <div className={`mt-4 w-full py-2 rounded-xl text-center font-bold text-sm ${
              selectedPlan?.id === plan.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"
            }`}>
              {selectedPlan?.id === plan.id ? "Selected ✅" : "Select Plan"}
            </div>
          </div>
        ))}
      </div>

      {/* Next Step Button */}
      {selectedPlan && (
        <div className="mt-10 flex justify-center sticky bottom-10">
          <button 
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-transform"
            onClick={() => alert(`Plan ${selectedPlan.name} selected. Now let's pick a seat!`)}
          >
            Select Your Seat →
          </button>
        </div>
      )}
    </div>
  );
};

export default LibraryDetails;