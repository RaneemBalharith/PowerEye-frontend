const energyValueFromDatabase = 50; // Replace with the energy value from your database
const CostFromDatabase = 0.40;

// Function to convert energy to cost
const convertEnergyToCost = (energyValue) => {
    // Assuming a fixed rate for cost calculation
    const RCT = 0.8 / 100; // Cost per kWh (change this value as needed)
  
    // Perform the conversion
    let cost = energyValue * RCT;
    cost = cost.toFixed(2);
    return cost;
  };
  
  // Cost Usage:
  
  const cost = convertEnergyToCost(energyValueFromDatabase);
  console.log('Cost:', cost);

//-------------------------------
  // Function to convert energy to CO2e
const convertEnergyToCO2e = (energyValue) => {
    // Assuming a fixed rate for CO2e calculation
    const ECF = 0.569; // Cost per kWh (change this value as needed)
  
    // Perform the conversion
    let CO2e = energyValue * ECF;
    CO2e = CO2e.toFixed(2);
    return CO2e;
  };

   // CO2e Usage:
   const CO2e = convertEnergyToCO2e(energyValueFromDatabase);
   console.log('CO2e:', CO2e);

   //-------------------------
   // Function to convert cost to energy
const convertCostToEnergy = (costValue) => {
    // Assuming a fixed rate for cost calculation
    const RRCT = 100 / 0.8; // Cost per kWh (change this value as needed)
  
    // Perform the conversion
    let energy = costValue * RRCT;
    energy = energy.toFixed(2);
    return energy;
  };

   // energy Usage:
   const energy = convertCostToEnergy(Cost);
   console.log('Energy:', energy);

   //----------------------------------
  const compareCostGoal = (costGoal, lastMonthEnergy) => {
    const lastMonthCost = convertEnergyToCost(lastMonthEnergy);

    let percentage = (costGoal / lastMonthCost)*100;
     percentage = Math.floor(percentage);

     return percentage;

  }

  //__________________________
  //imageConvertor
 
  const uploadImage = async (imageUri) => {
    try {
      let formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        type: 'image/png', // Adjust the type as needed (image/png, image/jpg, etc.)
        name: 'image.png'
      });
  
      const response = await fetch('http://127.0.0.1:5000/upload_profile_pic', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          // Add any necessary headers for authorization or other requirements
        }
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Image upload successful:', responseData);
        // Handle the response accordingly
      } else {
        console.error('Image upload failed');
        // Handle the failure or error cases
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle the error in the image upload process
    }
  };

  

  
