import React, { useEffect, useState } from "react";
import API from "../api/axiosInstance";
import { AxiosError } from "axios";
interface Library {
  id: number;
  name: string;
  address: string;
  contactNumber: string;
  type: string;
  amenities: string[];
  latitude: number;
  longitude: number;
}
const OwnerDashboard = () => {
  // 1. States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [libraries, setLibraries] = useState<Library[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactNumber: "",
    type: "reading_room",
    amenities: [] as string[],
  });

  const availableAmenities = [
    "WiFi",
    "AC",
    "Power Backup",
    "Drinking Water",
    "CCTV",
  ];

  // 2. Fetch Libraries Logic
  const fetchMyLibraries = async () => {
    try {
      const res = await API.get("/libraries/my-libraries");
      setLibraries(res.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchMyLibraries();
  }, []);

  // 3. Stats Calculation (Dynamic)
  const stats = [
    {
      label: "Total Libraries",
      value: libraries.length.toString(),
      icon: "🏢",
      color: "text-blue-600",
    },
    {
      label: "Active Booking",
      value: "0",
      icon: "✅",
      color: "text-green-600",
    },
    {
      label: "Today's Revenue",
      value: "₹0",
      icon: "💰",
      color: "text-orange-600",
    },
  ];

  const closeAndReset = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      name: "",
      address: "",
      contactNumber: "",
      type: "reading_room",
      amenities: [],
    });
  };

  const handleEdit = (lib: Library) => {
    setEditingId(lib.id);
    setFormData({
      name: lib.name,
      address: lib.address,
      contactNumber: lib.contactNumber,
      type: lib.type,
      amenities: lib.amenities,
    });
    setIsModalOpen(true);
  };

  // 4. Handlers
  const handleAmenityChange = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!navigator.geolocation) {
      alert("Browser location support nahi kar raha hai.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const payload = {
            ...formData,
            latitude,
            longitude,
          };

          // API call to backend
          if (editingId) {
            await API.put(`/libraries/${editingId}`, payload);
            alert("Library updated ✅");
          } else {
            await API.post("/libraries/create", payload);
            alert("Registered New Library! 🎉 ");
          }
          //Reset Everything and Refresh list
          closeAndReset();
          // Refresh the list immediately
          fetchMyLibraries();
        } catch (error: unknown) {
          const axiosError = error as AxiosError<{ message: string }>;
          console.error("Submission Error:", axiosError);
          const errorMessage =
            axiosError.response?.data?.message || "Kuch toh gadbad hai!";
          alert(errorMessage);
        } finally {
          setLoading(false);
        }
      },
      (geoError) => {
        console.error("Location Error:", geoError);
        alert("Allow location to get registered.");
        setLoading(false);
      },
    );
  };

  //pass id into the function so that it knows which id to delte
  const handleDelete = async (id: number) => {
    //Confirmation to delete library
    if (!window.confirm("Are you sure you want to delete library")) return;

    try {
      await API.delete(`/libraries/${id}`);
      alert("Library got deleted");

      fetchMyLibraries();
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Library did not get deleted");
    }
  };

  return (
    <div className="p-4 md:p-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            Owner Dashboard
          </h1>
          <p className="text-gray-500">
            Manage Your Libraries and track performance
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all active:scale-95"
        >
          + Add New Library
        </button>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
                <h3 className={`text-3xl font-bold mt-1 ${stat.color}`}>
                  {stat.value}
                </h3>
              </div>
              <div className="text-4xl bg-gray-50 p-3 rounded-xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content: List or Empty State */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Your Registered Libraries
      </h2>

      {libraries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries.map((lib) => (
            <div
              key={lib.id}
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold uppercase px-2 py-1 rounded-md">
                  {lib.type.replace("_", " ")}
                </span>
                <p className="text-gray-400 text-xs">ID: #{lib.id}</p>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {lib.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                📍 {lib.address}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {lib.amenities?.map((amenity: string) => (
                  <span
                    key={amenity}
                    className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-lg"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <button className="w-full py-2 bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">
                  View Details
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(lib)}
                    className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-colors"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="flex-1 py-2 bg-red-50 text-red-600 rounded-xl font-semibold text-sm hover:bg-red-100 transition-colors"
                    onClick={() => handleDelete(lib.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border-2 border-dashed border-gray-200 p-12 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-xl font-bold text-gray-700">
            No Libraries Found
          </h2>
          <p className="text-gray-500 mt-2">
            Pehli library add karne ke liye upar diye gaye button par click
            karein.
          </p>
        </div>
      )}

      {/* --- ADD LIBRARY MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingId ? "Edit Library Details" : "Register New Library"}
              </h2>
              <button
                onClick={closeAndReset}
                className="text-gray-400 hover:text-gray-600 text-3xl"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  Library Name
                </label>
                <input
                  value={formData.name}
                  required
                  type="text"
                  placeholder="Peaceful Study Zone"
                  className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Type
                  </label>
                  <select
                    value={formData.type} // Yeh line add karo
                    className="w-full border rounded-xl p-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <option value="reading_room">Reading Room</option>
                    <option value="bookstore">Bookstore</option>
                    <option value="library">Library</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Contact Number
                  </label>
                  <input
                    value={formData.contactNumber}
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  Full Address
                </label>
                <textarea
                  value={formData.address}
                  required
                  placeholder="Plot no, Street, Area, City..."
                  className="w-full border rounded-xl p-3 h-20 outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Amenities
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableAmenities.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleAmenityChange(item)}
                      className={`px-4 py-2 rounded-full border transition-all font-medium ${
                        formData.amenities.includes(item)
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 disabled:bg-blue-300 transition-all active:scale-[0.98]"
                >
                  {loading
                    ? "Processing..."
                    : editingId
                      ? "Save Changes"
                      : "Register Library"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerDashboard;
