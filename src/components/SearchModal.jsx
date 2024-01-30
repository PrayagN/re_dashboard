import React from "react";
import Modal from "react-modal";

export default function SearchModal({ isOpen, setIsOpen }) {
  const [showAdvancedOptions, setShowAdvancedOptions] = React.useState(false);

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    setShowAdvancedOptions(false)
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60%", // Set the width as needed
    },
  };

  const handleSearch = () => {
    // Add your search logic here
    // For now, you can just close the modal
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            backgroundColor: "green",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            width: "100%", // Full width of the modal
          }}
        >
          <h1 style={{ color: "white", fontSize: 16 }}>
            Find Products and Categories
          </h1>
          <h1 onClick={closeModal} style={{ color: "black", fontSize: 16 }}>
            X
          </h1>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 10,
            padding: 20, // Add padding for better spacing
          }}
        >
          <div>
            <label htmlFor="keywordInput" style={{fontWeight:'600',fontSize:16}}>Keyword</label>
            <input
              id="keywordInput"
              type="text"
              placeholder="keyboard"
              style={{ marginLeft: 10 ,width:'100vh',height:'30px',paddingLeft:10,borderColor:'black',borderWidth:0.2}}
            />
          </div>

          <div style={{ alignItems: "start" }}>
            <label htmlFor="categoryDropdown" style={{fontWeight:'600',fontSize:16}}>Include</label>
            <select id="categoryDropdown" style={{ marginLeft: 10 }}>
             
              <option value="Products and Categories"> Products and Categories</option>
              <option value="Products only">Products only</option>
              <option value="Categories only">Categories only</option>
            </select>
          </div>

          <div>
            <label style={{fontWeight:'600',fontSize:16}}>Advanced</label>
            <input
              type="checkbox"
              
              onChange={() => setShowAdvancedOptions(!showAdvancedOptions)}
            />
          </div>

          {showAdvancedOptions && (
            <>
              <div>
                <label id="StatusDropdown" style={{fontWeight:'600',fontSize:16}}>Status</label>
                <select id="StatusDropdown" style={{ marginLeft: 10 }}>
                  <option value="Any">Any</option>
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </select>
              </div>

              <div>
                <label id="DateDropdown" style={{fontWeight:'600',fontSize:16}}>Date</label>
                <select id="DateDropdown" style={{ marginLeft: 10 }}>
                  <option value="All Time">All Time</option>
                  <option value="Last 24 Hours">Last 24 Hours</option>
                  <option value="Last 7 Days">Last 7 Days</option>
                  <option value="Last 30 Days">Last 30 Days</option>
                  <option value="Last 6 Months">Last 6 Months</option>
                </select>
              </div>
            </>
          )}

          <div style={{ display: "flex", justifyContent: "space-between",gap:10 }}>
            <button
              onClick={handleSearch}
              style={{
                backgroundColor: "green",
                color: "white",
                padding: 10,
                paddingRight: 12,
                border: "none",
                // width: '45%', // Adjust width as needed
                borderRadius: 2,
              }}
            >
              Search
            </button>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  padding: 5,
                  paddingLeft:5,
                  paddingRight:5,
                  color: "black",
                //   height: 30,
                  // width: '45%', // Adjust width as needed
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
